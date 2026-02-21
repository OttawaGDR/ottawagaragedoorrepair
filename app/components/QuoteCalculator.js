'use client';

import { useState } from 'react';
import { PHONE_HREF } from '../../lib/data';

export default function QuoteCalculator({ services }) {
  const [slug, setSlug] = useState('');
  const selected = services.find((s) => s.slug === slug);

  return (
    <section className="section" style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Quick Price</span>
          <h2 className="heading-xl reveal" style={{ marginBottom: 12 }}>
            Get a <span style={{ color: 'var(--orange)' }}>Price Range</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.98rem', marginBottom: 28, lineHeight: 1.7 }}>
            Select your issue below for a typical price range. Final quote after we inspect.
          </p>
          <div className="glass-card" style={{ padding: 32, textAlign: 'left' }}>
            <label htmlFor="quote-service" style={{ display: 'block', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 10, fontSize: '0.9rem' }}>
              What do you need?
            </label>
            <select
              id="quote-service"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="form-input"
              style={{ width: '100%', marginBottom: 20 }}
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.title}</option>
              ))}
            </select>
            {selected && (
              <div style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Typical price range</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--orange)' }}>{selected.price}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>~{selected.time} · {selected.warranty} warranty</div>
                <a href={PHONE_HREF} className="btn-primary" style={{ marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  📞 Call for Exact Quote
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
