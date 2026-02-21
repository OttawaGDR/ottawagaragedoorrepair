import { PHONE_HREF } from '../../lib/data';

export const metadata = {
  title: 'Privacy Policy | Ottawa - GDR',
  description: 'Privacy policy for Ottawa - GDR. How we collect, use, and protect your information when you contact us for garage door services in Ottawa.',
  alternates: { canonical: 'https://ottawagaragedoorrepair.ca/privacy' },
};

export default function PrivacyPage() {
  return (
    <section style={{ padding: '80px 0 100px' }}>
      <div className="container" style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1 className="display-xl" style={{ marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: 48 }}>Last updated: February 2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: 12 }}>1. Information We Collect</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              When you contact us by phone, text, or through our website (including contact forms), we may collect your name, phone number, email address, address or area, and details about your garage door issue. We use this only to provide quotes, schedule service, and communicate about your repair or installation.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: 12 }}>2. How We Use Your Information</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              We use your information to respond to inquiries, provide estimates, schedule and perform garage door services in Ottawa, send appointment reminders, and follow up after service. We do not sell or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: 12 }}>3. Security & Retention</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              We take reasonable steps to protect your information. We retain contact and service records as needed for warranty, insurance, and legal purposes, and for improving our service.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: 12 }}>4. Website & Cookies</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Our site may use analytics (e.g. Google Analytics) to understand how visitors use the site. You can control cookies through your browser. We do not use your website activity to identify you personally unless you submit a form or contact us.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: 12 }}>5. Your Rights</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              You may ask us what information we hold about you and request correction or deletion, subject to legal and operational requirements. Contact us at the phone or email on this site.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'white', marginBottom: 12 }}>6. Contact Us</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              For privacy questions or to exercise your rights, contact Ottawa - GDR at <a href={PHONE_HREF} style={{ color: 'var(--orange)', fontWeight: 600 }}> (613) 617-4238</a> or info@ottawagaragedoorrepair.ca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
