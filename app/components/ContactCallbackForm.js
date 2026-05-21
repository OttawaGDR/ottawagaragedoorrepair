'use client';

import { useState } from 'react';
import { PHONE, PHONE_HREF, SMS_HREF } from '../../lib/data';

const PREFERRED_TIME_LABELS = {
  '': 'Any time',
  morning: 'Morning (8AM – 12PM)',
  afternoon: 'Afternoon (12PM – 5PM)',
  evening: 'Evening (5PM – 9PM)',
  asap: 'As soon as possible / Emergency',
};

export default function ContactCallbackForm({ services, areas }) {
  const [contactMethod, setContactMethod] = useState('call');
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    service: '',
    area: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, contactMethod }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Request failed');
      if (data.error) throw new Error(data.error);

      setSubmitStatus({
        success: true,
        contactMethod,
      });
      setFormData({
        service: '',
        area: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredTime: '',
      });
    } catch (err) {
      setSubmitStatus({ error: err.message || 'Something went wrong. Please call or text us directly.' });
    }
  };

  const serviceTitle = services.find((s) => s.slug === formData.service)?.title || formData.service;
  const areaName = areas.find((a) => a.slug === formData.area)?.name || formData.area;
  const timeLabel = PREFERRED_TIME_LABELS[formData.preferredTime] || 'Any time';

  const smsBody = encodeURIComponent(
    [
      'Callback request',
      formData.name && `Name: ${formData.name}`,
      formData.phone && `Phone: ${formData.phone}`,
      serviceTitle && `Service: ${serviceTitle}`,
      areaName && `Area: ${areaName}`,
      formData.message && `Issue: ${formData.message}`,
      `Preferred: ${timeLabel}`,
    ]
      .filter(Boolean)
      .join('\n')
  );
  const smsHref = `${SMS_HREF}${smsBody ? `?body=${smsBody}` : ''}`;

  return (
    <>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: 8 }}>
        Request a Callback or Text
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginBottom: 28 }}>
        Choose how you&apos;d like us to reach you — we respond within 90 minutes across Ottawa
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <span className="form-label" id="contact-method-label">
            How should we contact you?
          </span>
          <div className="contact-method-toggle" role="group" aria-labelledby="contact-method-label">
            <button
              type="button"
              className={`contact-method-option${contactMethod === 'call' ? ' is-active' : ''}`}
              aria-pressed={contactMethod === 'call'}
              onClick={() => setContactMethod('call')}
            >
              <span className="contact-method-icon" aria-hidden>📞</span>
              <span className="contact-method-text">
                <strong>Call me</strong>
                <small>We&apos;ll phone you back</small>
              </span>
            </button>
            <button
              type="button"
              className={`contact-method-option${contactMethod === 'text' ? ' is-active' : ''}`}
              aria-pressed={contactMethod === 'text'}
              onClick={() => setContactMethod('text')}
            >
              <span className="contact-method-icon" aria-hidden>💬</span>
              <span className="contact-method-text">
                <strong>Text me</strong>
                <small>SMS reply to your number</small>
              </span>
            </button>
          </div>
          <input type="hidden" name="contactMethod" value={contactMethod} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-service">
            Service Needed
          </label>
          <select
            id="contact-service"
            name="service"
            className="form-input"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-area">
            Your Area
          </label>
          <select
            id="contact-area"
            name="area"
            className="form-input"
            value={formData.area}
            onChange={handleChange}
            required
          >
            <option value="">Select your neighborhood...</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">
            Your Name
          </label>
          <input
            id="contact-name"
            name="name"
            className="form-input"
            type="text"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">
            Your Email <span style={{ fontWeight: 400, opacity: 0.65 }}>(optional)</span>
          </label>
          <input
            id="contact-email"
            name="email"
            className="form-input"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-phone">
            Your Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            className="form-input"
            type="tel"
            placeholder="(613) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">
            Issue Description
          </label>
          <textarea
            id="contact-message"
            name="message"
            className="form-input"
            rows={3}
            placeholder="Describe the issue (e.g. spring broken, door off track, opener not responding)..."
            style={{ resize: 'vertical', minHeight: 80 }}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-time">
            Preferred Time
          </label>
          <select
            id="contact-time"
            name="preferredTime"
            className="form-input"
            value={formData.preferredTime}
            onChange={handleChange}
          >
            <option value="">Any time</option>
            <option value="morning">Morning (8AM – 12PM)</option>
            <option value="afternoon">Afternoon (12PM – 5PM)</option>
            <option value="evening">Evening (5PM – 9PM)</option>
            <option value="asap">As soon as possible / Emergency</option>
          </select>
        </div>

        {submitStatus?.success && (
          <p
            role="status"
            style={{
              margin: 0,
              padding: '14px 16px',
              borderRadius: 12,
              background: 'rgba(34,197,94,0.12)',
              border: '1px solid rgba(34,197,94,0.35)',
              color: '#86efac',
              fontSize: '0.9rem',
              lineHeight: 1.5,
            }}
          >
            {submitStatus.contactMethod === 'text'
              ? 'Request sent — we’ll text you back shortly at the number you provided.'
              : 'Request sent — we’ll call you back shortly at the number you provided.'}
          </p>
        )}
        {submitStatus?.error && (
          <p
            role="alert"
            style={{
              margin: 0,
              padding: '14px 16px',
              borderRadius: 12,
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.35)',
              color: '#fca5a5',
              fontSize: '0.9rem',
            }}
          >
            {submitStatus.error}
          </p>
        )}

        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {contactMethod === 'text' ? '💬 Request a Text Back' : '📞 Request a Call Back'}
        </button>

        <div className="contact-quick-actions">
          <a href={PHONE_HREF} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            📞 Call {PHONE}
          </a>
          <a href={smsHref} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            💬 Text Now
          </a>
        </div>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', margin: 0 }}>
          Need help right away? Call or text {PHONE}
        </p>
      </form>
    </>
  );
}
