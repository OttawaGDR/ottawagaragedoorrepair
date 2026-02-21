'use client';

import { useState, useMemo } from 'react';
import { PHONE_HREF, EMAIL, services, areas } from '../../lib/data';

const TIME_SLOTS = ['9:00 AM', '12:00 PM', '3:00 PM']; // Mon–Fri 9–5, every 3 hours
const WEEKDAY = [1, 2, 3, 4, 5]; // Monday = 1, Friday = 5

function getMonthDays(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const days = [];
  const startPad = (first.getDay() + 6) % 7; // Monday = 0
  for (let i = 0; i < startPad; i++) days.push(null);
  for (let d = 1; d <= last.getDate(); d++) days.push(new Date(year, month, d));
  return days;
}

function isWeekday(date) {
  if (!date) return false;
  const day = date.getDay();
  return day >= 1 && day <= 5;
}

function isPast(date) {
  if (!date) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

function formatDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function formatDisplayDate(date) {
  return date.toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

export default function BookingPage() {
  const today = useMemo(() => new Date(), []);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', area: '', message: '' });

  const monthDays = useMemo(() => getMonthDays(year, month), [year, month]);
  const monthLabel = useMemo(() => new Date(year, month).toLocaleDateString('en-CA', { month: 'long', year: 'numeric' }), [year, month]);

  const canPrev = year === today.getFullYear() && month === today.getMonth() ? false : true;
  const canNext = month < 11 || year < today.getFullYear() + 1;

  const handlePrev = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
    setSelectedDate(null);
    setSelectedSlot(null);
  };
  const handleNext = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const handleDateClick = (date) => {
    if (!date || !isWeekday(date) || isPast(date)) return;
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      setSubmitStatus({ error: 'Please select a date and time slot.' });
      return;
    }
    setSubmitStatus(null);
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: formatDateKey(selectedDate),
          dateDisplay: formatDisplayDate(selectedDate),
          timeSlot: selectedSlot,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Booking request failed');
      setSubmitStatus({ success: true });
      setSelectedDate(null);
      setSelectedSlot(null);
      setFormData({ name: '', phone: '', email: '', service: '', area: '', message: '' });
    } catch (err) {
      setSubmitStatus({ error: err.message || 'Something went wrong. Please call us to book.' });
    }
  };

  return (
    <>
      <section className="contact-section" style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ maxWidth: 720, marginBottom: 32 }}>
            <span className="badge" style={{ marginBottom: 24, display: 'inline-flex' }}>📅 Book a visit</span>
            <h1 className="display-xl" style={{ marginBottom: 20 }}>
              BOOK A <span className="text-gradient">SERVICE</span> SLOT
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 12 }}>
              Choose a date and time below (Monday–Friday, 9AM–5PM, every 3 hours). We’ll give you a call to confirm your appointment before the visit.
            </p>
            <p style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.95rem' }}>
              ✓ We will call you to confirm your appointment.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="booking-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            <div className="glass-card border-glow" style={{ padding: 32 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'white', marginBottom: 24 }}>1. Pick a date</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginBottom: 16 }}>Available Monday–Friday only</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <button type="button" onClick={handlePrev} disabled={!canPrev} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '8px 14px', borderRadius: 10, cursor: canPrev ? 'pointer' : 'not-allowed', opacity: canPrev ? 1 : 0.5 }}>← Prev</button>
                <span style={{ fontWeight: 700, color: 'white', textTransform: 'capitalize' }}>{monthLabel}</span>
                <button type="button" onClick={handleNext} disabled={!canNext} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '8px 14px', borderRadius: 10, cursor: canNext ? 'pointer' : 'not-allowed', opacity: canNext ? 1 : 0.5 }}>Next →</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, textAlign: 'center' }}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                  <div key={d} style={{ fontSize: '0.7rem', color: 'var(--gray-400)', fontWeight: 700 }}>{d}</div>
                ))}
                {monthDays.map((date, i) => {
                  const weekday = date && isWeekday(date);
                  const past = date && isPast(date);
                  const selected = selectedDate && date && formatDateKey(date) === formatDateKey(selectedDate);
                  const disabled = !date || !weekday || past;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleDateClick(date)}
                      disabled={disabled}
                      style={{
                        padding: '10px 0',
                        borderRadius: 10,
                        border: selected ? '2px solid var(--orange)' : '1px solid rgba(255,255,255,0.1)',
                        background: selected ? 'rgba(249,115,22,0.2)' : disabled ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)',
                        color: disabled ? 'var(--gray-600)' : 'white',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        fontSize: '0.85rem',
                        fontWeight: selected ? 700 : 500,
                      }}
                    >
                      {date ? date.getDate() : ''}
                    </button>
                  );
                })}
              </div>

              {selectedDate && (
                <>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'white', marginTop: 24, marginBottom: 12 }}>2. Pick a time</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginBottom: 12 }}>{formatDisplayDate(selectedDate)}</p>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {TIME_SLOTS.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        style={{
                          padding: '12px 20px',
                          borderRadius: 10,
                          border: selectedSlot === slot ? '2px solid var(--orange)' : '1px solid rgba(255,255,255,0.2)',
                          background: selectedSlot === slot ? 'rgba(249,115,22,0.2)' : 'rgba(255,255,255,0.06)',
                          color: 'white',
                          cursor: 'pointer',
                          fontWeight: selectedSlot === slot ? 700 : 500,
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="glass-card border-glow" style={{ padding: 32 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'white', marginBottom: 8 }}>3. Your details</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginBottom: 24 }}>We’ll call you to confirm this slot</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="book-name">Name *</label>
                  <input id="book-name" className="form-input" type="text" placeholder="John Smith" required value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="book-phone">Phone *</label>
                  <input id="book-phone" className="form-input" type="tel" placeholder="(613) 000-0000" required value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="book-email">Email</label>
                  <input id="book-email" className="form-input" type="email" placeholder="you@example.com" value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="book-service">Service *</label>
                  <select id="book-service" className="form-input" required value={formData.service} onChange={e => setFormData(f => ({ ...f, service: e.target.value }))}>
                    <option value="">Select...</option>
                    {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="book-area">Area *</label>
                  <select id="book-area" className="form-input" required value={formData.area} onChange={e => setFormData(f => ({ ...f, area: e.target.value }))}>
                    <option value="">Select...</option>
                    {areas.map(a => <option key={a.slug} value={a.slug}>{a.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="book-message">Brief description (optional)</label>
                  <textarea id="book-message" className="form-input" rows={2} placeholder="e.g. door won't open, spring broke..." style={{ resize: 'vertical', minHeight: 60 }} value={formData.message} onChange={e => setFormData(f => ({ ...f, message: e.target.value }))} />
                </div>
                {submitStatus?.error && <p style={{ color: '#f87171', fontSize: '0.9rem', margin: 0 }}>{submitStatus.error}</p>}
                {submitStatus?.success && <p style={{ color: '#4ade80', fontSize: '0.9rem', margin: 0 }}>Request sent. We’ll call you to confirm your appointment.</p>}
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                  Request this slot
                </button>
              </div>
            </div>
          </form>

          <p style={{ marginTop: 32, color: 'var(--gray-400)', fontSize: '0.9rem', textAlign: 'center' }}>
            Need a time outside these hours? <a href={PHONE_HREF} style={{ color: 'var(--orange)', fontWeight: 600 }}>Call us</a> or <a href="/contact" style={{ color: 'var(--orange)', fontWeight: 600 }}>send a message</a>.
          </p>
        </div>
      </section>
    </>
  );
}
