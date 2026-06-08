'use client';

import { useRef, useState } from 'react';
import { PHONE, PHONE_HREF, SMS_HREF } from '../../lib/data';
import {
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
      setSubmitStatus({ error: 'File must be under 4 MB.' });
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

      setSubmitStatus({ success: true, contactMethod, hadAttachment: Boolean(attachment) });
      setFormData(EMPTY_FORM);
      clearAttachment();
    } catch (err) {
      setSubmitStatus({ error: err.message || 'Something went wrong. Please call or text us.' });
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

  const methodToggle = (
    <div
      className={`contact-method-toggle${isHero ? ' contact-method-toggle--compact' : ''}`}
      role="group"
      aria-label="Contact by call or text"
    >
      <button
        type="button"
        className={`contact-method-option${contactMethod === 'call' ? ' is-active' : ''}`}
        aria-pressed={contactMethod === 'call'}
        onClick={() => setContactMethod('call')}
      >
        📞 Call
      </button>
      <button
        type="button"
        className={`contact-method-option${contactMethod === 'text' ? ' is-active' : ''}`}
        aria-pressed={contactMethod === 'text'}
        onClick={() => setContactMethod('text')}
      >
        💬 Text
      </button>
    </div>
  );

  return (
    <>
      {isHero ? (
        <>
          <h2 className="hero-form-title">Request a callback</h2>
          <p className="hero-form-desc">We call back within 90 minutes — or text us if you prefer</p>
        </>
      ) : (
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'white', marginBottom: 6 }}>
            Request a Callback or Text
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: 20 }}>
            We respond within 90 minutes across Ottawa
          </p>
        </>
      )}

      <form
        onSubmit={handleSubmit}
        className={`contact-callback-form${isHero ? ' contact-callback-form--hero' : ''}`}
      >
        {methodToggle}

        {isHero ? (
          <>
            <div className="contact-form-row">
              <div className="form-group">
                <label className="form-label" htmlFor={`${idPrefix}-service`}>Service</label>
                <select
                  id={`${idPrefix}-service`}
                  name="service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor={`${idPrefix}-area`}>Area</label>
                <select
                  id={`${idPrefix}-area`}
                  name="area"
                  className="form-input"
                  value={formData.area}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  {areas.map((a) => (
                    <option key={a.slug} value={a.slug}>{a.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor={`${idPrefix}-phone`}>Phone</label>
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
              <label className="form-label" htmlFor={`${idPrefix}-message`}>Issue</label>
              <textarea
                id={`${idPrefix}-message`}
                name="message"
                className="form-input"
                rows={2}
                placeholder="e.g. spring snapped, door stuck..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="form-group form-group--inline-file">
              <label className="form-label" htmlFor={`${idPrefix}-attachment`}>Photo (optional)</label>
              <input
                ref={fileInputRef}
                id={`${idPrefix}-attachment`}
                type="file"
                className="form-file-input form-file-input--compact"
                accept={ACCEPTED_ATTACHMENT_TYPES}
                onChange={handleFileChange}
              />
              {attachment && (
                <button type="button" className="form-file-remove" onClick={clearAttachment}>
                  Remove {attachment.name}
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="contact-form-row">
              <div className="form-group">
                <label className="form-label" htmlFor={`${idPrefix}-phone`}>Phone</label>
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
                <label className="form-label" htmlFor={`${idPrefix}-name`}>Name</label>
                <input
                  id={`${idPrefix}-name`}
                  name="name"
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contact-form-row">
              <div className="form-group">
                <label className="form-label" htmlFor={`${idPrefix}-service`}>Service</label>
                <select
                  id={`${idPrefix}-service`}
                  name="service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor={`${idPrefix}-area`}>Area</label>
                <select
                  id={`${idPrefix}-area`}
                  name="area"
                  className="form-input"
                  value={formData.area}
                  onChange={handleChange}
                >
                  <option value="">Select...</option>
                  {areas.map((a) => (
                    <option key={a.slug} value={a.slug}>{a.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor={`${idPrefix}-message`}>Issue</label>
              <textarea
                id={`${idPrefix}-message`}
                name="message"
                className="form-input"
                rows={2}
                placeholder="What's wrong with the door?"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor={`${idPrefix}-attachment`}>Photo (optional)</label>
              <input
                ref={fileInputRef}
                id={`${idPrefix}-attachment`}
                type="file"
                className="form-file-input form-file-input--compact"
                accept={ACCEPTED_ATTACHMENT_TYPES}
                onChange={handleFileChange}
              />
              {attachment && (
                <button type="button" className="form-file-remove" onClick={clearAttachment}>
                  Remove {attachment.name}
                </button>
              )}
            </div>
          </>
        )}

        {submitStatus?.success && (
          <p role="status" className="form-status form-status--success">
            {contactMethod === 'text' ? 'Sent — we’ll text you soon.' : 'Sent — we’ll call you soon.'}
          </p>
        )}
        {submitStatus?.error && (
          <p role="alert" className="form-status form-status--error">{submitStatus.error}</p>
        )}

        <button type="submit" className="btn-primary btn-full" disabled={submitting}>
          {submitting ? 'Sending…' : contactMethod === 'text' ? '💬 Request Text Back' : '📞 Request Call Back'}
        </button>

        {!isHero && (
          <p className="contact-form-foot">
            Or <a href={PHONE_HREF}>call {PHONE}</a> · <a href={smsHref}>text us</a>
          </p>
        )}
      </form>
    </>
  );
}
