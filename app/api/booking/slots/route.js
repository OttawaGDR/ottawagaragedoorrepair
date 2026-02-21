import { NextResponse } from 'next/server';
import { getBookedSlots } from '../../../../lib/bookedSlots';

export async function GET() {
  try {
    const slots = getBookedSlots();
    return NextResponse.json({ slots });
  } catch (e) {
    console.error('GET /api/booking/slots error:', e);
    return NextResponse.json({ slots: [] });
  }
}
