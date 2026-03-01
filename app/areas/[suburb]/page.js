import { areas, services, testimonials, faqs, PHONE, PHONE_HREF } from '../../../lib/data';

export async function generateStaticParams() {
  return areas.map(a => ({ suburb: a.slug }));
}

const SITE_URL = 'https://ottawagaragedoorrepair.ca';

export async function generateMetadata({ params }) {
  const { suburb } = await params;
  const area = areas.find(a => a.slug === suburb);
  if (!area) return {};
  const areaUrl = `${SITE_URL}/areas/${suburb}`;
  const title = `Garage Door Repair ${area.name} | Same-Day Service | Ottawa - GDR`;
  const description = `Same-day garage door repair in ${area.name}, Ottawa. Springs, openers, cables, emergency service. Licensed, 5★ rated. Call ${PHONE} for a quote.`;
  return {
    title,
    description,
    alternates: { canonical: areaUrl },
    openGraph: {
      title: `Garage Door Repair ${area.name} | Ottawa - GDR`,
      description,
      url: areaUrl,
      siteName: 'Ottawa Garage Door Repair',
      locale: 'en_CA',
    },
    keywords: [
      `garage door repair ${area.name}`,
      `garage door repair ${area.name} Ottawa`,
      `garage door service ${area.name}`,
      'garage door opener repair Ottawa',
    ],
  };
}

