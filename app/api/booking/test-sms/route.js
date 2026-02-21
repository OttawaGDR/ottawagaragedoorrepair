import { NextResponse } from 'next/server';
import { PHONE } from '../../../../lib/data';
import { sendSms, toE164 } from '../../../../lib/sms';

/**
 * GET /api/booking/test-sms
 * Sends a test SMS to your business phone. Use to verify Twilio is configured.
 */
export async function GET() {
  const e164 = toE164(PHONE);
  if (!e164) {
    return NextResponse.json({
      ok: false,
      message: 'Business phone could not be parsed for SMS.',
      recipient: PHONE,
    }, { status: 200 });
  }

  const result = await sendSms(e164, 'Test from Ottawa Garage Door Repair booking – SMS is working. You’ll get a text when someone books.');
  if (result.ok) {
    return NextResponse.json({
      ok: true,
      message: 'Test SMS sent. Check your phone: ' + PHONE,
      recipient: PHONE,
    }, { status: 200 });
  }
  return NextResponse.json({
    ok: false,
    message: result.error || 'SMS failed.',
    recipient: PHONE,
    hint: 'Add TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_FROM_NUMBER to .env (see .env.example).',
  }, { status: 200 });
}
