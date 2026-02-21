import { services, PHONE, PHONE_HREF } from '../../../lib/data';

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return {};
  const isOpener = slug.includes('opener');
  const title = isOpener
    ? `${service.title} Ottawa | Garage Door Opener Services | Ottawa - GDR`
    : `${service.title} Ottawa | Garage Door Services | Ottawa - GDR`;
  const description = isOpener
    ? `Garage door opener repair & ${service.title.toLowerCase()} in Ottawa. ${service.shortDesc} Same-day. Call ${PHONE}.`
    : `Professional ${service.title.toLowerCase()} in Ottawa. ${service.shortDesc} Same-day garage door services. Call ${PHONE}.`;
  return {
    title,
    description,
    keywords: service.keywords || ['garage door services Ottawa', 'garage door repairs Ottawa'],
    alternates: { canonical: `https://ottawagaragedoorrepair.ca/services/${slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div style={{ padding: 100, textAlign: 'center', color: 'white', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: 20 }}>🔧</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 16 }}>Service Not Found</h1>
        <p style={{ color: 'var(--gray-400)', marginBottom: 32 }}>Looking for: "{slug}"</p>
        <a href="/services" style={{ color: 'var(--orange)', fontWeight: 700, textDecoration: 'none' }}>← View All Services</a>
      </div>
    );
  }

  const related = services.filter(s => s.slug !== slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in Ottawa`,
    provider: { '@type': 'LocalBusiness', name: 'Ottawa - GDR', telephone: PHONE },
    areaServed: 'Ottawa, Ontario, Canada',
    description: service.fullDesc,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: 'linear-gradient(135deg, #040d1a, #0a1628)', padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }} className="grid-bg">
        <div style={{ position: 'absolute', top: '30%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: 32, fontSize: '0.85rem', color: 'var(--gray-400)' }}>
            <a href="/" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <a href="/services" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Services</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--orange)' }}>{service.title}</span>
          </nav>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '4rem', marginBottom: 20 }}>{service.icon}</div>
              <span className="service-tag" style={{ marginBottom: 16 }}>{service.price}</span>
              <h1 className="heading-xl" style={{ marginTop: 16, marginBottom: 20 }}>
                {service.title}<br />
                <em style={{ color: 'var(--orange)' }}>in Ottawa</em>
              </h1>
              <p style={{ color: 'var(--gray-400)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 32 }}>
                {service.fullDesc}
              </p>
              <div style={{ display: 'flex', gap: 20, marginBottom: 36, flexWrap: 'wrap' }}>
                {[
                  { icon: '💰', label: 'Starting At', value: service.price },
                  { icon: '⏱', label: 'Job Time', value: service.time },
                  { icon: '🛡', label: 'Warranty', value: service.warranty },
                ].map(item => (
                  <div key={item.label} className="glass-card" style={{ padding: '16px 22px', textAlign: 'center', flex: 1, minWidth: 100 }}>
                    <div style={{ fontSize: '1.3rem', marginBottom: 6 }}>{item.icon}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>{item.label}</div>
                    <div style={{ fontWeight: 800, color: 'var(--orange)', fontSize: '0.95rem', marginTop: 4 }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <a href={PHONE_HREF} className="btn-primary">
                📞 Book {service.title} — {PHONE}
              </a>
            </div>

            <div className="hide-mobile">
              <div className="glass-card border-glow" style={{ padding: 36 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem',  marginBottom: 8 }}>Book This Service</h3>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.85rem', marginBottom: 24 }}>We arrive in under 90 minutes in every Ottawa area.</p>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input className="form-input" type="text" placeholder="John Smith" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" placeholder="(613) 000-0000" />
                </div>
                <div className="form-group">
                  <label className="form-label">When do you need it?</label>
                  <select className="form-input">
                    <option>ASAP — Emergency</option>
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>This weekend</option>
                  </select>
                </div>
                <a href={PHONE_HREF} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  📞 Call to Book Now
                </a>
                <p style={{ textAlign: 'center', marginTop: 12, fontSize: '0.78rem', color: 'var(--gray-400)' }}>
                  Free diagnosis · No obligation · Upfront pricing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, var(--navy))', pointerEvents: 'none' }} />
      </section>

      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <span className="section-label" style={{ color: 'var(--orange)' }}>Why Choose GDS</span>
              <h2 className="heading-lg" style={{ color: 'var(--navy)', marginBottom: 24 }}>
                Ottawa's Best {service.title} Service
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 28 }}>
                When your garage door fails, you need a team you can trust. Ottawa - GDR has been serving Ottawa homeowners for over 10 years with transparent pricing, quality parts, and a full warranty on every job.
              </p>
              {['Licensed & insured technicians', 'Parts stocked on every truck', 'Written quote before we start', '1-year warranty on all work', 'Same-day service available', 'Ottawa winter specialists'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1.5px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.75rem', color: '#16a34a', fontWeight: 800 }}>✓</div>
                  <span style={{ color: 'var(--gray-600)', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="light-card" style={{ padding: 36 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 20 }}>
                  Keywords We Rank For
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
                  {service.keywords.map(kw => (
                    <span key={kw} className="service-tag" style={{ background: 'rgba(249,115,22,0.08)', color: 'var(--orange)', padding: '6px 14px' }}>
                      🔍 {kw}
                    </span>
                  ))}
                </div>
                <div style={{ background: 'var(--gray-100)', borderRadius: 12, padding: 20 }}>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 12, fontSize: '0.9rem' }}>Service Details</div>
                  {[['Starting Price', service.price], ['Typical Duration', service.time], ['Warranty', service.warranty], ['Availability', 'Same Day']].map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--gray-200)', fontSize: '0.88rem' }}>
                      <span style={{ color: 'var(--gray-600)' }}>{label}</span>
                      <span style={{ color: 'var(--navy)', fontWeight: 700 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <h2 className="heading-lg">Other Services in Ottawa</h2>
            <a href="/services" style={{ color: 'var(--orange)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>VIEW ALL →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {related.map(s => (
              <a key={s.slug} href={`/services/${s.slug}`} className="glass-card card-shine" style={{ padding: 28, textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                  <span className="service-tag">{s.price}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)',  fontSize: '1.1rem', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.87rem', lineHeight: 1.6, marginBottom: 16 }}>{s.shortDesc}</p>
                <div style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.85rem' }}>Learn More →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--orange)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900,  color: 'white', marginBottom: 12 }}>
            NEED {service.title.toUpperCase()} IN OTTAWA?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: 36 }}>
            Same-day service available. Licensed & insured. 1-year warranty.
          </p>
          <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: '#ea580c', fontWeight: 800, fontSize: '1.15rem', padding: '18px 44px', borderRadius: 100, textDecoration: 'none' }}>
            📞 {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
