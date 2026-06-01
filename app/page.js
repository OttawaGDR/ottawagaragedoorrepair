import { services, areas, faqs, blogPosts, galleryImages, PHONE, PHONE_HREF, homepageStats, BUSINESS_NAME } from '../lib/data';
import {
  META_TITLE_HOME,
  META_DESCRIPTION_HOME,
  OG_SITE_NAME,
  SITE_ALTERNATE_NAMES,
  SITE_BRAND,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  siteOgImage,
} from '../lib/seo';
import {
  trustBarItems,
  heroFeaturePills,
  howItWorksSteps,
  howItWorksPromiseItems,
  gallerySection,
  finalCtaCopy,
} from '../lib/siteCopy';
import Icon from './components/Icons';
import GalleryImage from './components/GalleryImage';
import QuoteCalculator from './components/QuoteCalculator';
import ContactCallbackForm from './components/ContactCallbackForm';

/** WebSite JSON-LD belongs on the domain home page only (Google Site names guidelines). */
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  alternateName: SITE_ALTERNATE_NAMES,
  url: `${SITE_URL}/`,
  description: META_DESCRIPTION_HOME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-CA',
};

export const metadata = {
  title: { absolute: META_TITLE_HOME },
  description: META_DESCRIPTION_HOME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: META_TITLE_HOME,
    description: META_DESCRIPTION_HOME,
    url: SITE_URL,
    siteName: OG_SITE_NAME,
    locale: 'en_CA',
    type: 'website',
    images: [siteOgImage],
  },
  twitter: {
    card: 'summary',
    title: META_TITLE_HOME,
    description: META_DESCRIPTION_HOME,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <Stats />
      <Services />
      <QuoteCalculator services={services} />
      <HowItWorks />
      <Areas />
      <Gallery />
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
            <div className="badge hero-badge"><Icon name="bolt" size={16} className="text-orange-bright" /> Same-Day Service</div>
            <p className="hero-brand-line">{SITE_NAME}</p>
            <h1 className="hero-title">
              SAME-DAY<br />
              <span className="hero-title-accent">GARAGE DOOR</span><br />
              REPAIR OTTAWA
            </h1>
            <p className="hero-subtitle">
              <a href="/services" className="link-inherit">Garage door services Ottawa</a> & <a href="/services" className="link-inherit">garage door repairs</a> — springs, openers, cables — fixed today. <a href="/services/opener-repair" className="link-inherit">Garage door opener repair</a> and installation. Local crew, <strong className="text-white">24/7</strong> emergency line.
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
              {heroFeaturePills.map(item => (
                <div key={item.label} className="hero-feature-item">
                  <Icon name={item.icon} size={22} className="text-orange" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-request-mobile glass-card border-glow">
              <ContactCallbackForm services={services} areas={areas} variant="hero" />
            </div>
          </div>
          <div className="hide-mobile hero-request-desktop">
            <div className="glass-card border-glow hero-request-card">
              <ContactCallbackForm services={services} areas={areas} variant="hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-gradient-bottom" aria-hidden="true" />
    </section>
  );
}

function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...trustBarItems, ...trustBarItems].map((item, i) => (
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
  const stats = homepageStats;
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
                  <img src={service.image} alt={service.imageAlt || service.title} />
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
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-intro">
          <span className="section-label text-orange">Service Flow</span>
          <h2 className="heading-xl reveal text-navy">Your Door Fixed in 3 Steps</h2>
          <p className="section-intro-p" style={{ color: 'var(--gray-600)', maxWidth: 560, margin: '16px auto 0' }}>
            One call or online request. A stocked van. A working door — usually the same day.
          </p>
        </div>
        <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {howItWorksSteps.map((step, i) => (
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, marginTop: 48, padding: '28px 24px', background: 'var(--navy)', borderRadius: 16 }}>
          {howItWorksPromiseItems.map((item) => (
            <div key={item.sub} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--orange)' }}>{item.label}</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>{item.sub}</div>
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
          <span className="section-label">{gallerySection.label}</span>
          <h2 className="heading-xl reveal" style={{ maxWidth: 560, margin: '0 auto' }}>
            {gallerySection.title} <em style={{ color: 'var(--orange)' }}>{gallerySection.titleAccent}</em>
          </h2>
          <p style={{ color: 'var(--gray-400)', marginTop: 16, maxWidth: 500, margin: '16px auto 0', lineHeight: 1.75 }}>
            {gallerySection.subtitle}
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
          {finalCtaCopy.badge}
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900,  color: 'white', marginBottom: 20, lineHeight: 1.05, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
          GARAGE DOOR PROBLEM?<br />
          <span style={{ color: 'var(--orange)' }}>WE FIX IT TODAY.</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: 48, maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.75 }}>
          Open 9 AM–9 PM daily. <a href="/services/emergency-repair" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Emergency line</a> overnight. Most repairs wrapped up in one trip.
        </p>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={PHONE_HREF} className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 44px', display: 'inline-flex', alignItems: 'center', gap: 10 }}><Icon name="emergency" size={22} /> Call Now: {PHONE}</a>
          <a href="/contact" className="btn-secondary" style={{ fontSize: '1rem' }}>Book Online →</a>
        </div>
      </div>
    </section>
  );
}