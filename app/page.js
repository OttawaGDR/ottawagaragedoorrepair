import { services, areas, testimonials, faqs, blogPosts, galleryImages, PHONE, PHONE_HREF } from '../lib/data';
import Icon from './components/Icons';
import GalleryImage from './components/GalleryImage';
import QuoteCalculator from './components/QuoteCalculator';

export const metadata = {
  title: `Garage Door Services Ottawa | Repairs & Opener | ${PHONE}`,
  description: 'Garage door services Ottawa & repairs. Opener repair, springs, cables. Same-day service, 5.0 Google rating. Call (613) 617-4238.',
  openGraph: {
    title: `Garage Door Services Ottawa | Repairs & Opener | ${PHONE}`,
    description: 'Garage door services Ottawa & repairs. Opener repair, springs, cables. Same-day service. Call (613) 617-4238.',
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
    <section className="grid-bg hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          <div>
            <div className="badge hero-badge"><Icon name="star" size={16} className="text-orange-bright" /><Icon name="star" size={16} className="text-orange-bright" /><Icon name="star" size={16} className="text-orange-bright" /><Icon name="star" size={16} className="text-orange-bright" /><Icon name="star" size={16} className="text-orange-bright" /> 5.0 Rated</div>
            <h1 className="hero-title">
              SAME-DAY<br />
              <span className="hero-title-accent">GARAGE DOOR</span><br />
              REPAIR OTTAWA
            </h1>
            <p className="hero-subtitle">
              <a href="/services" className="link-inherit">Garage door services Ottawa</a> & <a href="/services" className="link-inherit">garage door repairs</a> — springs, openers, cables — fixed today. <a href="/services/opener-repair" className="link-inherit">Garage door opener repair</a> and installation. Ottawa&apos;s most trusted, available <strong className="text-white">24/7.</strong>
            </p>
            <div className="hero-location">
              <p><Icon name="mappin" size={18} /> Serving all <a href="/areas" className="link-inherit link-inherit-2">Ottawa neighbourhoods</a></p>
              <p>We arrive in under 90 min everywhere</p>
            </div>
            <div className="hero-cta-row">
              <a href={PHONE_HREF} className="btn-primary"><Icon name="emergency" size={20} /> Emergency Call — {PHONE}</a>
              <a href="/contact" className="btn-secondary">Get Free Quote →</a>
              <a href="/booking" className="btn-secondary">Book a visit →</a>
            </div>
            <div className="hero-features">
              {[{ icon: 'bolt', label: 'Same Day Service' }, { icon: 'dollar', label: 'Upfront Pricing' }, { icon: 'shield', label: '1 Year Warranty' }].map(item => (
                <div key={item.label} className="hero-feature-item">
                  <Icon name={item.icon} size={22} className="text-orange" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hide-mobile">
            <div className="glass-card border-glow hero-request-card">
              <h2 className="hero-form-title">Request Service</h2>
              <p className="hero-form-desc">We arrive in under 90 minutes in every Ottawa area</p>
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
              <a href={PHONE_HREF} className="btn-primary btn-full"><Icon name="phone" size={20} /> Call for Instant Quote</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-gradient-bottom" aria-hidden="true" />
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: 'shield', label: 'Licensed & Insured' },
    { icon: 'star', label: '5.0 Google Rating' },
    { icon: 'bolt', label: 'Same Day Service' },
    { icon: 'dollar', label: 'Upfront Pricing' },
    { icon: 'shield', label: '1 Year Warranty' },
    { icon: 'emergency', label: '24/7 Emergency' },
    { icon: 'mappin', label: 'Ottawa Local' },
    { icon: 'phone', label: 'Call Anytime' },
  ];
  return (
    <div className="trust-bar">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="marquee-item">
              <Icon name={item.icon} size={18} className="text-white" />
              {item.label}
              <span className="marquee-sep">◆</span>
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
    <section className="section-sm stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="reveal stat-item">
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
    <section className="section">
      <div className="container">
        <div className="section-intro">
          <span className="section-label">What We Fix</span>
          <h2 className="heading-xl reveal">
            Garage Door Services Ottawa & <em className="text-orange">Garage Door Repairs</em>
          </h2>
          <p className="section-intro-p">
            Garage door opener repair, spring replacement, cables, new doors. Same-day garage door services across Ottawa.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <a key={service.slug} href={`/services/${service.slug}`} className="glass-card card-shine reveal service-card">
              {service.image && (
                <div className="service-card-img-wrap">
                  <img src={service.image} alt={service.title} />
                </div>
              )}
              <div className="service-card-body">
                <div className="service-card-header">
                  <div className="icon-wrap"><Icon name={service.slug} size={40} /></div>
                  <span className="service-tag">{service.price}</span>
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>
                <div className="service-card-meta">
                  <span><Icon name="clock" size={14} /> {service.time}</span>
                  <span><Icon name="shield" size={14} /> {service.warranty}</span>
                </div>
                <div className="service-card-link">Learn More <span>→</span></div>
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
        <div className="section-intro">
          <span className="section-label text-orange">How It Works</span>
          <h2 className="heading-xl reveal text-navy">Fixed in 4 Simple Steps</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="reveal step-item">
              <div className="step-bg-num" aria-hidden="true">{step.num}</div>
              <div className="step-inner">
                <div className="step-icon">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
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
    <section className="section areas-section">
      <div className="container">
        <div className="areas-grid">
          <div className="areas-intro">
            <span className="section-label">Service Area</span>
            <h2 className="heading-xl areas-heading reveal areas-heading-text">
              We Come to <em className="text-orange">Your Door</em> Across Ottawa
            </h2>
            <p className="areas-intro-p">
              We arrive in under 90 minutes everywhere in Ottawa — from Kanata to Orleans, Barrhaven to Stittsville. Same promise in every neighbourhood.
            </p>
            <a href={PHONE_HREF} className="btn-primary"><Icon name="phone" size={20} /> Check Your Area</a>
          </div>
          <div className="areas-pills-wrap">
            <div className="areas-pills-inner">
              {areas.map(area => (
                <a key={area.slug} href={`/areas/${area.slug}`} className="area-pill"><Icon name="mappin" size={16} /> {area.name}</a>
              ))}
            </div>
            <div className="glass-card areas-response-card reveal areas-response-inner">
              <div className="areas-response-row">
                <Icon name="clock" size={36} className="text-orange areas-response-icon" />
                <div className="areas-response-text">
                  <div className="areas-response-label">Average Response Time</div>
                  <div className="stat-number areas-response-time">Under 90 Minutes</div>
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