export default async function AreaPage({ params }) {
  const { suburb } = await params;
  const area = areas.find(a => a.slug === suburb);

  if (!area) {
    return (
      <div style={{ padding: 100, textAlign: 'center', color: 'white', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: 20 }}>📍</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: 16 }}>Area Not Found</h1>
        <p style={{ color: 'var(--gray-400)', marginBottom: 32 }}>Looking for: "{suburb}"</p>
        <a href="/" style={{ color: 'var(--orange)', fontWeight: 700, textDecoration: 'none' }}>← Back to Home</a>
      </div>
    );
  }

  const areaReviews = testimonials.filter(t => t.area.toLowerCase().includes(area.name.toLowerCase()));
  const displayReviews = areaReviews.length ? areaReviews : testimonials.slice(0, 2);

  const areaPageUrl = `${SITE_URL}/areas/${suburb}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'Ottawa Garage Door Repair',
    alternateName: 'Ottawa - GDR',
    description: `Garage door repair and installation in ${area.name}, Ottawa. Same-day service for springs, openers, cables, and emergency repairs.`,
    url: SITE_URL,
    telephone: PHONE,
    areaServed: [{ '@type': 'City', name: area.name }, { '@type': 'City', name: 'Ottawa', addressRegion: 'ON', addressCountry: 'CA' }],
    address: { '@type': 'PostalAddress', addressLocality: 'Ottawa', addressRegion: 'ON', addressCountry: 'CA' },
    serviceArea: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 45.4215, longitude: -75.6972 }, geoRadius: '50000' },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: `${SITE_URL}/areas` },
      { '@type': 'ListItem', position: 3, name: `Garage Door Repair ${area.name}`, item: areaPageUrl },
    ],
  };

  const areaColors = {
    'kanata': '#f97316', 'barrhaven': '#3b82f6', 'nepean': '#8b5cf6',
    'orleans': '#10b981', 'stittsville': '#f59e0b', 'gloucester': '#ef4444',
    'manotick': '#06b6d4', 'alta-vista': '#84cc16', 'hunt-club': '#ec4899',
    'riverside-south': '#f97316', 'westboro': '#14b8a6', 'carp': '#a855f7',
    'dunrobin': '#0ea5e9', 'carleton-place': '#d946ef', 'greely': '#22c55e',
    'richmond': '#eab308', 'vanier': '#f43f5e', 'rockcliffe-park': '#8b5cf6',
    'findlay-creek': '#fb923c',
    'embrun': '#f59e0b', 'russell': '#eab308', 'metcalfe': '#10b981', 'kemptville': '#6366f1',
    'arnprior': '#0ea5e9', 'almonte': '#8b5cf6', 'casselman': '#ec4899', 'rockland': '#14b8a6',
    'navan': '#22c55e', 'smiths-falls': '#d946ef', 'winchester': '#f97316', 'limoges': '#06b6d4',
    'constance-bay': '#84cc16', 'osgoode': '#fb923c',
  };
  const activeColor = areaColors[suburb] || '#f97316';

  const zones = [
    { slug: 'dunrobin', name: 'Dunrobin', points: '30,30 120,30 120,95 80,110 30,100', labelX: 72, labelY: 65 },
    { slug: 'carp', name: 'Carp', points: '30,100 80,110 120,95 120,175 60,195 30,180', labelX: 72, labelY: 145 },
    { slug: 'carleton-place', name: 'Carleton Pl.', points: '30,180 60,195 65,260 30,260', labelX: 47, labelY: 222 },
    { slug: 'stittsville', name: 'Stittsville', points: '60,195 120,175 155,175 155,240 100,255 60,250', labelX: 107, labelY: 215 },
    { slug: 'kanata', name: 'Kanata', points: '120,95 210,80 220,90 225,165 185,175 155,175 120,175', labelX: 172, labelY: 132 },
    { slug: 'westboro', name: 'Westboro', points: '210,80 270,75 270,130 240,140 225,165 220,90', labelX: 243, labelY: 112 },
    { slug: 'nepean', name: 'Nepean', points: '185,175 225,165 240,140 270,130 275,185 260,210 220,225 185,215', labelX: 228, labelY: 183 },
    { slug: 'alta-vista', name: 'Alta Vista', points: '270,130 330,120 345,130 345,185 310,200 275,185', labelX: 308, labelY: 158 },
    { slug: 'vanier', name: 'Vanier', points: '330,75 390,70 395,120 345,130 330,120', labelX: 362, labelY: 100 },
    { slug: 'rockcliffe-park', name: 'Rockcliffe', points: '390,70 440,68 440,110 395,120', labelX: 416, labelY: 92 },
    { slug: 'gloucester', name: 'Gloucester', points: '395,120 440,110 470,115 475,175 430,185 390,180 345,185 345,130', labelX: 412, labelY: 150 },
    { slug: 'orleans', name: 'Orleans', points: '440,68 560,65 565,160 475,175 470,115 440,110', labelX: 505, labelY: 118 },
    { slug: 'hunt-club', name: 'Hunt Club', points: '310,200 345,185 390,180 395,240 360,255 310,250', labelX: 353, labelY: 220 },
    { slug: 'barrhaven', name: 'Barrhaven', points: '220,225 260,210 310,250 310,320 250,335 200,310 195,265', labelX: 255, labelY: 278 },
    { slug: 'riverside-south', name: 'Riverside S.', points: '310,250 360,255 395,240 400,315 355,340 310,320', labelX: 355, labelY: 295 },
    { slug: 'findlay-creek', name: 'Findlay Ck.', points: '395,240 430,185 475,175 480,260 440,295 400,315', labelX: 438, labelY: 255 },
    { slug: 'richmond', name: 'Richmond', points: '100,255 155,240 195,265 200,310 155,330 95,320', labelX: 148, labelY: 290 },
    { slug: 'manotick', name: 'Manotick', points: '250,335 310,320 355,340 350,400 290,410 245,390', labelX: 300, labelY: 368 },
    { slug: 'greely', name: 'Greely', points: '355,340 400,315 440,295 445,390 395,410 350,400', labelX: 398, labelY: 368 },
  ];

  const activeZone = zones.find(z => z.slug === suburb);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="area-detail-page">
      {/* HERO */}
      <section style={{ background: 'transparent', padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }} className="grid-bg">
        <div style={{ position: 'absolute', top: '30%', right: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: 32, fontSize: '0.85rem', color: 'var(--gray-400)' }} className="area-page-nav">
            <a href="/" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <a href="/areas" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Areas</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--orange)' }}>Garage Door Repair {area.name}</span>
          </nav>

          <div className="area-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div className="area-hero-content">
              <div className="badge" style={{ marginBottom: 24 }}>📍 Now Serving {area.name}</div>
              <h1 className="display-xl" style={{ marginBottom: 20, color: 'white' }}>
                GARAGE DOOR<br />
                <span className="text-gradient glow-text">REPAIR</span><br />
                <span className="orange-outline">{area.name.toUpperCase()}</span>
              </h1>
              <p style={{ color: 'var(--gray-400)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 16 }}>
                Fast, reliable garage door repair in {area.name}, Ottawa. Our local technicians provide same-day service for springs, openers, cables, and emergency repairs across {area.name} and surrounding areas.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.92rem', marginBottom: 32 }}>
                {area.localNote}
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
                <a href={PHONE_HREF} className="btn-primary">🚨 Emergency Repair {area.name}</a>
                <a href="#services" className="btn-secondary">View Services →</a>
              </div>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {['Same Day Service', `Local ${area.name} Tech`, '5.0 ⭐ Rated'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: 'var(--orange)', fontWeight: 800, fontSize: '0.9rem' }}>✓</span>
                    <span style={{ color: 'var(--gray-400)', fontSize: '0.85rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hide-mobile">
              <div className="glass-card border-glow" style={{ padding: 36 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem',  marginBottom: 8 }}>
                  Request Service in {area.name}
                </h3>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.85rem', marginBottom: 24 }}>We arrive in under 90 minutes in every Ottawa area — same promise in {area.name}.</p>
                <div className="form-group">
                  <label className="form-label">Service Needed</label>
                  <select className="form-input">
                    <option>Select service...</option>
                    {services.map(s => <option key={s.slug}>{s.title}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Your Phone</label>
                  <input className="form-input" type="tel" placeholder="(613) 000-0000" />
                </div>
                <div className="form-group">
                  <label className="form-label">Best Time</label>
                  <select className="form-input">
                    <option>ASAP — Emergency</option>
                    <option>Today (morning)</option>
                    <option>Today (afternoon)</option>
                    <option>Tomorrow</option>
                  </select>
                </div>
                <a href={PHONE_HREF} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  📞 Call for {area.name} Service
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, var(--navy))', pointerEvents: 'none' }} />
      </section>

      {/* LOCAL CONTENT */}
      <section className="section section-light">
        <div className="container">
          <div className="area-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            <div className="area-content-col">
              <span className="section-label" style={{ color: 'var(--orange)' }}>Local Expertise</span>
              <h2 className="heading-lg" style={{ color: 'var(--navy)', marginBottom: 20 }}>
                Why {area.name} Homeowners Choose Ottawa - GDR
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 20 }}>
                We're not a call centre dispatching random contractors. Our {area.name} technicians live and work in this community. We know the local roads, common door brands in your neighbourhood, and how Ottawa's winters affect your garage door systems.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 32 }}>
                Whether you're dealing with a spring snapped in a -25°C cold snap, a door that came off its tracks, or an opener that stopped responding, we have the parts on our truck and the experience to fix it right the first time.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '⚡', title: `Under 90 Min Arrival`, desc: `We arrive in under 90 minutes everywhere in Ottawa — including ${area.name}. We call 30 min before arrival.` },
                  { icon: '🔧', title: 'All Makes & Models Serviced', desc: 'We stock parts for all major door and opener brands.' },
                  { icon: '❄️', title: 'Ottawa Winter Specialists', desc: 'Cold-weather door failures are our specialty. We work year-round.' },
                  { icon: '💰', title: 'Honest Upfront Pricing', desc: 'Full written quote before we start. No hidden fees ever.' },
                ].map(item => (
                  <div key={item.title} className="light-card" style={{ padding: '18px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 4, fontSize: '0.95rem' }}>{item.title}</div>
                      <div style={{ color: 'var(--gray-600)', fontSize: '0.87rem', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="area-content-col">
              {/* OTTAWA SVG MAP */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ background: 'linear-gradient(135deg, #0a1628, #0f2040)', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', padding: 20 }}>
                  <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ottawa Service Map</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: activeColor, boxShadow: `0 0 10px ${activeColor}` }} />
                      <span style={{ fontSize: '0.78rem', color: 'white', fontWeight: 700 }}>{area.name} — Active</span>
                    </div>
                  </div>

                  <svg viewBox="0 0 600 430" style={{ width: '100%', height: 'auto', display: 'block' }}>
                    <rect width="600" height="430" fill="#060e1d" rx="12" />

                    {/* Ottawa River */}
                    <path d="M 0,58 Q 80,42 160,55 Q 240,68 300,62 Q 380,55 460,65 Q 520,72 600,58" stroke="rgba(59,130,246,0.55)" strokeWidth="22" fill="none" strokeLinecap="round" />
                    <text x="490" y="52" fill="rgba(59,130,246,0.5)" fontSize="8.5" fontFamily="sans-serif">Ottawa River</text>

                    {/* Rideau River */}
                    <path d="M 305,130 Q 310,200 305,280 Q 300,340 305,420" stroke="rgba(59,130,246,0.25)" strokeWidth="5" fill="none" strokeLinecap="round" />

                    {/* Grid reference lines */}
                    <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
                    <line x1="0" y1="250" x2="600" y2="250" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
                    <line x1="200" y1="0" x2="200" y2="430" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
                    <line x1="400" y1="0" x2="400" y2="430" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />

                    {/* Inactive zones */}
                    {zones.filter(z => z.slug !== suburb).map(zone => (
                      <g key={zone.slug}>
                        <polygon points={zone.points} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
                        <text x={zone.labelX} y={zone.labelY} fill="rgba(255,255,255,0.28)" fontSize="7" textAnchor="middle" fontFamily="sans-serif" dominantBaseline="middle">{zone.name}</text>
                      </g>
                    ))}

                    {/* Active zone with glow */}
                    {activeZone && (
                      <g>
                        <polygon points={activeZone.points} fill="none" stroke={activeColor} strokeWidth="10" opacity="0.12" />
                        <polygon points={activeZone.points} fill="none" stroke={activeColor} strokeWidth="5" opacity="0.25" />
                        <polygon points={activeZone.points} fill={activeColor} stroke={activeColor} strokeWidth="1.5" opacity="0.8" />
                        <text x={activeZone.labelX} y={activeZone.labelY} fill="white" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif" dominantBaseline="middle">{activeZone.name}</text>
                        <circle cx={activeZone.labelX} cy={activeZone.labelY - 20} r="5" fill="white" opacity="0.95" />
                        <circle cx={activeZone.labelX} cy={activeZone.labelY - 20} r="9" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
                      </g>
                    )}

                    {/* Downtown marker */}
                    <circle cx="285" cy="118" r="4" fill="rgba(255,255,255,0.55)" />
                    <circle cx="285" cy="118" r="8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <text x="285" y="108" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle" fontFamily="sans-serif">Downtown</text>

                    {/* Compass */}
                    <text x="572" y="418" fill="rgba(255,255,255,0.18)" fontSize="9" textAnchor="middle" fontFamily="sans-serif">N ↑</text>

                    {/* Scale */}
                    <line x1="28" y1="418" x2="88" y2="418" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                    <text x="58" y="427" fill="rgba(255,255,255,0.18)" fontSize="7" textAnchor="middle" fontFamily="sans-serif">~15 km</text>
                  </svg>

                  <div style={{ marginTop: 14, padding: '12px 16px', background: `${activeColor}18`, border: `1px solid ${activeColor}33`, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: activeColor, flexShrink: 0, boxShadow: `0 0 6px ${activeColor}` }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>
                      Currently viewing: <strong style={{ color: 'white' }}>{area.name}</strong> service area
                    </span>
                  </div>
                </div>
              </div>

              {/* SERVICE INFO CARD */}
              <div className="light-card" style={{ padding: 28 }}>
                <h3 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 18, fontSize: '1rem' }}>{area.name} Service Info</h3>
                {[
                  ['Regular Hours', 'Mon–Sun: 9AM–9PM'],
                  ['Emergency Service', '24 Hours / 7 Days'],
                  ['Response Time', 'Under 90 Minutes'],
                  ['Coverage', area.desc],
                  ['Rating', '⭐⭐⭐⭐⭐ 5.0 Google'],
                ].map(([label, value]) => (
                  <div key={label} className="area-service-info-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid var(--gray-100)', gap: 12 }}>
                    <span style={{ color: 'var(--gray-600)', fontSize: '0.88rem', flexShrink: 0 }}>{label}</span>
                    <span className="area-service-info-value" style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.88rem', textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES IN THIS AREA */}
      <section id="services" className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Available In {area.name}</span>
            <h2 className="heading-xl reveal">All Services in <em style={{ color: 'var(--orange)' }}>{area.name}</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {services.map(service => (
              <a key={service.slug} href={`/services/${service.slug}`} className="glass-card card-shine" style={{ padding: 24, textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <span style={{ fontSize: '2rem' }}>{service.icon}</span>
                  <span className="service-tag">{service.price}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)',  fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>{service.title}</h3>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 14 }}>{service.shortDesc}</p>
                <div style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.85rem' }}>Learn More →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL REVIEWS */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label" style={{ color: 'var(--orange)' }}>Reviews</span>
            <h2 className="heading-lg reveal" style={{ color: 'var(--navy)' }}>What {area.name} Customers Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {displayReviews.map((review, i) => (
              <div key={i} className="light-card reveal" style={{ padding: 32, position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '5rem', color: 'var(--orange)', opacity: 0.08, fontFamily: 'var(--font-serif)', position: 'absolute', top: -10, left: 16, lineHeight: 1, userSelect: 'none' }}>"</div>
                <div className="stars" style={{ fontSize: '1rem', marginBottom: 16 }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: 'var(--gray-600)',  lineHeight: 1.75, marginBottom: 24, fontSize: '0.93rem', position: 'relative', zIndex: 1 }}>"{review.text}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>{review.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gray-400)', marginTop: 2 }}>📍 {review.area} · {review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--navy-mid)' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">{area.name} FAQ</span>
            <h2 className="heading-lg reveal">{area.name} Garage Door Questions</h2>
          </div>
          {faqs.slice(0, 5).map((faq, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question">{faq.q}<span className="faq-icon">+</span></button>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--orange)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-xl" style={{ marginBottom: 12 }}>
            GARAGE DOOR REPAIR IN {area.name.toUpperCase()}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: 36 }}>
            Same-day service · Licensed & insured · 5-star rated
          </p>
          <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: '#ea580c', fontWeight: 800, fontSize: '1.15rem', padding: '18px 44px', borderRadius: 100, textDecoration: 'none' }}>
            📞 {PHONE}
          </a>
        </div>
      </section>

      {/* OTHER AREAS */}
      <section className="section-sm" style={{ background: 'var(--navy)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--gray-400)', marginBottom: 20, fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Also Serving</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {areas.filter(a => a.slug !== suburb).map(a => (
              <a key={a.slug} href={`/areas/${a.slug}`} className="area-pill" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>
                📍 {a.name}
              </a>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
