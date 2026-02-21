import { services, PHONE, PHONE_HREF } from '../../lib/data';
import Icon from '../components/Icons';

export const metadata = {
  title: 'Garage Door Services Ottawa | Repairs & Opener Repair | Ottawa - GDR',
  description: `Garage door services Ottawa: garage door repairs, garage door opener repair & installation. Springs, cables, new doors. Same-day, 5-star rated. Call ${PHONE}.`,
  keywords: ['garage door services Ottawa', 'garage door repairs Ottawa', 'garage door opener services Ottawa', 'garage door opener repair Ottawa'],
  alternates: { canonical: 'https://ottawagaragedoorrepair.ca/services' },
  openGraph: {
    title: 'Garage Door Services Ottawa | Repairs & Opener Repair',
    description: 'Complete garage door services and repairs in Ottawa. Opener repair, springs, cables. Same-day service.',
    url: 'https://ottawagaragedoorrepair.ca/services',
  },
};

const realJobs = [
  {
    emoji: '🔩',
    tag: 'Spring Repair',
    title: 'Emergency Spring Replacement',
    desc: 'Customer woke up to a loud bang — broken torsion spring. We arrived within 2 hours, replaced both springs with 10,000-cycle rated hardware, tested balance, and adjusted opener force settings.',
    time: '45 min',
    location: 'Ottawa',
    color: '#f97316',
  },
  {
    emoji: '🔧',
    tag: 'Cable Repair',
    title: 'Snapped Cable Emergency Fix',
    desc: 'Cable snapped causing dangerous door tilt. Replaced both lift cables, drums, and bottom brackets with commercial-grade aircraft cable rated for 2,000+ lbs.',
    time: '60 min',
    location: 'Kanata',
    color: '#3b82f6',
  },
  {
    emoji: '⚙️',
    tag: 'Opener Repair',
    title: 'Chamberlain Gear Replacement',
    desc: 'Motor humming but door not moving — classic gear failure. Replaced worn drive gear, worm gear, and grease. Tested force settings and programmed new remotes.',
    time: '75 min',
    location: 'Barrhaven',
    color: '#8b5cf6',
  },
  {
    emoji: '📋',
    tag: 'Full Tune-Up',
    title: 'Complete Door Service Package',
    desc: 'Full door tune-up including 12 nylon rollers, all hinges, track realignment, lubrication, balance testing, and safety sensor calibration for optimal performance.',
    time: '90 min',
    location: 'Orleans',
    color: '#10b981',
  },
  {
    emoji: '🚨',
    tag: 'Off Track',
    title: 'Off-Track Emergency Repair',
    desc: 'Door jumped track after vehicle impact. Safely removed door, straightened bent track section, replaced 6 damaged rollers, realigned, and tested 20+ cycles.',
    time: '90 min',
    location: 'Nepean',
    color: '#ef4444',
  },
  {
    emoji: '❄️',
    tag: 'Weather Seal',
    title: 'Winter Weather Seal Upgrade',
    desc: 'Installed new aluminum T-section retainer with heavy-duty EPDM rubber seal. Blocks cold air, water, snow, and pests. Essential for Ottawa winters down to -30°C.',
    time: '45 min',
    location: 'Stittsville',
    color: '#06b6d4',
  },
  {
    emoji: '🏗️',
    tag: 'Panel Repair',
    title: 'Damaged Panel Reinforcement',
    desc: 'Panel cracked from impact. Reinforced with aluminum strut, sealed gaps, touched up paint. Prevents water infiltration and maintains insulation R-value.',
    time: '60 min',
    location: 'Ottawa',
    color: '#f59e0b',
  },
  {
    emoji: '🚪',
    tag: 'Installation',
    title: 'R18 Insulated Door Install',
    desc: 'Complete installation: removed old door, installed new R18 steel door with polyurethane core, LiftMaster belt-drive opener, weather seals, safety sensors.',
    time: '6 hours',
    location: 'Barrhaven',
    color: '#f97316',
  },
];

