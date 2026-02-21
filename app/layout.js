import './globals.css';
import { services, areas, PHONE, PHONE_HREF, SMS_HREF } from '../lib/data';
import Icon from './components/Icons';
import EmergencyBar from './components/EmergencyBar';
import Logo from './components/Logo';
import HeroBackground from './components/HeroBackground';

export const viewport = { width: 'device-width', initialScale: 1, maximumScale: 5 };
export const metadata = {
  metadataBase: new URL('https://ottawagaragedoorrepair.ca'),
  title: {
    default: 'Garage Door Services Ottawa | Garage Door Repairs & Opener Repair | Ottawa - GDR',
    template: '%s | Ottawa - GDR',
  },
  description: 'Fast, reliable garage door repair in Ottawa. 24/7 emergency service, same-day fixes, 1-year warranty. Call (613) 617-4238 for a free quote.',
  keywords: [
    'garage door services Ottawa',
    'garage door repairs Ottawa',
    'garage door opener services Ottawa',
    'garage door opener repair Ottawa',
    'garage door repair Ottawa',
    'emergency garage door Ottawa',
    '24 hour garage door repair Ottawa',
    'garage door spring repair Ottawa',
    'garage door installation Ottawa',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ottawagaragedoorrepair.ca',
    siteName: 'Ottawa - GDR',
    title: 'Garage Door Services Ottawa | Garage Door Repairs & Opener Repair',
    description: 'Ottawa\'s #1 garage door services, repairs & garage door opener repair. Same-day, 5-star rated, 24/7 emergency.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ottawagaragedoorrepair.ca' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ottawagaragedoorrepair.ca/#organization',
  name: 'Ottawa - GDR',
  alternateName: 'Ottawa Garage Door Repair',
  telephone: '(613) 617-4238',
  email: 'info@ottawagaragedoorrepair.ca',
  url: 'https://ottawagaragedoorrepair.ca',
  description: 'Garage door services Ottawa: garage door repairs, garage door opener repair and installation. Same-day service, 24/7 emergency.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ottawa',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed: ['Ottawa', 'Kanata', 'Nepean', 'Barrhaven', 'Orleans', 'Stittsville', 'Gloucester', 'Vanier', 'Westboro', 'Glebe', 'Sandy Hill', 'Manotick', 'Riverside South', 'Alta Vista', 'Hunt Club', 'Carp', 'Orleans', 'Cumberland', 'Carleton Place'],
  openingHours: ['Mo-Su 00:00-23:59'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '50', bestRating: '5', worstRating: '1' },
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Garage Door Services Ottawa',
    itemListElement: services.map((s, i) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: `${s.title} Ottawa` },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <head>
        {/* Add Google Analytics: set NEXT_PUBLIC_GA_ID in env and uncomment the script in layout */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Ottawa - GDR',
            url: 'https://ottawagaragedoorrepair.ca',
            description: 'Garage door services Ottawa — garage door repairs, garage door opener repair and installation.',
            publisher: { '@id': 'https://ottawagaragedoorrepair.ca/#organization' },
            inLanguage: 'en-CA',
          }) }}
        />
      </head>
      <body style={{ margin: 0, background: 'var(--navy)' }} className="noise">
        <HeroBackground />
        <Navbar />
        <div className="mobile-no-hscroll" style={{ overflowX: 'hidden', maxWidth: '100%', position: 'relative', zIndex: 1, paddingTop: 56 }}>
          {children}
        </div>
        <StickyCall />
        <EmergencyBar />
        <Footer />
        <script dangerouslySetInnerHTML={{ __html: clientScript }} />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <>
      <style>{`
        .nav-item {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          letter-spacing: 0.06em;
          transition: all 0.2s;
          position: relative;
          display: inline-block;
          padding: 8px 2px;
          cursor: pointer;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--orange);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-item:hover { color: white; }
        .nav-item:hover::after { width: 100%; }
        .nav-dropdown-arrow { font-size: 0.5em; opacity: 0.8; vertical-align: middle; margin-left: 2px; }

        .nav-dropdown { position: relative; }
        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10,22,40,0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 12px;
          min-width: 320px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease, top 0.2s ease;
          z-index: 1000;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .nav-dropdown:hover .nav-dropdown-menu {
          opacity: 1;
          visibility: visible;
          top: calc(100% + 4px);
        }
        .nav-dropdown-menu::after {
          content: '';
          position: absolute;
          top: -16px;
          left: 0;
          right: 0;
          height: 20px;
        }
        .nav-dropdown-menu::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px; height: 12px;
          background: rgba(10,22,40,0.98);
          border-left: 1px solid rgba(255,255,255,0.1);
          border-top: 1px solid rgba(255,255,255,0.1);
          rotate: 45deg;
        }
        .dropdown-post {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          text-decoration: none;
          color: inherit;
          transition: background 0.2s;
        }
        .dropdown-post:hover { background: rgba(249,115,22,0.1); }
        .dropdown-post-emoji { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
        .dropdown-post-title { font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.4; font-weight: 500; }
        .dropdown-post-cat { font-size: 0.68rem; color: var(--orange); font-weight: 700; margin-top: 3px; letter-spacing: 0.06em; text-transform: uppercase; }
        .dropdown-view-all {
          display: block;
          text-align: center;
          padding: 10px;
          margin-top: 6px;
          border-top: 1px solid rgba(255,255,255,0.07);
          color: var(--orange);
          font-weight: 700;
          font-size: 0.82rem;
          text-decoration: none;
          letter-spacing: 0.06em;
        }
        .show-mobile { display: none !important; }
        @media (max-width: 768px) {
          .show-mobile { display: flex !important; }
          .nav-phone-btn .show-mobile { display: inline !important; }
          .nav-phone-btn .hide-mobile { display: none !important; }
          .mobile-menu-btn {
            display: flex; align-items: center; justify-content: center;
            width: 44px; height: 44px; min-width: 44px; min-height: 44px;
            background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
            border-radius: 10px; color: white; font-size: 1.35rem; cursor: pointer;
            list-style: none; -webkit-tap-highlight-color: transparent;
          }
          .mobile-menu-btn::-webkit-details-marker { display: none; }
          .mobile-menu-drawer {
            position: fixed; top: 56px; left: 0; right: 0;
            background: rgba(10,22,40,0.98); backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding: 16px; z-index: 999;
            display: flex; flex-direction: column; gap: 4px;
            min-width: 100%;
            box-sizing: border-box;
          }
          .mobile-menu-drawer a {
            display: block; padding: 14px 16px; color: rgba(255,255,255,0.9);
            text-decoration: none; font-weight: 600; font-size: 1rem;
            border-radius: 10px; transition: background 0.2s;
            white-space: nowrap;
          }
          .mobile-menu-drawer a:hover, .mobile-menu-drawer a:focus { background: rgba(249,115,22,0.15); color: white; }
          .nav-phone-btn { min-height: 44px; padding: 12px 20px !important; }
        }
      `}</style>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        background: 'rgba(10,22,40,0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0 16px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 56, gap: 12 }}>
          <Logo compact />

          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <div className="nav-dropdown">
              <a href="/services" className="nav-item">SERVICES <span className="nav-dropdown-arrow" aria-hidden>▼</span></a>
              <div className="nav-dropdown-menu">
                {services.map(s => (
                  <a key={s.slug} href={`/services/${s.slug}`} className="dropdown-post">
                    <span className="dropdown-post-emoji" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)' }}><Icon name={s.slug} size={22} /></span>
                    <div>
                      <div className="dropdown-post-title">{s.title}</div>
                      <div className="dropdown-post-cat">{s.price}</div>
                    </div>
                  </a>
                ))}
                <a href="/services" className="dropdown-view-all">View All Services →</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <a href="/areas" className="nav-item">AREAS <span className="nav-dropdown-arrow" aria-hidden>▼</span></a>
              <div className="nav-dropdown-menu">
                {areas.slice(0, 12).map(a => (
                  <a key={a.slug} href={`/areas/${a.slug}`} className="dropdown-post">
                    <span className="dropdown-post-emoji" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)' }}>📍</span>
                    <div>
                      <div className="dropdown-post-title">{a.name}</div>
                      <div className="dropdown-post-cat">Garage door repair</div>
                    </div>
                  </a>
                ))}
                <a href="/areas" className="dropdown-view-all">View All Areas →</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <a href="/blog" className="nav-item">BLOG <span className="nav-dropdown-arrow" aria-hidden>▼</span></a>
              <div className="nav-dropdown-menu">
                {[
                  { slug: 'garage-door-repair-cost-ottawa', icon: 'dollar', title: 'Repair Costs in Ottawa (2026 Guide)', cat: 'Pricing' },
                  { slug: 'broken-spring-ottawa-what-to-do', icon: 'wrench', title: "Broken Spring? Here's What To Do", cat: 'Emergency' },
                  { slug: 'garage-door-not-opening-cold-weather', icon: 'weather', title: 'Door Not Opening in Cold Weather?', cat: 'Winter Tips' },
                  { slug: 'best-insulated-garage-doors-ottawa', icon: 'home', title: 'Best Insulated Doors for Ottawa', cat: 'Buying Guide' },
                  { slug: 'smart-garage-door-opener-ottawa', icon: 'smartphone', title: 'Best Smart Openers (2026 Review)', cat: 'Smart Home' },
                  { slug: 'garage-door-maintenance-checklist-ottawa', icon: 'checklist', title: 'Annual Maintenance Checklist', cat: 'Maintenance' },
                ].map(post => (
                  <a key={post.slug} href={`/blog/${post.slug}`} className="dropdown-post">
                    <span className="dropdown-post-emoji" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)' }}><Icon name={post.icon} size={22} /></span>
                    <div>
                      <div className="dropdown-post-title">{post.title}</div>
                      <div className="dropdown-post-cat">{post.cat}</div>
                    </div>
                  </a>
                ))}
                <a href="/blog" className="dropdown-view-all">View All Articles →</a>
              </div>
            </div>
            <a href="/about" className="nav-item">ABOUT</a>
            <a href="/contact" className="nav-item">CONTACT</a>
            <a href="/booking" className="nav-item">BOOK A VISIT</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <details className="show-mobile" style={{ position: 'relative' }}>
              <summary className="mobile-menu-btn" aria-label="Open menu">☰</summary>
              <div className="mobile-menu-drawer">
                <a href="/services">Services</a>
                <a href="/areas">Areas</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/booking">Book a visit</a>
                <a href={SMS_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>📱 Text Us</a>
              </div>
            </details>
            <a href={SMS_HREF} className="show-mobile btn-secondary" style={{ padding: '12px 18px', fontSize: '0.9rem', alignItems: 'center', gap: 6 }} aria-label="Text Ottawa - GDR">
              <Icon name="message" size={18} /> Text
            </a>
            <a href={PHONE_HREF} className="btn-primary nav-phone-btn" style={{ padding: '12px 20px', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon name="phone" size={20} /> <span className="hide-mobile">{PHONE}</span><span className="show-mobile">Call</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

function StickyCall() {
  return (
    <div className="sticky-call">
      <a href={PHONE_HREF} aria-label="Call Ottawa - GDR" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit' }}><Icon name="phone" size={24} /></a>
      <span className="sticky-call-label">Call Now</span>
      <a href={SMS_HREF} aria-label="Text Ottawa - GDR" className="sticky-sms" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit' }}><Icon name="message" size={24} /></a>
      <span className="sticky-call-label">Text Us</span>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#02080f', borderTop: '1px solid rgba(249,115,22,0.1)', padding: '70px 0 110px' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          <div>
            <div style={{ marginBottom: 20 }}><Logo asLink /></div>
            <div style={{ fontSize: '0.72rem', color: 'var(--orange)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20 }}>Ottawa's #1 Rated Service</div>
            <p style={{ color: 'var(--gray-400)', lineHeight: 1.75, fontSize: '0.88rem', maxWidth: 280, marginBottom: 24 }}>Garage door services Ottawa — garage door repairs & garage door opener repair. Licensed, insured, 24/7.</p>
            <a href={PHONE_HREF} style={{ color: 'var(--orange)', fontWeight: 800, fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}><Icon name="phone" size={20} /> {PHONE}</a>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}><Icon name="envelope" size={16} /> info@ottawagaragedoorrepair.ca</span>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="mappin" size={16} /> Ottawa, Ontario, Canada</span>
          </div>
          <div>
            <h4 style={{ fontWeight: 800, marginBottom: 20, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Services</h4>
            {services.slice(0, 5).map(s => (
              <a key={s.slug} href={`/services/${s.slug}`} className="footer-link">{s.title}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontWeight: 800, marginBottom: 20, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Areas</h4>
            {areas.slice(0, 6).map(a => (
              <a key={a.slug} href={`/areas/${a.slug}`} className="footer-link">{a.name}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontWeight: 800, marginBottom: 20, fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>Company</h4>
            {[['About Us', '/about'], ['Contact', '/contact'], ['Book a visit', '/booking'], ['Blog', '/blog'], ['Emergency Service', '/services/emergency-repair']].map(([label, href]) => (
              <a key={href} href={href} className="footer-link">{label}</a>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>© 2026 Ottawa - GDR. All rights reserved. | Serving Ottawa, ON</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {[['Privacy Policy', '/privacy'], ['Terms of Service', '#'], ['Sitemap', '/sitemap.xml']].map(([label, href]) => (
              <a key={label} href={href} style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const clientScript = `
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.faq-question');
    if (btn) {
      var item = btn.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    }
  });

  function runAfterHydration() {
    function initReveal() {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
    }
    initReveal();

    document.querySelectorAll('.ba-slider').forEach(function(slider) {
      var handle = slider.querySelector('.ba-handle');
      var after = slider.querySelector('.ba-after');
      var dragging = false;
      if (!handle || !after) return;
      function setPosition(x) {
        var rect = slider.getBoundingClientRect();
        var pct = Math.min(Math.max((x - rect.left) / rect.width * 100, 0), 100);
        handle.style.left = pct + '%';
        after.style.width = pct + '%';
      }
      handle.addEventListener('mousedown', function() { dragging = true; });
      handle.addEventListener('touchstart', function() { dragging = true; });
      document.addEventListener('mouseup', function() { dragging = false; });
      document.addEventListener('touchend', function() { dragging = false; });
      document.addEventListener('mousemove', function(e) { if (dragging) setPosition(e.clientX); });
      document.addEventListener('touchmove', function(e) { if (dragging) setPosition(e.touches[0].clientX); });
      setPosition(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width * 0.5);
    });
  }
  if (document.readyState === 'complete') setTimeout(runAfterHydration, 150);
  else window.addEventListener('load', function() { setTimeout(runAfterHydration, 150); });
`;