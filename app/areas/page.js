import { areas, PHONE, PHONE_HREF } from '../../lib/data';

export const metadata = {
  title: 'Garage Door Repair Across Ottawa | All Areas | Ottawa - GDR',
  description: `Garage door repair across all Ottawa neighborhoods. Kanata, Barrhaven, Nepean, Orleans, Stittsville, Gloucester and more. Same-day service. Call ${PHONE}.`,
  alternates: { canonical: 'https://ottawagaragedoorrepair.ca/areas' },
};

const areaDetails = [
  { slug: "kanata", name: "Kanata", emoji: "🏘️", population: "110,000+", highlight: "Tech hub with newer homes & premium doors", color: "#f97316" },
  { slug: "barrhaven", name: "Barrhaven", emoji: "🌳", population: "95,000+", highlight: "Fast-growing suburb, new construction specialist", color: "#3b82f6" },
  { slug: "nepean", name: "Nepean", emoji: "🏡", population: "124,000+", highlight: "Mix of older & newer homes, all door generations", color: "#8b5cf6" },
  { slug: "orleans", name: "Orleans", emoji: "🌊", population: "100,000+", highlight: "East Ottawa, Navan & Fallingbrook", color: "#10b981" },
  { slug: "stittsville", name: "Stittsville", emoji: "🌾", population: "30,000+", highlight: "West Ottawa, Carleton Place area", color: "#f59e0b" },
  { slug: "gloucester", name: "Gloucester", emoji: "🏢", population: "107,000+", highlight: "Dense residential, commercial & industrial service", color: "#ef4444" },
  { slug: "manotick", name: "Manotick", emoji: "🏰", population: "8,000+", highlight: "Estate & custom door specialist, large properties", color: "#06b6d4" },
  { slug: "alta-vista", name: "Alta Vista", emoji: "🌿", population: "25,000+", highlight: "Central Ottawa, established neighbourhoods", color: "#84cc16" },
  { slug: "hunt-club", name: "Hunt Club", emoji: "✈️", population: "35,000+", highlight: "Airport corridor, residential & commercial", color: "#ec4899" },
  { slug: "riverside-south", name: "Riverside South", emoji: "🏗️", population: "25,000+", highlight: "New builds specialist, all major brand installs", color: "#f97316" },
  { slug: "westboro", name: "Westboro", emoji: "🏙️", population: "20,000+", highlight: "Urban specialist, heritage homes & tight laneways", color: "#14b8a6" },
  { slug: "vanier", name: "Vanier", emoji: "🏘️", population: "18,000+", highlight: "Central-east Ottawa, New Edinburgh & Overbrook", color: "#f43f5e" },
  { slug: "rockcliffe-park", name: "Rockcliffe Park", emoji: "🌳", population: "2,000+", highlight: "Rockcliffe Park & New Edinburgh", color: "#8b5cf6" },
  { slug: "findlay-creek", name: "Findlay Creek", emoji: "🏗️", population: "15,000+", highlight: "New development specialist, south Ottawa", color: "#fb923c" },
  { slug: "carp", name: "Carp", emoji: "🌾", population: "2,000+", highlight: "West Ottawa village & rural", color: "#a855f7" },
  { slug: "dunrobin", name: "Dunrobin", emoji: "🌲", population: "1,500+", highlight: "West Carleton, rural Ottawa", color: "#0ea5e9" },
  { slug: "richmond", name: "Richmond", emoji: "🏡", population: "4,000+", highlight: "Richmond village & North Gower", color: "#eab308" },
  { slug: "greely", name: "Greely", emoji: "🌿", population: "8,000+", highlight: "South Ottawa growth corridor", color: "#22c55e" },
  { slug: "sandy-hill", name: "Sandy Hill", emoji: "🏛️", population: "15,000+", highlight: "University area & downtown east", color: "#6366f1" },
  { slug: "glebe", name: "Glebe", emoji: "🏙️", population: "12,000+", highlight: "Glebe, Old Ottawa South & Lansdowne", color: "#14b8a6" },
  { slug: "beacon-hill", name: "Beacon Hill", emoji: "🏘️", population: "22,000+", highlight: "Beacon Hill, Cyrville & Gloucester North", color: "#ef4444" },
  { slug: "blackburn-hamlet", name: "Blackburn Hamlet", emoji: "🌳", population: "8,000+", highlight: "Blackburn Hamlet & Orleans east", color: "#10b981" },
  { slug: "cumberland", name: "Cumberland", emoji: "🏡", population: "2,500+", highlight: "Cumberland village & rural Orleans", color: "#06b6d4" },
  { slug: "carleton-place", name: "Carleton Place", emoji: "🌾", population: "12,000+", highlight: "Ottawa Valley, just west of Ottawa", color: "#d946ef" },
  /* Within ~40 min drive of Ottawa */
  { slug: "embrun", name: "Embrun", emoji: "🏘️", population: "6,500+", highlight: "Russell Township, east Ottawa region", color: "#f59e0b" },
  { slug: "russell", name: "Russell", emoji: "🌾", population: "4,000+", highlight: "Russell village & township", color: "#eab308" },
  { slug: "metcalfe", name: "Metcalfe", emoji: "🌿", population: "2,000+", highlight: "Osgoode & rural south Ottawa", color: "#10b981" },
  { slug: "kemptville", name: "Kemptville", emoji: "🏡", population: "4,000+", highlight: "North Grenville, south of Ottawa", color: "#6366f1" },
  { slug: "arnprior", name: "Arnprior", emoji: "🌲", population: "9,000+", highlight: "Ottawa Valley west", color: "#0ea5e9" },
  { slug: "almonte", name: "Almonte", emoji: "🏙️", population: "5,000+", highlight: "Mississippi Mills, west Ottawa", color: "#8b5cf6" },
  { slug: "casselman", name: "Casselman", emoji: "📍", population: "3,500+", highlight: "Prescott-Russell, east of Ottawa", color: "#ec4899" },
  { slug: "rockland", name: "Rockland", emoji: "🏘️", population: "10,000+", highlight: "Clarence-Rockland, east Ottawa", color: "#14b8a6" },
  { slug: "navan", name: "Navan", emoji: "🌾", population: "2,000+", highlight: "Rural east Ottawa village", color: "#22c55e" },
  { slug: "smiths-falls", name: "Smiths Falls", emoji: "🏡", population: "9,000+", highlight: "Rideau region, south of Ottawa", color: "#d946ef" },
  { slug: "winchester", name: "Winchester", emoji: "🌿", population: "2,000+", highlight: "North Dundas, south Ottawa", color: "#f97316" },
  { slug: "limoges", name: "Limoges", emoji: "📍", population: "2,500+", highlight: "Prescott-Russell, east Ottawa", color: "#06b6d4" },
  { slug: "constance-bay", name: "Constance Bay", emoji: "🌊", population: "2,500+", highlight: "West Carleton, Ottawa River", color: "#84cc16" },
  { slug: "osgoode", name: "Osgoode", emoji: "🌾", population: "2,500+", highlight: "Rural south Ottawa village", color: "#fb923c" },
];

