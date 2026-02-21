import { PHONE, PHONE_HREF, testimonials } from '../../lib/data';

export const metadata = {
  title: 'About Us | Garage Door Services Ottawa | Ottawa - GDR',
  description: "Ottawa - GDR delivers garage door services Ottawa trusts: garage door repairs, garage door opener repair. Local family business since 2020.",
  alternates: { canonical: 'https://ottawagaragedoorrepair.ca/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="about-section" style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div style={{ minWidth: 0 }}>
              <span className="badge" style={{ marginBottom: 24, display: 'inline-flex' }}>🏆 Ottawa Family Business Since 2020</span>
              <h1 className="display-xl" style={{ marginBottom: 20 }}>
                NOT JUST A<br />COMPANY —<br /><span className="text-gradient">YOUR NEIGHBOURS</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, fontSize: '1.05rem', marginBottom: 32, maxWidth: 480 }}>
                Ottawa - GDR is an Ottawa family business built on one principle: treat every customer the way we would want to be treated. We offer <a href="/services" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>garage door repairs</a> and <a href="/services/opener-repair" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>opener repair</a> across <a href="/areas" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>all Ottawa areas</a>. No hidden fees. No unnecessary upsells. No shortcuts.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href={PHONE_HREF} className="btn-primary">📞 Call {PHONE}</a>
                <a href="/contact" className="btn-secondary">Contact Us →</a>
                <a href="#story" className="btn-secondary">Our Story →</a>
              </div>
            </div>
            <div className="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: '1,000+', label: 'Repairs Done', icon: '🔧' },
                { num: '5.0 ⭐', label: 'Google Rating', icon: '⭐' },
                { num: '19', label: 'Areas Served', icon: '📍' },
                { num: '6+', label: 'Years Experience', icon: '📅' },
              ].map(stat => (
                <div key={stat.label} className="glass-card" style={{ padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 10 }}>{stat.icon}</div>
                  <div className="stat-number" style={{ fontSize: '1.8rem' }}>{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="about-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div style={{ minWidth: 0 }}>
              <span className="section-label">Our Story</span>
              <h2 className="display-lg" style={{ marginBottom: 28 }}>FOUNDED ON <span className="text-gradient">FRUSTRATION</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: 20 }}>Ottawa - GDR was founded in 2020 after watching too many Ottawa homeowners get taken advantage of — overcharged for simple repairs, pressured into replacing doors that only needed a spring, and left waiting by contractors who never showed up.</p>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: 20 }}>We started with two technicians, one truck, and a commitment: be the garage door company we would want to call ourselves. Show up on time. Give a real price before touching anything. Fix it right the first visit.</p>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: 32 }}>Our team brings over 6 years of combined experience in garage door repair and installation. Five years in business and 1,000+ Ottawa homeowners later — with a perfect 5.0 Google rating — that approach continues to work.</p>
              <div style={{ padding: '22px 26px', background: 'rgba(249,115,22,0.08)', borderLeft: '4px solid var(--orange)', borderRadius: '0 14px 14px 0', marginBottom: 32 }}>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600,  lineHeight: 1.8, margin: 0 }}>
                  "We do not just fix garage doors. We give Ottawa homeowners peace of mind — that their home is secure, their family is safe, and the job was done right."
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
              {[
                { icon: '🏠', title: 'Family-Owned and Operated', desc: 'Not a franchise or contractor marketplace. A real Ottawa family business.' },
                { icon: '📋', title: 'Licensed and Fully Insured', desc: 'Fully licensed in Ontario with $2 million liability coverage on every job. Certifications and insurance verified for your peace of mind.' },
                { icon: '🔩', title: '50+ Parts on Every Truck', desc: 'Most repairs completed in one visit — no ordering delays, no second trips.' },
                { icon: '💬', title: 'Free Phone Diagnosis', desc: 'Tell us what is happening and we will give a realistic price range before arriving.' },
                { icon: '❄️', title: 'Ottawa Winter Specialists', desc: 'Cold-rated springs, low-temp lubricants, insulated seals — in stock year-round.' },
                { icon: '🇨🇦', title: 'Proudly Ottawa-Based', desc: 'We source from Canadian suppliers and hire Ottawa residents.' },
              ].map(item => (
                <div key={item.title} className="glass-card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: 'var(--gray-400)', fontSize: '0.87rem', lineHeight: 1.65 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-label">What Drives Us</span>
            <h2 className="display-lg">OUR CORE <span className="text-gradient">VALUES</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { icon: '🤝', title: 'Honesty First', desc: 'Full written price before we touch anything. If we can repair instead of replace, we always say so — even if it means a smaller invoice.' },
              { icon: '⚡', title: 'Fast Response', desc: 'Same-day service 7 days a week. Emergency calls answered within 90 minutes across all Ottawa — no overtime premium.' },
              { icon: '🏆', title: 'Premium Parts Only', desc: 'Every truck carries LiftMaster, Chamberlain, Garaga, and Clopay parts. We never substitute cheap hardware.' },
              { icon: '❄️', title: 'Ottawa Climate Experts', desc: 'Specializing in how Ottawa extreme temperature swings affect every component of a garage door system.' },
              { icon: '🏘️', title: 'True Local Business', desc: 'Not a franchise or call centre. A real Ottawa family that lives here, hires local, and genuinely cares about this community.' },
              { icon: '💯', title: 'We Stand Behind Our Work', desc: 'All labour guaranteed 90 days minimum. If something is not right after we leave, we come back and fix it — no questions asked.' },
            ].map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: 32, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--orange), transparent)' }} />
                <div style={{ fontSize: '2.5rem', marginBottom: 18 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)',  fontWeight: 900, fontSize: '1.3rem', color: 'white', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: 'var(--gray-400)', lineHeight: 1.8, fontSize: '0.91rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Real Reviews</span>
            <h2 className="display-lg">WHAT OTTAWA <span className="text-gradient">SAYS ABOUT US</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
            {testimonials.slice(0, 3).map((review, i) => (
              <div key={i} className="glass-card" style={{ padding: 32, position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '5rem', color: 'var(--orange)', opacity: 0.07, position: 'absolute', top: -10, left: 14, lineHeight: 1, userSelect: 'none' }}>"</div>
                <div style={{ marginBottom: 14, color: 'var(--gold)', fontSize: '1rem' }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: 'rgba(255,255,255,0.8)',  lineHeight: 1.78, marginBottom: 24, fontSize: '0.93rem', position: 'relative', zIndex: 1 }}>"{review.text}"</p>
                <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>{review.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', marginTop: 2 }}>📍 {review.area} · {review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: 'white', marginBottom: 12 }}>Help Others Find Us</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: 24, lineHeight: 1.75 }}>
            Love your experience? Leave us a review on Google — it helps Ottawa homeowners find reliable garage door repair.
          </p>
          <a href="https://www.google.com/search?q=Ottawa+Garage+Door+Repair+GDR" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 700, fontSize: '0.95rem', padding: '14px 28px', borderRadius: 100, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
            ⭐ Leave a Google Review
          </a>
        </div>
      </section>

      <section style={{ background: 'var(--orange)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900,  color: 'white', marginBottom: 16, lineHeight: 1.1 }}>
            EXPERIENCE THE OTTAWA - GDR DIFFERENCE
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.05rem', marginBottom: 36, lineHeight: 1.8 }}>
            Join 1,000+ Ottawa homeowners who trust Ottawa - GDR for honest, reliable garage door service.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: '#ea580c', fontWeight: 800, fontSize: '1.1rem', padding: '16px 36px', borderRadius: 100, textDecoration: 'none' }}>
              📞 {PHONE}
            </a>
            <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 700, fontSize: '1rem', padding: '16px 32px', borderRadius: 100, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)' }}>
              View Services →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
