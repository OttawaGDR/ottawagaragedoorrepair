import { PHONE, PHONE_HREF, SMS_HREF, EMAIL, services, areas, BUSINESS_NAME } from '../../lib/data';
import ContactCallbackForm from '../components/ContactCallbackForm';

import { buildPageMetadata } from '../../lib/seo';

export const metadata = buildPageMetadata({
  title: 'Contact Us',
  description: 'Call, text, or request a callback for garage door repair in Ottawa — springs, openers, cables, and installs. Same-day service across every neighbourhood.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="contact-section" style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <span className="badge" style={{ marginBottom: 24, display: 'inline-flex' }}>📞 Get in Touch</span>
            <h1 className="display-xl" style={{ marginBottom: 20 }}>
              CONTACT <span className="text-gradient">{BUSINESS_NAME.toUpperCase()}</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 20 }}>
              Need <a href="/services" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>garage door repair</a> or a free quote? Call or text us anytime — we answer 24/7. Or <a href="/booking" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>book a visit</a> (Mon–Fri 9–5) and we&apos;ll call to confirm. Serving <a href="/areas" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>all Ottawa areas</a>.
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.75, margin: 0, paddingLeft: 20 }}>
              <li style={{ marginBottom: 6 }}><strong style={{ color: 'rgba(255,255,255,0.9)' }}>Same-day service</strong> — We arrive in under 90 minutes across Ottawa and the region.</li>
              <li style={{ marginBottom: 6 }}><strong style={{ color: 'rgba(255,255,255,0.9)' }}>Free phone estimate</strong> — Describe the issue and we&apos;ll give you a realistic price range before we come.</li>
              <li><strong style={{ color: 'rgba(255,255,255,0.9)' }}>24/7 emergency</strong> — Stuck door or broken spring? We answer and dispatch around the clock.</li>
            </ul>
          </div>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            {/* Contact form */}
            <div className="glass-card border-glow" style={{ padding: 40 }}>
              <ContactCallbackForm services={services} areas={areas} />
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="glass-card" style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, background: 'linear-gradient(135deg, var(--orange), #ea580c)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  📞
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'white', fontSize: '1.1rem', marginBottom: 6 }}>Call Us 24/7</div>
                  <a href={PHONE_HREF} style={{ fontSize: '1.25rem', color: 'var(--orange)', fontWeight: 800, textDecoration: 'none' }}>{PHONE}</a>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginTop: 8, marginBottom: 0 }}>Emergency? We answer and dispatch within 90 min.</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  💬
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'white', fontSize: '1.1rem', marginBottom: 6 }}>Text Us</div>
                  <a href={SMS_HREF} style={{ fontSize: '1.25rem', color: 'var(--orange)', fontWeight: 800, textDecoration: 'none' }}>{PHONE}</a>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginTop: 8, marginBottom: 0 }}>Prefer SMS? Send a message — we reply quickly during service hours.</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, background: 'rgba(255,255,255,0.08)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  ✉️
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'white', fontSize: '1.1rem', marginBottom: 6 }}>Email</div>
                  <a href={`mailto:${EMAIL}`} style={{ fontSize: '1rem', color: 'var(--orange)', fontWeight: 600, textDecoration: 'none' }}>{EMAIL}</a>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', marginTop: 8, marginBottom: 0 }}>We reply within a few hours on weekdays.</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, background: 'rgba(255,255,255,0.08)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  📍
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'white', fontSize: '1.1rem', marginBottom: 6 }}>Service Area</div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: 6 }}>Ottawa, Ontario, Canada</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', margin: 0 }}>Serving <a href="/areas" style={{ color: 'var(--orange)', fontWeight: 600 }}>Kanata, Nepean, Barrhaven, Orleans, Stittsville, Gloucester</a> &amp; all <a href="/areas" style={{ color: 'var(--orange)', fontWeight: 600 }}>Ottawa neighbourhoods</a>.</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: 28 }}>
                <div style={{ fontWeight: 800, color: 'white', fontSize: '1rem', marginBottom: 12 }}>🕐 Hours</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.9 }}>
                  <div><strong>Regular Service:</strong> 9AM – 9PM, 7 days</div>
                  <div><strong>24/7 Emergency:</strong> Always available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 900, color: 'white', marginBottom: 16 }}>
              Garage door emergency?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', marginBottom: 28, lineHeight: 1.75 }}>
              Door stuck, spring broken, or off the track? Call now — our technicians are dispatched within 90 minutes anywhere in Ottawa.
            </p>
            <a href={PHONE_HREF} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              🚨 Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