export default function AreasPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'transparent', padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }} className="grid-bg">
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: 32, fontSize: '0.85rem', color: 'var(--gray-400)' }}>
            <a href="/" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--orange)' }}>Service Areas</span>
          </nav>
          <div style={{ maxWidth: 700 }}>
            <span className="badge" style={{ marginBottom: 24 }}>Ottawa Areas Only</span>
            <h1 className="display-xl" style={{ marginBottom: 24, color: 'white' }}>
              WE COME TO<br />
              <span className="text-gradient glow-text">YOUR DOOR</span><br />
              <span className="orange-outline">OTTAWA</span>
            </h1>
            <p style={{ color: 'var(--gray-400)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 540, marginBottom: 36 }}>
              We arrive in under 90 minutes everywhere in Ottawa — same promise in every neighbourhood. <a href="/services" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Same-day service</a> guaranteed. <a href="/contact" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Request a callback</a>.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={PHONE_HREF} className="btn-primary">📞 Call Now: {PHONE}</a>
              <a href="#areas-grid" className="btn-secondary">Find Your Area →</a>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, var(--navy))', pointerEvents: 'none' }} />
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--navy-mid)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              { number: '37', label: 'Areas Served (Ottawa + Region)' },
              { number: '< 90', label: 'Min Arrival (All Areas)' },
              { number: '24/7', label: 'Emergency Service' },
              { number: '5.0★', label: 'Google Rating' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '32px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div className="stat-number" style={{ fontSize: '2.8rem' }}>{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS GRID */}
      <section id="areas-grid" className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">Choose Your Area</span>
            <h2 className="heading-xl reveal">
              Garage Door Repair<br />
              <em style={{ color: 'var(--orange)' }}>Near You</em>
            </h2>
            <p style={{ color: 'var(--gray-400)', marginTop: 16, maxWidth: 500, margin: '16px auto 0', lineHeight: 1.75 }}>
              Click your neighbourhood for local info and service details. We arrive in under 90 min in every area.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {areaDetails.map((area, i) => (
              <a key={area.slug} href={`/areas/${area.slug}`} className="glass-card card-shine reveal" style={{ padding: 32, textDecoration: 'none', color: 'inherit', display: 'block', position: 'relative', overflow: 'hidden' }}>
                {/* COLOR ACCENT TOP */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: area.color, borderRadius: '20px 20px 0 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <span style={{ fontSize: '2.8rem' }}>{area.emoji}</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ background: `${area.color}22`, border: `1px solid ${area.color}44`, color: area.color, fontSize: '0.72rem', fontWeight: 800, padding: '4px 10px', borderRadius: 100, letterSpacing: '0.06em', marginBottom: 4 }}>
                      ⚡ Under 90 min
                    </div>
                  </div>
                </div>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900,  marginBottom: 6, letterSpacing: '0.02em' }}>
                  {area.name}
                </h2>

                <p style={{ color: 'var(--gray-400)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 20 }}>
                  {area.highlight}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>
                    👥 Pop. {area.population}
                  </span>
                  <span style={{ color: area.color, fontWeight: 700, fontSize: '0.88rem' }}>
                    View Details →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOCAL MATTERS */}
      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="section-label" style={{ color: 'var(--orange)' }}>Why Local Matters</span>
              <h2 className="heading-xl reveal" style={{ color: 'var(--navy)', marginBottom: 24 }}>
                We Know Ottawa's<br />
                <em style={{ color: 'var(--orange)' }}>Neighbourhoods</em>
              </h2>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 20 }}>
                Ottawa isn't one city — it's dozens of distinct communities, each with its own housing stock, door brands, and challenges. Kanata's newer tech-corridor homes have different doors than Westboro's heritage properties or Manotick's estate lots.
              </p>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 32 }}>
                We arrive in under 90 minutes in every Ottawa neighbourhood — the same commitment whether you're in Kanata, Orleans, Barrhaven, or anywhere in between.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '🗺️', text: 'Local technicians in every major Ottawa zone' },
                  { icon: '🔧', text: 'Parts stocked for all neighbourhood door types' },
                  { icon: '❄️', text: 'Ottawa winter expertise — we work in -30°C' },
                  { icon: '⚡', text: 'Same-day service across all Ottawa neighbourhoods' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                    <span style={{ color: 'var(--gray-600)', fontSize: '0.95rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'All Ottawa areas', area: 'Same promise everywhere', time: 'Under 90 min', color: '#f97316' },
              ].map(item => (
                <div key={item.label} className="light-card" style={{ padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gray-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>{item.area}</div>
                  </div>
                  <div style={{ background: `${item.color}15`, border: `1px solid ${item.color}33`, color: item.color, fontWeight: 800, fontSize: '0.9rem', padding: '8px 16px', borderRadius: 100 }}>
                    ⚡ {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--orange)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900,  color: 'white', marginBottom: 12 }}>
            NOT SURE WHICH AREA? JUST CALL.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
            We serve all of Ottawa and surrounding areas. If you're not sure we cover your neighborhood, call us — we almost certainly do.
          </p>
          <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: '#ea580c', fontWeight: 800, fontSize: '1.15rem', padding: '18px 44px', borderRadius: 100, textDecoration: 'none' }}>
            📞 {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
