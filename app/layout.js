import './globals.css';
import { services, areas, PHONE, PHONE_HREF, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, BUSINESS_NAME } from '../lib/data';
import {
  META_TITLE_HOME,
  META_TITLE_TEMPLATE,
  META_DESCRIPTION_HOME,
  OG_SITE_NAME,
  SITE_ALTERNATE_NAMES,
  SITE_NAME,
  SITE_URL,
  siteIcons,
  siteLogoImageObject,
  siteOgImage,
} from '../lib/seo';
import Icon from './components/Icons';
import Logo from './components/Logo';
import HeroBackground from './components/HeroBackground';
import GoogleAnalytics from './components/GoogleAnalytics';

export const viewport = { width: 'device-width', initialScale: 1, maximumScale: 5 };
export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: META_TITLE_HOME,
    template: META_TITLE_TEMPLATE,
  },
  description: META_DESCRIPTION_HOME,
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
    url: SITE_URL,
    siteName: OG_SITE_NAME,
    title: META_TITLE_HOME,
    description: META_DESCRIPTION_HOME,
    images: [siteOgImage],
  },
  icons: siteIcons,
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
  other: { 'msvalidate.01': 'F07B54450F4E8031FB33D8429BD6A5A2' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.ottawagaragedoorrepair.ca/#organization',
  name: SITE_NAME,
  alternateName: SITE_ALTERNATE_NAMES,
  telephone: '(613) 617-4238',
  email: 'info@ottawagaragedoorrepair.ca',
  url: 'https://www.ottawagaragedoorrepair.ca',
  logo: siteLogoImageObject,
  image: siteLogoImageObject.url,
  description: META_DESCRIPTION_HOME,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ottawa',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed: areas.map((a) => a.name),
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '09:00', closes: '21:00', description: 'Same-day service' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59', description: '24/7 emergency' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Garage Door Services Ottawa',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: `${s.title} Ottawa` },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href={`${SITE_URL}/favicon-32.png`} type="image/png" sizes="32x32" />
        <link rel="icon" href={`${SITE_URL}/icon.svg`} type="image/svg+xml" />
        <link rel="shortcut icon" href={`${SITE_URL}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${SITE_URL}/apple-touch-icon.png`} sizes="180x180" />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="apple-mobile-web-app-title" content="Ottawa GDR" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, background: 'var(--navy)' }} className="noise has-sticky-cta">
        <GoogleAnalytics />
        <HeroBackground />
        <Navbar />
        <div className="mobile-no-hscroll" style={{ overflowX: 'hidden', maxWidth: '100%', position: 'relative', zIndex: 1, paddingTop: 56 }}>
          {children}
        </div>
        <StickyBottomCta />
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
          .mobile-menu-group { margin-bottom: 4px; }
          .mobile-menu-summary {
            list-style: none;
            padding: 14px 16px;
            color: rgba(255,255,255,0.9);
            font-weight: 700;
            font-size: 1rem;
            border-radius: 10px;
            cursor: pointer;
          }
          .mobile-menu-summary::-webkit-details-marker { display: none; }
          .mobile-menu-sub { padding: 0 8px 8px; display: flex; flex-direction: column; gap: 2px; }
          .drawer-sublink {
            display: block;
            padding: 11px 16px 11px 28px !important;
            font-size: 0.92rem !important;
            font-weight: 500 !important;
            color: rgba(255,255,255,0.75) !important;
          }
          .drawer-sublink-all { color: var(--orange) !important; font-weight: 700 !important; padding-left: 16px !important; }
          .nav-ctas { flex-shrink: 0; }
          .nav-flag { height: 24px !important; width: 48px !important; }
          .main-nav .nav-inner > div:first-child { min-width: 0; max-width: 55%; }
        }
      `}</style>
      <nav className="main-nav main-nav-wrap">
        <div className="nav-inner">
          <div className="nav-left">
            <Logo compact />
            <img src="https://flagcdn.com/w80/ca.png" alt="Canada" className="nav-flag" />
          </div>

          <div className="hide-mobile nav-center">
            <div className="nav-dropdown">
              <a href="/services" className="nav-item">SERVICES <span className="nav-dropdown-arrow" aria-hidden>▼</span></a>
              <div className="nav-dropdown-menu">
                {services.map(s => (
                  <a key={s.slug} href={`/services/${s.slug}`} className="dropdown-post">
                    <span className="dropdown-post-emoji"><Icon name={s.slug} size={22} /></span>
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
                    <span className="dropdown-post-emoji">📍</span>
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
                    <span className="dropdown-post-emoji"><Icon name={post.icon} size={22} /></span>
                    <div>
                      <div className="dropdown-post-title">{post.title}</div>
                      <div className="dropdown-post-cat">{post.cat}</div>
                    </div>
                  </a>
                ))}
                <a href="/blog" className="dropdown-view-all">View All Articles →</a>
              </div>
            </div>
            <a href="/faq" className="nav-item">FAQ</a>
            <a href="/about" className="nav-item">ABOUT</a>
            <a href="/contact" className="nav-item">CONTACT</a>
            <a href="/booking" className="nav-item">BOOK A VISIT</a>
          </div>

          <div className="nav-right nav-ctas">
            <details className="show-mobile nav-details">
              <summary className="mobile-menu-btn" aria-label="Open menu">☰</summary>
              <div className="mobile-menu-drawer">
                <details className="mobile-menu-group">
                  <summary className="mobile-menu-summary">Services</summary>
                  <div className="mobile-menu-sub">
                    {services.map((s) => (
                      <a key={s.slug} href={`/services/${s.slug}`} className="drawer-sublink">{s.title}</a>
                    ))}
                    <a href="/services" className="drawer-sublink drawer-sublink-all">All services →</a>
                  </div>
                </details>
                <a href="/areas">Areas</a>
                <a href="/blog">Blog</a>
                <a href="/faq">FAQ</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/booking">Book a visit</a>
              </div>
            </details>
          </div>
        </div>
      </nav>
    </>
  );
}

function StickyBottomCta() {
  return (
    <div className="sticky-bottom-cta" role="region" aria-label="Call or request a quote">
      <a href="/contact" className="sticky-bottom-btn sticky-bottom-quote">
        Free Quote
      </a>
      <a href={PHONE_HREF} className="sticky-bottom-btn sticky-bottom-call" aria-label={`Call ${PHONE}`}>
        <Icon name="phone" size={20} />
        <span className="hide-mobile">Call {PHONE}</span>
        <span className="show-mobile">Call Now</span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-wrap"><Logo asLink /></div>
            <div className="footer-brand-desc">Same-Day Garage Door Service</div>
            <p className="footer-brand-p">Ottawa garage door repairs, opener service, and installs. Licensed, insured — emergency line 24/7.</p>
            <a href={PHONE_HREF} className="footer-phone"><Icon name="phone" size={20} /> {PHONE}</a>
            <span className="footer-contact-line"><Icon name="envelope" size={16} /> <a href={`mailto:${EMAIL}`} className="footer-contact-link">info@ottawagaragedoorrepair.ca</a></span>
            <span className="footer-contact-line"><Icon name="mappin" size={16} /> Ottawa, Ontario, Canada</span>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-line footer-social-link" aria-label={`${BUSINESS_NAME} on Facebook`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Follow us on Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-line footer-social-link" aria-label={`${BUSINESS_NAME} on Instagram`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Follow us on Instagram
            </a>
          </div>
          <div>
            <h4 className="footer-col-title">Services</h4>
            {services.slice(0, 5).map(s => (
              <a key={s.slug} href={`/services/${s.slug}`} className="footer-link">{s.title}</a>
            ))}
          </div>
          <div>
            <h4 className="footer-col-title">Areas</h4>
            {areas.slice(0, 6).map(a => (
              <a key={a.slug} href={`/areas/${a.slug}`} className="footer-link">{a.name}</a>
            ))}
          </div>
          <div>
            <h4 className="footer-col-title">Company</h4>
            {[['About Us', '/about'], ['FAQ', '/faq'], ['Contact', '/contact'], ['Book a visit', '/booking'], ['Blog', '/blog'], ['Emergency Service', '/services/emergency-repair']].map(([label, href]) => (
              <a key={href} href={href} className="footer-link">{label}</a>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div className="footer-bottom-wrap">
          <p>© 2026 {BUSINESS_NAME}. All rights reserved. | Serving Ottawa, ON</p>
          <div className="footer-bottom-links">
            {[['Privacy Policy', '/privacy'], ['Sitemap', '/sitemap.xml']].map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
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