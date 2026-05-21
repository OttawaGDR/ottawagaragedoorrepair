import { NextResponse } from 'next/server';
import { EMAIL, PHONE, BUSINESS_NAME, services, areas } from '../../../lib/data';
import { MAX_ATTACHMENT_BYTES } from '../../../lib/contactForm';
import { sendSms, toE164 } from '../../../lib/sms';

const CONTACT_LABELS = { call: 'Phone call', text: 'Text (SMS)' };

const TIME_LABELS = {
  morning: 'Morning (8AM – 12PM)',
  afternoon: 'Afternoon (12PM – 5PM)',
  evening: 'Evening (5PM – 9PM)',
  asap: 'ASAP / Emergency',
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function parseContactPayload(request) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const file = formData.get('attachment');
    let attachment = null;
    if (file && typeof file === 'object' && 'arrayBuffer' in file && file.size > 0) {
      if (file.size > MAX_ATTACHMENT_BYTES) {
        return { error: 'Attachment must be 4 MB or smaller.' };
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      attachment = { filename: file.name || 'attachment', content: buffer, size: file.size, type: file.type || '' };
    }
    return {
      name: formData.get('name')?.toString()?.trim(),
      phone: formData.get('phone')?.toString()?.trim(),
      email: formData.get('email')?.toString()?.trim(),
      service: formData.get('service')?.toString(),
      area: formData.get('area')?.toString(),
      message: formData.get('message')?.toString()?.trim(),
      preferredTime: formData.get('preferredTime')?.toString(),
      contactMethod: formData.get('contactMethod')?.toString(),
      attachment,
    };
  }

  const body = await request.json();
  return {
    name: body.name?.trim(),
    phone: body.phone?.trim(),
    email: body.email?.trim(),
    service: body.service,
    area: body.area,
    message: body.message?.trim(),
    preferredTime: body.preferredTime,
    contactMethod: body.contactMethod,
    attachment: null,
  };
}

export async function POST(request) {
  try {
    const parsed = await parseContactPayload(request);
    if (parsed.error) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const { name, phone, email, service, area, message, preferredTime, contactMethod, attachment } = parsed;

    if (!name || !phone || !service || !area) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, service, area' },
        { status: 400 }
      );
    }

    const method = contactMethod === 'text' ? 'text' : 'call';
    const methodLabel = CONTACT_LABELS[method];
    const serviceLabel = services.find((s) => s.slug === service)?.title || service;
    const areaLabel = areas.find((a) => a.slug === area)?.name || area;
    const timeLabel = TIME_LABELS[preferredTime] || preferredTime || 'Any time';
    const safeMessage = message ? escapeHtml(message) : '';
    const attachmentNote = attachment
      ? `<p><strong>Attachment:</strong> ${escapeHtml(attachment.filename)} (${Math.round(attachment.size / 1024)} KB)</p>`
      : '';

    const html = `
      <h2>Callback request – ${BUSINESS_NAME}</h2>
      <p><strong>Contact via:</strong> ${methodLabel}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || '—')}</p>
      <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
      <p><strong>Area:</strong> ${escapeHtml(areaLabel)}</p>
      <p><strong>Preferred time:</strong> ${escapeHtml(timeLabel)}</p>
      ${safeMessage ? `<p><strong>Issue description:</strong> ${safeMessage.replace(/\n/g, '<br>')}</p>` : ''}
      ${attachmentNote}
      <p><em>Please ${method === 'text' ? 'text' : 'call'} the customer back as soon as possible.</em></p>
    `;

    const text = `
Callback request – ${BUSINESS_NAME}
Contact via: ${methodLabel}
Name: ${name}
Phone: ${phone}
Email: ${email || '—'}
Service: ${serviceLabel}
Area: ${areaLabel}
Preferred time: ${timeLabel}
${message ? `Issue description: ${message}` : ''}
${attachment ? `Attachment: ${attachment.filename} (${Math.round(attachment.size / 1024)} KB)` : ''}
Please ${method === 'text' ? 'text' : 'call'} the customer back as soon as possible.
    `.trim();

    const businessE164 = toE164(PHONE);
    let smsSent = false;
    if (businessE164) {
      const smsBody = `Callback (${methodLabel}): ${name} ${phone} — ${serviceLabel}, ${areaLabel}. ${timeLabel !== 'Any time' ? timeLabel + '. ' : ''}${message ? message.slice(0, 60) + '… ' : ''}${attachment ? 'Photo attached (see email). ' : ''}Reply ASAP.`;
      const smsResult = await sendSms(businessE164, smsBody.slice(0, 320));
      smsSent = smsResult.ok;
      if (!smsResult.ok) console.warn('[Contact] SMS not sent:', smsResult.error);
    }

    let emailSent = false;
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);
      const fromAddr = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
      const fromName = process.env.RESEND_FROM_NAME || BUSINESS_NAME;
      const emailPayload = {
        from: `${fromName} <${fromAddr}>`,
        to: [EMAIL],
        subject: `Callback (${methodLabel}): ${name} – ${serviceLabel}${attachment ? ' 📎' : ''}`,
        html,
        text,
      };
      if (attachment) {
        emailPayload.attachments = [
          {
            filename: attachment.filename,
            content: attachment.content,
          },
        ];
      }
      const { data, error } = await resend.emails.send(emailPayload);
      if (error) {
        console.error('[Contact] Resend error:', JSON.stringify(error, null, 2));
        return NextResponse.json(
          { error: 'Request saved but we could not send the notification email. Please call or text us directly.', emailSent: false },
          { status: 200 }
        );
      }
      emailSent = true;
      if (data?.id) console.log('[Contact] Email sent to', EMAIL, '| Resend id:', data.id);
    } else {
      console.warn('[Contact] RESEND_API_KEY is not set.');
    }

    return NextResponse.json({
      success: true,
      emailSent,
      smsSent,
      contactMethod: method,
      attachmentReceived: Boolean(attachment),
    });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'Server error. Please try again or call us.' }, { status: 500 });
  }
}
