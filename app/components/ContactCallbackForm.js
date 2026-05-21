'use client';

import { useRef, useState } from 'react';
import { PHONE, PHONE_HREF, SMS_HREF } from '../../lib/data';
import {
  ACCEPTED_ATTACHMENT_LABEL,
  ACCEPTED_ATTACHMENT_TYPES,
  MAX_ATTACHMENT_BYTES,
  PREFERRED_TIME_LABELS,
  buildSmsBody,
} from '../../lib/contactForm';

const EMPTY_FORM = {
  service: '',
  area: '',
  name: '',
  email: '',
  phone: '',
  message: '',
  preferredTime: '',
};

export default function ContactCallbackForm({ services, areas, variant = 'page' }) {
  const isHero = variant === 'hero';
  const fileInputRef = useRef(null);
  const [contactMethod, setContactMethod] = useState('call');
  const [submitStatus, setSubmitStatus] = useState(null);
  const [attachment, setAttachment] = useState(null);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  const idPrefix = isHero ? 'hero' : 'contact';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setAttachment(null);
      return;
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setSubmitStatus({ error: 'File is too large. Please use an image or PDF under 4 MB.' });
      e.target.value = '';
      setAttachment(null);
      return;
    }
    setSubmitStatus(null);
    setAttachment(file);
  };

  const clearAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setSubmitting(true);
    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));
      body.append('contactMethod', contactMethod);
      if (attachment) body.append('attachment', attachment);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Request failed');
      if (data.error) throw new Error(data.error);

      setSubmitStatus({
        success: true,
        contactMethod,
        hadAttachment: Boolean(attachment),
      });
      setFormData(EMPTY_FORM);
      clearAttachment();
    } catch (err) {
      setSubmitStatus({ error: err.message || 'Something went wrong. Please call or text us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  const serviceTitle = services.find((s) => s.slug === formData.service)?.title || formData.service;
  const areaName = areas.find((a) => a.slug === formData.area)?.name || formData.area;
  const timeLabel = PREFERRED_TIME_LABELS[formData.preferredTime] || 'Any time';

  const smsBody = encodeURIComponent(
    buildSmsBody({
      name: formData.name,
      phone: formData.phone,
      serviceTitle,
      areaName,
      message: formData.message,
      timeLabel,
      hasAttachment: Boolean(attachment),
    })
  );
  const smsHref = `${SMS_HREF}${smsBody ? `?body=${smsBody}` : ''}`;

  return (
    <>
      {isHero ? (
        <>
          <h2 className="hero-form-title">Request Service</h2>
          <p className="hero-form-desc">Call or text back — we respond within 90 minutes in every Ottawa area</p>
        </>
      ) : (
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: 8 }}>
            Request a Callback or Text
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginBottom: 28 }}>
            Choose how you&apos;d like us to reach you — we respond within 90 minutes across Ottawa
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className="contact-callback-form" style={{ display: 'flex', flexDirection: 'column', gap: isHero ? 16 : 20 }}>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <span className="form-label" id={`${idPrefix}-contact-method-label`}>
            How should we contact you?
          </span>
          <div className="contact-method-toggle" role="group" aria-labelledby={`${idPrefix}-contact-method-label`}>
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
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor={`${idPrefix}-service`}>Service Needed</label>
          <select
            id={`${idPrefix}-service`}
            name="service"
            className="form-input"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor={`${idPrefix}-area`}>Your Area</label>
          <select
            id={`${idPrefix}-area`}
            name="area"
            className="form-input"
            value={formData.area}
            onChange={handleChange}
            required
          >
            <option value="">Select your neighborhood...</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>{a.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor={`${idPrefix}-name`}>Your Name</label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            className="form-input"
            type="text"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {!isHero && (
          <div className="form-group">
            <label className="form-label" htmlFor={`${idPrefix}-email`}>
              Your Email <span style={{ fontWeight: 400, opacity: 0.65 }}>(optional)</span>
            </label>
            <input
              id={`${idPrefix}-email`}
              name="email"
              className="form-input"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor={`${idPrefix}-phone`}>Your Phone</label>
          <input
            id={`${idPrefix}-phone`}
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
          <label className="form-label" htmlFor={`${idPrefix}-message`}>Issue Description</label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            className="form-input"
            rows={isHero ? 2 : 3}
            placeholder="Describe the issue (e.g. spring broken, door off track, grinding opener)..."
            style={{ resize: 'vertical', minHeight: isHero ? 72 : 80 }}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor={`${idPrefix}-attachment`}>
            Attach a photo <span style={{ fontWeight: 400, opacity: 0.65 }}>(optional)</span>
          </label>
          <input
            ref={fileInputRef}
            id={`${idPrefix}-attachment`}
            name="attachment"
            type="file"
            className="form-file-input"
            accept={ACCEPTED_ATTACHMENT_TYPES}
            onChange={handleFileChange}
          />
          <p className="form-hint">{ACCEPTED_ATTACHMENT_LABEL}</p>
          {attachment && (
            <div className="form-file-preview">
              <span>📎 {attachment.name}</span>
              <button type="button" className="form-file-remove" onClick={clearAttachment}>
                Remove
              </button>
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor={`${idPrefix}-time`}>Preferred Time</label>
          <select
            id={`${idPrefix}-time`}
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
          <p role="status" className="form-status form-status--success">
            {submitStatus.contactMethod === 'text'
              ? 'Request sent — we’ll text you back shortly.'
              : 'Request sent — we’ll call you back shortly.'}
            {submitStatus.hadAttachment ? ' Your photo was included — our team will review it before we reach out.' : ''}
          </p>
        )}
        {submitStatus?.error && (
          <p role="alert" className="form-status form-status--error">{submitStatus.error}</p>
        )}

        <button
          type="submit"
          className="btn-primary btn-full"
          disabled={submitting}
          style={{ justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
          {submitting
            ? 'Sending…'
            : contactMethod === 'text'
              ? '💬 Request a Text Back'
              : '📞 Request a Call Back'}
        </button>

        <div className="contact-quick-actions">
          <a href={PHONE_HREF} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            📞 Call {PHONE}
          </a>
          <a href={smsHref} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            💬 Text Now
          </a>
        </div>
        {!isHero && (
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', margin: 0 }}>
            Need help right away? Call or text {PHONE}
          </p>
        )}
      </form>
    </>
  );
}