const mainServices = [
  {
    icon: '🚨',
    title: 'Emergency Garage Door Repair Ottawa',
    price: '$220',
    priceNote: 'Starting from',
    desc: 'Broken spring? Door won\'t open? Cable snapped? Off-track door? We provide same-day emergency repair across all Ottawa areas. Our fully-stocked trucks carry torsion springs, extension springs, cables, rollers, hinges, and remotes to fix 85% of problems on the first visit.',
    features: [
      { title: 'Torsion Spring Replacement ($220–$350)', desc: 'Most common failure in Ottawa\'s cold climate. Both springs replaced together with 10,000-cycle rated hardware.' },
      { title: 'Cable & Drum Repair ($170–$250)', desc: 'Snapped cables cause dangerous door tilt. Replaced with aircraft-grade cable rated 2,000+ lbs.' },
      { title: 'Track Realignment & Rollers ($100–$300)', desc: 'Bent tracks cause binding and noise. We straighten tracks, replace damaged rollers with quiet nylon versions.' },
      { title: 'Panel Repair (from $170)', desc: 'We repair damaged panels only — we don\'t replace panels. Dents, cracks, and impact damage repaired to restore look and function.' },
      { title: 'Weather Seal Replacement (from $250)', desc: 'Cracked bottom seal lets in cold air and water. New EPDM rubber seal with aluminum retainer.' },
      { title: 'Safety Sensor Service ($100–$200)', desc: 'Misaligned sensors prevent closing. We realign, clean lenses, test auto-reverse function.' },
    ],
    note: 'A broken spring or cable isn\'t just inconvenient — it\'s a security risk. We prioritize emergency calls and arrive with parts in stock.',
    noteIcon: '💡',
    badge: 'All Ottawa Areas',
    emergency: true,
  },
  {
    icon: '⚙️',
    title: 'Garage Door Opener Repair & Installation',
    price: '$195',
    priceNote: 'Installation from',
    desc: 'Opener making grinding noise? Remote not responding? Motor running but door not moving? We repair all major brands including LiftMaster, Chamberlain, Genie, Craftsman, and Sears. Opener installation from $195. Opener gear replacement from $250. New openers supply & install from $650 (model-dependent).',
    features: [
      { title: 'Opener Installation (from $195)', desc: 'We install your existing or new opener. Same-day service available.' },
      { title: 'Opener Gear Replacement (from $250)', desc: 'Worn gears cause grinding. We replace drive gear, worm gear, and sprocket assembly.' },
      { title: 'New Openers Supply & Install (from $650)', desc: 'Chain-drive, belt-drive, or smart WiFi — price depends on model. All include installation and programming.' },
      { title: 'Remote Programming ($90)', desc: 'Rolling code security remotes programmed to your opener.' },
      { title: 'Safety Upgrades', desc: 'Rolling code technology prevents code grabbing. Photo-eye sensors, auto-reverse, manual release.' },
    ],
    note: 'For attached garages where bedrooms are nearby, belt-drive is worth the extra cost. Whisper-quiet, smooth, and lasts 15–20+ years.',
    noteIcon: '💡',
    badge: 'Ottawa, Kanata, Barrhaven',
    emergency: false,
  },
  {
    icon: '🏠',
    title: 'New Garage Door Installation Ottawa',
    price: '$1,800–4,500',
    priceNote: 'Depends on size & model',
    desc: 'Replace your old, drafty, or damaged door with a modern insulated model built for Ottawa\'s harsh winters. New garage doors start from $1,800–$4,500 depending on size and model. Steel doors with polyurethane foam cores provide R18 insulation — reducing heating costs by up to 20% while keeping your garage 10–15°C warmer.',
    features: [
      { title: 'Insulated Steel Doors (R18)', desc: 'Polyurethane foam core. 40% quieter operation. Prevents frost buildup. Energy savings pay back in 3–5 years.' },
      { title: 'Multiple Design Styles', desc: 'Raised panel, carriage house, flush modern, aluminum with glass. Match your home\'s architecture perfectly.' },
      { title: 'Color & Hardware Options', desc: '10+ powder-coat colors. Decorative handles, hinges, windows. Frosted, clear, or tinted glass available.' },
      { title: 'Professional Installation (4–8 hours)', desc: 'Old door removal & disposal. New tracks, springs, nylon rollers, weather seals. Balance testing included.' },
      { title: 'Opener Included Options', desc: 'New openers supply & install from $650 (model-dependent). Add belt-drive, chain-drive, or WiFi smart opener with battery backup.' },
      { title: 'Warranty Coverage', desc: '1-year installation labor. 5–10 year manufacturer warranty on door. Lifetime warranty on torsion springs.' },
    ],
    note: 'R18 doors are essential for attached garages in Ottawa. Keeps your garage warmer, reduces heating costs, prevents frost — worth every penny.',
    noteIcon: '🌨️',
    badge: 'All Ottawa Neighborhoods',
    emergency: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'transparent', padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }} className="grid-bg">
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: 32, fontSize: '0.85rem', color: 'var(--gray-400)' }}>
            <a href="/" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--orange)' }}>Services</span>
          </nav>
          <div style={{ maxWidth: 700 }}>
            <span className="badge" style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="star" size={16} style={{ color: 'var(--orange-bright)' }} /> 5.0 Rated</span>
            <h1 className="display-xl" style={{ marginBottom: 24, color: 'white' }}>
              GARAGE DOOR SERVICES<br />
              <span className="text-gradient glow-text">OTTAWA</span>
            </h1>
            <p style={{ color: 'var(--gray-400)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 560, marginBottom: 36 }}>
              <a href="/services/spring-replacement" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}>Garage door repairs</a> Ottawa & <a href="/services/opener-repair" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}>garage door opener repair</a>. Professional garage door services — springs, cables, installation. Same-day, licensed & insured. <a href="/contact" style={{ color: 'var(--orange)', fontWeight: 600 }}>Get a free quote</a>.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={PHONE_HREF} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="emergency" size={20} /> Emergency: {PHONE}</a>
              <a href="#main-services" className="btn-secondary">View All Services →</a>
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
              { number: '85%', label: 'Fixed on First Visit' },
              { number: '$220+', label: 'Spring Repair Starting' },
              { number: '< 90', label: 'Min Response Time' },
              { number: '24/7', label: 'Emergency Service' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '32px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div className="stat-number" style={{ fontSize: '2.8rem' }}>{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL JOBS GALLERY */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-label">Real Ottawa Jobs</span>
            <h2 className="heading-xl reveal">
              Recent Work Across <em style={{ color: 'var(--orange)' }}>Ottawa</em>
            </h2>
            <p style={{ color: 'var(--gray-400)', marginTop: 16, maxWidth: 520, margin: '16px auto 0', lineHeight: 1.75 }}>
              Every job completed by our licensed Ottawa technicians. Real repairs, real results.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {realJobs.map((job, i) => (
              <div key={i} className="glass-card card-shine reveal" style={{ overflow: 'hidden' }}>
                {/* CARD TOP */}
                <div style={{
                  height: 160,
                  background: `linear-gradient(135deg, ${job.color}22, ${job.color}11)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                  borderBottom: `1px solid ${job.color}33`,
                }}>
                  <span style={{ fontSize: '4rem' }}>{job.emoji}</span>
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    background: job.color,
                    color: 'white', fontSize: '0.72rem', fontWeight: 800,
                    padding: '5px 12px', borderRadius: 100,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>{job.tag}</div>
                </div>
                {/* CARD CONTENT */}
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem',  marginBottom: 10 }}>{job.title}</h3>
                  <p style={{ color: 'var(--gray-400)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: 16 }}>{job.desc}</p>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <span style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', fontWeight: 600, padding: '5px 12px', borderRadius: 100 }}>
                      ⏱️ {job.time}
                    </span>
                    <span style={{ background: `${job.color}18`, border: `1px solid ${job.color}33`, color: job.color, fontSize: '0.78rem', fontWeight: 600, padding: '5px 12px', borderRadius: 100 }}>
                      📍 {job.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ color: 'var(--orange)' }}>Why Us</span>
            <h2 className="heading-xl reveal" style={{ color: 'var(--navy)' }}>
              Why Ottawa Chooses <em>Ottawa - GDR</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { icon: '🚚', title: 'Parts on Every Truck', desc: 'We stock springs, cables, rollers, openers and more. 85% of repairs done in one visit.' },
              { icon: 'dollar', title: 'Upfront Pricing', desc: 'Full written quote before we touch anything. No hidden fees, no surprises.' },
              { icon: 'shield', title: '1-Year Warranty', desc: 'All parts and labor guaranteed. New door installations carry a 5-year warranty.' },
              { icon: 'weather', title: 'Ottawa Winter Experts', desc: 'We know how -30°C affects your door. Cold-weather failures are our specialty.' },
              { icon: 'star', title: '5.0 Rated', desc: 'Verified reviews from real Ottawa homeowners. We stand behind every job.' },
              { icon: 'phone', title: '24/7 Emergency Line', desc: 'Real person answers at 3am. Emergency technicians dispatched within 90 minutes.' },
            ].map((item, i) => (
              <div key={i} className="light-card reveal" style={{ padding: 28, textAlign: 'center' }}>
                <div style={{ marginBottom: 14, color: 'var(--orange)' }}><Icon name={item.icon} size={36} /></div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', color: 'var(--navy)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SERVICES - DETAILED */}
      <section id="main-services" className="section" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <span className="section-label">Detailed Services</span>
            <h2 className="heading-xl reveal">
              Everything We Do in <em style={{ color: 'var(--orange)' }}>Ottawa</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            {mainServices.map((service, i) => (
              <div key={i} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                {/* SERVICE HEADER */}
                <div style={{
                  background: service.emergency
                    ? 'linear-gradient(135deg, #7f1d1d, #dc2626)'
                    : i === 1
                    ? 'linear-gradient(135deg, #1e1b4b, #4338ca)'
                    : 'linear-gradient(135deg, #1a2040, #0f3060)',
                  padding: '40px 48px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: 24,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <span style={{ color: 'rgba(255,255,255,0.95)' }}><Icon name={service.emergency ? 'emergency' : 'wrench'} size={48} /></span>
                    <div>
                      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',  marginBottom: 8 }}>
                        {service.title}
                      </h2>
                      <span style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.78rem', fontWeight: 700, padding: '4px 14px', borderRadius: 100, letterSpacing: '0.08em', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <Icon name="mappin" size={14} /> {service.badge}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: '16px 28px', backdropFilter: 'blur(10px)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{service.priceNote}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900,  background: 'linear-gradient(135deg, #f97316, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{service.price}</div>
                  </div>
                </div>

                {/* SERVICE BODY */}
                <div style={{ padding: '40px 48px' }}>
                  <p style={{ color: 'var(--gray-400)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 40, maxWidth: 800 }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: 32 }}>
                    {service.features.map((feature, j) => (
                      <div key={j} style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 14, padding: '18px 20px',
                        display: 'flex', gap: 14, alignItems: 'flex-start',
                        transition: 'all 0.3s ease',
                      }}>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1.5px solid rgba(34,197,94,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2, fontSize: '0.85rem', color: '#4ade80', fontWeight: 800 }}>✓</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 4, color: 'white' }}>{feature.title}</div>
                          <div style={{ color: 'var(--gray-400)', fontSize: '0.85rem', lineHeight: 1.6 }}>{feature.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* NOTE */}
                  <div style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.2)', borderLeft: '4px solid var(--orange)', borderRadius: '0 12px 12px 0', padding: '18px 24px', marginBottom: 32 }}>
                    <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.9rem' }}>{service.noteIcon} {service.note}</span>
                  </div>

                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    <a href={PHONE_HREF} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...(service.emergency ? { background: 'linear-gradient(135deg, #dc2626, #b91c1c)' } : {}) }}>
                      <Icon name="phone" size={20} /> Call for {service.emergency ? 'Emergency' : 'Same-Day'} Service
                    </a>
                    <a href="/contact" className="btn-secondary">Get Free Quote →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE QUICK LINKS */}
      <section className="section-sm" style={{ background: 'var(--navy-mid)' }}>
        <div className="container">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem',  marginBottom: 24, textAlign: 'center' }}>
            All Individual Service Pages
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {services.map(s => (
              <a key={s.slug} href={`/services/${s.slug}`} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, padding: '14px 18px',
                textDecoration: 'none', color: 'rgba(255,255,255,0.7)',
                fontSize: '0.9rem', fontWeight: 500,
                transition: 'all 0.25s ease',
              }}>
                <span style={{ color: 'var(--orange)' }}><Icon name={s.slug} size={24} /></span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--orange), #ea580c)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-xl" style={{ marginBottom: 12 }}>
            NEED GARAGE DOOR SERVICE IN OTTAWA?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
            Same-day service available. Licensed & insured. Upfront pricing guaranteed.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: '#ea580c', fontWeight: 800, fontSize: '1.1rem', padding: '18px 40px', borderRadius: 100, textDecoration: 'none', transition: 'transform 0.2s' }}>
              <Icon name="phone" size={22} /> {PHONE}
            </a>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.15)', color: 'white', fontWeight: 700, fontSize: '1rem', padding: '17px 36px', borderRadius: 100, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.4)' }}>
              Book Online →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
