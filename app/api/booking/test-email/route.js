import { NextResponse } from 'next/server';
import { EMAIL, BUSINESS_NAME } from '../../../../lib/data';

/**
 * GET /api/booking/test-email
 * Call this in the browser or with fetch to see if Resend is configured and what it returns.
 * Helps debug why booking emails aren't arriving.
 */
export async function GET() {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({
      ok: false,
      configured: false,
      message: 'RESEND_API_KEY is not set. Add it to .env in the project root (same folder as package.json) and restart the dev server (npm run dev).',
      recipient: EMAIL,
    }, { status: 200 });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(resendKey);
    const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const fromDisplay = process.env.RESEND_FROM_NAME || BUSINESS_NAME;
    const { data, error } = await resend.emails.send({
      from: `${fromDisplay} <${from}>`,
      to: [EMAIL],
      subject: 'Test email – Ottawa Garage Door Repair booking',
      html: '<p>If you see this, the booking email system is working. Emails will be sent to this address when someone books a slot.</p>',
      text: 'If you see this, the booking email system is working. Emails will be sent to this address when someone books a slot.',
    });

    if (error) {
      return NextResponse.json({
        ok: false,
        configured: true,
        message: 'Resend API returned an error. Check the "error" field for details.',
        recipient: EMAIL,
        error: error,
      }, { status: 200 });
    }

    return NextResponse.json({
      ok: true,
      configured: true,
      message: 'Test email was sent. Check the inbox (and spam) for ' + EMAIL,
      recipient: EMAIL,
      resendId: data?.id || null,
    }, { status: 200 });
  } catch (e) {
    console.error('[test-email]', e);
    return NextResponse.json({
      ok: false,
      configured: true,
      message: 'Exception while sending: ' + (e?.message || String(e)),
      recipient: EMAIL,
    }, { status: 200 });
  }
}
