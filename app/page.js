import { services, areas, testimonials, faqs, blogPosts, galleryImages, PHONE, PHONE_HREF } from '../lib/data';
import Icon from './components/Icons';
import GalleryImage from './components/GalleryImage';
import QuoteCalculator from './components/QuoteCalculator';

export const metadata = {
  title: 'Garage Door Services Ottawa | Garage Door Repairs & Opener Repair | 24/7',
  description: 'Garage door services Ottawa & garage door repairs Ottawa. Garage door opener repair, spring replacement, cables. Same-day service, 5.0 Google rating, 24/7 emergency. Call (613) 617-4238.',
  openGraph: {
    title: 'Garage Door Services Ottawa | Garage Door Repairs & Opener Repair',
    description: 'Ottawa\'s #1 garage door services, repairs & garage door opener repair. Same-day, 24/7 emergency.',
    url: 'https://ottawagaragedoorrepair.ca',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <Services />
      <QuoteCalculator services={services} />
      <HowItWorks />
      <Areas />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Blog />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'transparent' }} className="grid-bg hero-section">
      <div className="container hero-container" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="badge" style={{ marginBottom: 28, display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="star" size={16} style={{ color: 'var(--orange-bright)' }} /><Icon name="star" size={16} style={{ color: 'var(--orange-bright)' }} /><Icon name="star" size={16} style={{ color: 'var(--orange-bright)' }} /><Icon name="star" size={16} style={{ color: 'var(--orange-bright)' }} /><Icon name="star" size={16} style={{ color: 'var(--orange-bright)' }} /> 5.0 Rated</div>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              color: 'white',
              marginBottom: 28,
              letterSpacing: '-0.01em',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}>
              SAME-DAY<br />
              <span style={{ color: 'var(--orange)' }}>GARAGE DOOR</span><br />
              <span style={{ color: 'white' }}>REPAIR OTTAWA</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, marginBottom: 12, maxWidth: 460 }}>
              <a href="/services" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}>Garage door services Ottawa</a> & <a href="/services" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}>garage door repairs</a> — springs, openers, cables — fixed today. <a href="/services/opener-repair" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 3 }}>Garage door opener repair</a> and installation. Ottawa&apos;s most trusted, available <strong style={{ color: 'white' }}>24/7.</strong>
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--orange)', fontWeight: 700, marginBottom: 36, letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="mappin" size={18} /> Serving all <a href="/areas" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}>Ottawa neighbourhoods</a> · We arrive in under 90 min everywhere
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href={PHONE_HREF} className="btn-primary" style={{ fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="emergency" size={20} /> Emergency Call — {PHONE}</a>
              <a href="/contact" className="btn-secondary">Get Free Quote →</a>
              <a href="/booking" className="btn-secondary">Book a visit →</a>
            </div>
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
              {[{ icon: 'bolt', label: 'Same Day Service' }, { icon: 'dollar', label: 'Upfront Pricing' }, { icon: 'shield', label: '1 Year Warranty' }].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon name={item.icon} size={22} style={{ color: 'var(--orange)' }} />
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hide-mobile">
            <div className="glass-card border-glow" style={{ padding: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: 6,  color: 'white' }}>Request Service</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginBottom: 24 }}>We arrive in under 90 minutes in every Ottawa area</p>
              <div className="form-group">
                <label className="form-label">Service Needed</label>
                <select className="form-input">
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Your Area</label>
                <select className="form-input">
                  <option value="">Select your neighborhood...</option>
                  {areas.map(a => <option key={a.slug} value={a.slug}>{a.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Your Phone</label>
                <input className="form-input" type="tel" placeholder="(613) 000-0000" />
              </div>
              <a href={PHONE_HREF} className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={20} /> Call for Instant Quote</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(transparent, rgba(13,31,60,0.8))', pointerEvents: 'none' }} />
    </section>
  );
}

function TrustBar() {
  const items = ['✓ Licensed & Insured', '★ 5.0 Google Rating', '⚡ Same Day Service', '◆ All Brands Serviced', '$ Upfront Pricing', '🛡 1 Year Warranty', 'Ottawa Local', '📞 24/7 Emergency'];
  return (
    <div style={{ background: 'linear-gradient(90deg, #ea580c, #f97316, #ea580c)', padding: '15px 0', overflow: 'hidden' }}>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...items, ...items].map((item, i) => (
            <span key={i} style={{ fontWeight: 700, fontSize: '0.88rem', color: 'white', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
              {item} <span style={{ opacity: 0.5, marginLeft: 20 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { number: '2,400+', label: 'Repairs Completed' },
    { number: '5.0★', label: 'Google Rating' },
    { number: '<90', label: 'Min Response Time' },
    { number: '6+', label: 'Years in Ottawa' },
  ];
  return (
    <section className="section-sm" style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i} className="reveal" style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 0, paddingRight: 0 }}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">What We Fix</span>
          <h2 className="heading-xl reveal" style={{ maxWidth: 600, margin: '0 auto' }}>
            Garage Door Services Ottawa & <em style={{ color: 'var(--orange)' }}>Garage Door Repairs</em>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16, fontSize: '1rem', maxWidth: 520, margin: '16px auto 0' }}>
            Garage door opener repair, spring replacement, cables, new doors. Same-day garage door services across Ottawa.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {services.map((service, i) => (
            <a key={service.slug} href={`/services/${service.slug}`} className="glass-card card-shine reveal" style={{ padding: 32, textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{ lineHeight: 1, color: 'var(--orange)' }}><Icon name={service.slug} size={40} /></div>
                <span className="service-tag">{service.price}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: 10,  color: 'white' }}>{service.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 20 }}>{service.shortDesc}</p>
              <div style={{ display: 'flex', gap: 16, fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: 20, alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="clock" size={14} /> {service.time}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="shield" size={14} /> {service.warranty}</span>
              </div>
              <div style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                Learn More <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Call or Request Online', desc: `Call us at ${PHONE} or fill out our quick form. We confirm your appointment within minutes.` },
    { num: '02', title: 'Technician Arrives', desc: 'A certified tech arrives at your Ottawa home in under 90 minutes — same in every neighbourhood. We call 30 min before arrival.' },
    { num: '03', title: 'Free Diagnosis', desc: 'We inspect your door and provide a clear written quote before touching anything. No surprises.' },
    { num: '04', title: 'Fixed Same Day', desc: 'We carry parts on every truck. Most repairs done in 1–2 hours. We clean up before we leave.' },
  ];
  return (
    <section className="section section-light">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label" style={{ color: 'var(--orange)' }}>How It Works</span>
          <h2 className="heading-xl reveal" style={{ color: 'var(--navy)' }}>Fixed in 4 Simple Steps</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
          {steps.map((step, i) => (
            <div key={i} className="reveal" style={{ position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '6rem', fontWeight: 900,  color: 'rgba(249,115,22,0.08)', lineHeight: 1, position: 'absolute', top: -24, left: -8, userSelect: 'none', letterSpacing: '-0.02em' }}>{step.num}</div>
              <div style={{ position: 'relative', zIndex: 1, paddingTop: 20 }}>
                <div style={{ width: 48, height: 48, background: 'linear-gradient(135deg, var(--orange), #ea580c)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900,  color: 'white', marginBottom: 18, boxShadow: '0 8px 24px rgba(249,115,22,0.35)' }}>{step.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--navy)', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.75, fontSize: '0.92rem' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="section" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="section-label">Service Area</span>
            <h2 className="heading-xl reveal" style={{ marginBottom: 20 }}>
              We Come to <em style={{ color: 'var(--orange)' }}>Your Door</em> Across Ottawa
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 32, fontSize: '0.98rem' }}>
              We arrive in under 90 minutes everywhere in Ottawa — from Kanata to Orleans, Barrhaven to Stittsville. Same promise in every neighbourhood.
            </p>
            <a href={PHONE_HREF} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={20} /> Check Your Area</a>
          </div>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
              {areas.map(area => (
                <a key={area.slug} href={`/areas/${area.slug}`} className="area-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="mappin" size={16} /> {area.name}</a>
              ))}
            </div>
            <div className="glass-card reveal" style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Icon name="clock" size={36} style={{ color: 'var(--orange)' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>Average Response Time</div>
                  <div className="stat-number" style={{ fontSize: '2.2rem' }}>Under 90 Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section" style={{ background: 'var(--navy-mid)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label">Our Work</span>
          <h2 className="heading-xl reveal" style={{ maxWidth: 560, margin: '0 auto' }}>
            Real <em style={{ color: 'var(--orange)' }}>Garage Door</em> Jobs in Ottawa
          </h2>
          <p style={{ color: 'var(--gray-400)', marginTop: 16, maxWidth: 500, margin: '16px auto 0', lineHeight: 1.75 }}>
            Installations, repairs and door styles we’ve completed across Ottawa.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {galleryImages.map((img, i) => (
            <div key={i} className="reveal glass-card" style={{ overflow: 'hidden', padding: 0 }}>
              <GalleryImage src={img.src} alt={img.alt} caption={img.caption} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section section-light">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label" style={{ color: 'var(--orange)' }}>Reviews</span>
          <h2 className="heading-xl reveal" style={{ color: 'var(--navy)' }}>
            Ottawa Homeowners <em>Love</em> Our Service
          </h2>
          <div style={{ marginTop: 16, display: 'flex', gap: 4, color: 'var(--orange)' }}>{[1,2,3,4,5].map(i => <Icon key={i} name="star" size={22} />)}</div>
          <p style={{ color: 'var(--gray-600)', marginTop: 8, fontSize: '0.92rem' }}>5.0 rated</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={i} className="light-card reveal" style={{ padding: 32, position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '5rem', color: 'var(--orange)', opacity: 0.08, fontFamily: 'var(--font-serif)', position: 'absolute', top: -10, left: 16, lineHeight: 1,  userSelect: 'none' }}>"</div>
              <div style={{ fontSize: '0.95rem', marginBottom: 16, display: 'flex', gap: 2, color: 'var(--orange)' }}>{[1,2,3,4,5].map(i => <Icon key={i} name="star" size={16} />)}</div>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.75, marginBottom: 24,  fontSize: '0.93rem', position: 'relative', zIndex: 1 }}>"{t.text}"</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="mappin" size={12} /> {t.area}</div>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <section className="section" style={{ background: 'var(--navy-mid)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <span className="section-label">FAQ</span>
            <h2 className="heading-lg reveal" style={{ marginBottom: 16 }}>Common Questions About Garage Door Services & Repairs in Ottawa</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 16, lineHeight: 1.75, fontSize: '0.92rem' }}>Can&apos;t find your answer? <a href="/contact" style={{ color: 'var(--orange)', fontWeight: 600 }}>Contact us</a> or call directly.</p>
            <a href={PHONE_HREF} className="btn-primary" style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={20} /> {PHONE}</a>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question">{faq.q}<span className="faq-icon">+</span></button>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const blogIcons = ['dollar', 'wrench', 'weather', 'door', 'clock', 'smartphone'];
  return (
    <section className="section" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <span className="section-label">Ottawa Garage Door Tips</span>
            <h2 className="heading-xl reveal">From Our Blog</h2>
          </div>
          <a href="/blog" style={{ color: 'var(--orange)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.05em' }}>VIEW ALL POSTS →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {blogPosts.map((post, i) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="glass-card card-shine reveal" style={{ textDecoration: 'none', color: 'inherit', display: 'block', overflow: 'hidden' }}>
              <div style={{ height: 180, background: 'linear-gradient(135deg, var(--navy-light), var(--navy-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.08), transparent 70%)' }} />
                <span style={{ color: 'var(--orange)', opacity: 0.9 }}><Icon name={blogIcons[i % blogIcons.length]} size={56} /></span>
              </div>
              <div style={{ padding: 28 }}>
                <span className="service-tag">{post.category}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.45, marginTop: 14, marginBottom: 10, color: 'white' }}>{post.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem', lineHeight: 1.65 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
                  <span>{post.date}</span><span>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="quote" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #040d1a 0%, #0f2040 50%, #040d1a 100%)', padding: '110px 0', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.12) 0%, transparent 65%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 100, padding: '8px 20px', marginBottom: 36, color: '#4ade80', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em' }}>
          🟢 TECHNICIANS AVAILABLE NOW IN OTTAWA
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900,  color: 'white', marginBottom: 20, lineHeight: 1.05, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
          GARAGE DOOR PROBLEM?<br />
          <span style={{ color: 'var(--orange)' }}>WE FIX IT TODAY.</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: 48, maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.75 }}>
          Available 9AM–9PM daily. <a href="/services/emergency-repair" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Emergency service</a> 24/7. Most <a href="/services" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>repairs</a> done in one visit.
        </p>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={PHONE_HREF} className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 44px', display: 'inline-flex', alignItems: 'center', gap: 10 }}><Icon name="emergency" size={22} /> Call Now: {PHONE}</a>
          <a href="/contact" className="btn-secondary" style={{ fontSize: '1rem' }}>Book Online →</a>
        </div>
      </div>
    </section>
  );
}