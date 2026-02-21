import { PHONE, PHONE_HREF, EMAIL, services, areas } from '../../lib/data';

export const metadata = {
  title: 'Contact Us | Garage Door Services Ottawa | Ottawa - GDR',
  description: 'Contact Ottawa - GDR for garage door repairs, opener repair & installation. Call (613) 617-4238 or request a quote. Same-day service across Ottawa.',
  alternates: { canonical: 'https://ottawagaragedoorrepair.ca/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <span className="badge" style={{ marginBottom: 24, display: 'inline-flex' }}>📞 Get in Touch</span>
            <h1 className="display-xl" style={{ marginBottom: 20 }}>
              CONTACT <span className="text-gradient">OTTAWA - GDR</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              Need garage door repair or a free quote? Call us anytime — we answer 24/7. Or fill out the form and we&apos;ll call you back within 90 minutes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            {/* Contact form */}
            <div className="glass-card border-glow" style={{ padding: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: 8 }}>Request a Callback</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', marginBottom: 28 }}>We arrive in under 90 min across all Ottawa areas</p>
              <form action="#" method="post" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-service">Service Needed</label>
                  <select id="contact-service" name="service" className="form-input" required>
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-area">Your Area</label>
                  <select id="contact-area" name="area" className="form-input" required>
                    <option value="">Select your neighborhood...</option>
                    {areas.map(a => <option key={a.slug} value={a.slug}>{a.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input id="contact-name" name="name" className="form-input" type="text" placeholder="John Smith" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">Your Phone</label>
                  <input id="contact-phone" name="phone" className="form-input" type="tel" placeholder="(613) 000-0000" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message (optional)</label>
                  <textarea id="contact-message" name="message" className="form-input" rows={3} placeholder="Describe the issue or question..." style={{ resize: 'vertical', minHeight: 80 }} />
                </div>
                <a href={PHONE_HREF} className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  📞 Call for Instant Quote
                </a>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', margin: 0 }}>
                  Prefer to call? Dial <a href={PHONE_HREF} style={{ color: 'var(--orange)', fontWeight: 700 }}>{PHONE}</a> now
                </p>
              </form>
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
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', margin: 0 }}>Serving Kanata, Nepean, Barrhaven, Orleans, Stittsville, Gloucester & all Ottawa neighbourhoods.</p>
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
