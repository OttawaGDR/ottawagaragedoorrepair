import { PHONE, PHONE_HREF } from '../../../lib/data';
import Icon from '../../components/Icons';

const posts = {
  'garage-door-repair-cost-ottawa': {
    emoji: '💰',
    cat: 'Pricing',
    title: 'How Much Does Garage Door Repair Cost in Ottawa? (2026 Guide)',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    intro: "Getting your garage door repaired in Ottawa doesn't have to be a guessing game. Here's a complete breakdown of what you'll actually pay for every common repair — no surprises.",
    sections: [
      { heading: 'Spring Replacement', content: 'Torsion spring replacement is the most common garage door repair in Ottawa. Spring replacement runs $220–$350. We always recommend replacing both springs at the same time since if one broke, the other is near the end of its life — and it saves you a second service call within months.' },
      { heading: 'Opener Repair or Replacement', content: 'Opener installation starts at $195. Opener gear replacement (motor running but door not moving) starts from $250. New openers supplied and installed start from $650 depending on the model — chain drive, belt drive, or smart WiFi.' },
      { heading: 'Cable Replacement', content: 'Broken or frayed cables are a safety hazard. Cable repair in Ottawa typically costs $170–$250 for both cables including labour. Never attempt to replace cables yourself — they are under extreme tension.' },
      { heading: 'Panel Repair', content: "We don't replace panels — we repair them. Panel repair starts at $170. If your door is older or severely damaged, a new door may make more sense; new garage doors start from $1,800–$4,500 depending on size and model." },
      { heading: 'Track Adjustment or Replacement', content: 'If your door is off-track or rubbing, a track adjustment runs $95–$150. Full track replacement is $200–$350. Left unaddressed, misaligned tracks will damage your rollers and panels.' },
      { heading: 'Maintenance Tune-Up', content: 'Our full 21-point maintenance tune-up is $150. Diagnosis and written quote are always provided before any work begins.' },
    ],
  },
  'broken-spring-ottawa-what-to-do': {
    emoji: '🔩',
    cat: 'Emergency',
    title: "Broken Garage Door Spring in Ottawa? Here's Exactly What To Do",
    date: 'Jan 8, 2026',
    readTime: '6 min read',
    intro: "A loud bang from your garage, and now the door won't budge. It's almost certainly a broken torsion spring. Here's what to do — and what not to do — as an Ottawa homeowner.",
    sections: [
      { heading: 'Step 1: Do Not Try to Operate the Door', content: "A garage door with a broken spring can weigh 200–400 lbs with no counterbalance. Operating it manually or with the opener can cause serious injury or damage the opener motor. Disconnect the opener and leave the door where it is." },
      { heading: 'Step 2: Visually Confirm the Break', content: "Look at the horizontal metal bar above your door. You'll see one or two coiled springs. A broken spring will have a visible gap in the coil. If both look intact, the problem may be your cables or opener instead." },
      { heading: 'Step 3: Call a Professional', content: "Torsion springs are under hundreds of pounds of tension. DIY spring replacement is one of the leading causes of serious garage door injuries. In Ottawa, GDS can typically arrive within 90 minutes and complete the repair in under an hour." },
      { heading: 'How Much Will It Cost?', content: "Spring replacement in Ottawa runs $220–$350. We always recommend replacing both springs when one fails. The repair typically takes 45–60 minutes. We carry all spring sizes on every truck so there's no ordering delay." },
      { heading: 'Can I Use the Side Door in the Meantime?', content: "Yes — use your home's side or back entry if possible. If your car is stuck inside, call us and we can manually disengage the door safely as part of the service call." },
    ],
  },
  'garage-door-not-opening-cold-weather': {
    emoji: '❄️',
    cat: 'Winter Tips',
    title: "Garage Door Not Opening in Cold Weather? Ottawa's Top Fix Guide",
    date: 'Dec 20, 2025',
    readTime: '7 min read',
    intro: "Ottawa winters are notoriously hard on garage doors. When temperatures drop to -20°C or lower, doors that worked fine in September suddenly refuse to open. Here are the 7 most common causes and fixes.",
    sections: [
      { heading: '1. Frozen Bottom Seal', content: "The rubber seal at the bottom of your door freezes to the ground overnight. Never force the opener — you'll burn out the motor. Pour warm (not boiling) water along the seal line, wait 2 minutes, then try again. Long-term fix: apply silicone lubricant to the seal each fall." },
      { heading: '2. Thickened Lubrication', content: "Standard garage door lubricant turns to paste below -15°C, causing springs, rollers, and hinges to seize. Switch to a low-temperature silicone or lithium-based lubricant rated to -40°C. Apply every October before the cold hits." },
      { heading: '3. Metal Contraction', content: "Cold metal contracts. Tracks, springs, and panels all shrink slightly in extreme cold, which can pull components out of alignment. If your door is straining and shuddering, call a technician — forcing it risks snapping a spring." },
      { heading: '4. Dead Opener Battery', content: "Cold kills batteries fast. If your remote stops working in winter, replace the battery first — it costs $5 and solves the problem 20% of the time. Keep a spare in your car." },
      { heading: '5. Broken Cold-Weather Spring', content: "Springs are more brittle in extreme cold and are far more likely to snap in January than July. If you hear a loud bang, stop using the door immediately and call for service." },
      { heading: '6. Sensor Misalignment', content: "Snow and ice can knock the safety sensors at the base of your door out of alignment. Check that both sensor lights are solid (not blinking). If they're misaligned, gently adjust them until both show a steady light." },
      { heading: '7. Disconnected Opener', content: "If someone manually opened the door during a power outage and pulled the red emergency cord, the opener is disconnected. Reconnect it by pulling the cord toward the door until you hear a click." },
    ],
  },
  'best-insulated-garage-doors-ottawa': {
    emoji: '🏠',
    cat: 'Buying Guide',
    title: 'Best Insulated Garage Doors for Ottawa Homes (2026 Comparison)',
    date: 'Dec 5, 2025',
    readTime: '10 min read',
    intro: "With Ottawa temperature swings from -35°C to +35°C, insulation isn't a luxury — it's a necessity. Here's how to choose the right insulated door for your Ottawa home.",
    sections: [
      { heading: 'Why Insulation Matters in Ottawa', content: "An uninsulated garage door has an R-value of about R-2. Ottawa's climate requires at least R-12 to maintain a reasonable temperature in an attached garage. Better insulation means lower heating bills, less noise, and a more comfortable home." },
      { heading: 'Understanding R-Values', content: "R-value measures thermal resistance. For Ottawa: R-6 to R-9 is minimum for a detached garage. R-12 to R-16 is recommended for an attached garage. R-18 and above is ideal if you use your garage as a workshop or living space." },
      { heading: 'Top Pick: Garaga Standard+ (R-16)', content: "Garaga is a Quebec-based manufacturer that designs specifically for Canadian winters. The Standard+ line offers R-16 insulation, steel construction, and is available in dozens of finishes. Price installed: $1,800–$2,800 depending on size and style." },
      { heading: 'Best Value: Clopay Coachman (R-12)', content: "Clopay's Coachman series offers R-12 insulation with a realistic wood look at a fraction of the price of real wood. Durable, low-maintenance, and well-suited to Ottawa's freeze-thaw cycles. Price installed: $1,400–$2,200." },
      { heading: 'Premium Option: Garaga Prestige (R-18)', content: "For homeowners who use their garage year-round, the Garaga Prestige series offers R-18 insulation with a premium finish and 10-year warranty. Price installed: $2,600–$4,200." },
      { heading: 'What to Avoid', content: "Single-layer steel doors with no insulation are false economy in Ottawa — the energy costs alone will exceed the savings within 3–4 years. Also avoid polystyrene-only insulation; polyurethane-injected doors outperform them significantly." },
    ],
  },
  'how-long-do-garage-door-springs-last': {
    emoji: '⏰',
    cat: 'Maintenance',
    title: 'How Long Do Garage Door Springs Last? Ottawa Climate Impact',
    date: 'Nov 18, 2025',
    readTime: '5 min read',
    intro: "Standard torsion springs are rated for 10,000 cycles — but Ottawa's climate can cut that significantly. Here's what to expect and when to replace proactively.",
    sections: [
      { heading: 'The 10,000 Cycle Standard', content: "Most garage door springs are rated for 10,000 open/close cycles. If you use your door 4 times per day, that's roughly 7 years of life. Heavy users (6–8 times daily) may see springs fail in 3–5 years." },
      { heading: "Ottawa's Climate Accelerates Wear", content: "Extreme cold makes metal brittle. Freeze-thaw cycles stress springs repeatedly. Ottawa homeowners typically see spring life 15–20% shorter than the rated specification. A 10,000-cycle spring often lasts 8,000–8,500 cycles in our climate." },
      { heading: 'Signs Your Springs Are Near End of Life', content: "Watch for: door feels heavy when lifting manually, opener strains or slows on the way up, squeaking or grinding noises when opening, visible rust or corrosion on the spring coils, or a door that doesn't stay open halfway." },
      { heading: 'High-Cycle Upgrades', content: "GDS recommends upgrading to high-cycle springs (25,000 or 50,000 cycle rating) when replacing. The cost premium is $60–$120, but they last 2–5x longer. For Ottawa homeowners who want to avoid repeat service calls, it's the smart choice." },
      { heading: 'Replace Both Springs at Once', content: "If one spring breaks, the other is likely close behind — especially if both were installed at the same time. Replacing both together saves a second service call and labour charge within months. We always recommend it." },
    ],
  },
  'smart-garage-door-opener-ottawa': {
    emoji: '📱',
    cat: 'Smart Home',
    title: 'Best Smart Garage Door Openers for Ottawa Homes (2026 Review)',
    date: 'Nov 2, 2025',
    readTime: '9 min read',
    intro: "Smart openers let you open, close, and monitor your garage door from anywhere. But which ones hold up in Ottawa's brutal winters? Here's our honest 2026 review.",
    sections: [
      { heading: 'Top Pick: LiftMaster 87504-267', content: "LiftMaster's flagship smart opener features a built-in camera, battery backup, and MyQ app integration. Operates reliably down to -30°C. The battery backup is essential for Ottawa power outages during ice storms. Price installed: $680–$780." },
      { heading: 'Best Value: Chamberlain B4643T', content: "The Chamberlain B4643T offers MyQ smart connectivity at a more accessible price. Belt drive means quiet operation — important if you have bedrooms above the garage. Rated to -25°C. Price installed: $420–$520." },
      { heading: 'Best for Cold: LiftMaster 8500W', content: "The wall-mount 8500W mounts beside the door rather than on the ceiling, keeping the motor warmer in winter. Outstanding reliability in Ottawa conditions. Frees up ceiling space and looks sleek. Price installed: $560–$650." },
      { heading: 'What Is MyQ?', content: "MyQ is the LiftMaster/Chamberlain app platform that lets you control your opener from your phone, receive alerts when the door opens, and integrate with Google Home, Amazon Alexa, and Apple HomeKit. It works well and is genuinely useful for Ottawa homeowners who want to verify the door is closed remotely." },
      { heading: 'Cold Weather Considerations', content: "Not all smart openers are rated for Canadian winters. Check the operating temperature before buying. Avoid any opener rated only to -10°C or -15°C — Ottawa regularly hits -30°C with windchill. LiftMaster and Chamberlain products generally handle Ottawa winters well; some cheaper brands do not." },
    ],
  },
  'garage-door-maintenance-checklist-ottawa': {
    emoji: '📋',
    cat: 'Maintenance',
    title: 'The Complete Ottawa Garage Door Maintenance Checklist (Seasonal)',
    date: 'Oct 15, 2025',
    readTime: '7 min read',
    intro: "A little maintenance each season prevents expensive repairs. Here's the complete checklist Ottawa homeowners should follow to keep their garage door running through our extreme climate.",
    sections: [
      { heading: 'Fall Checklist (October)', content: "1. Lubricate all hinges, rollers, and springs with low-temp silicone spray. 2. Apply silicone to the bottom seal to prevent winter freezing. 3. Test the auto-reverse safety feature. 4. Check weather stripping on all sides — replace if cracked or compressed. 5. Tighten all visible bolts and screws. 6. Test the battery backup if your opener has one." },
      { heading: 'Winter Checklist (January)', content: "1. After major snowfalls, clear snow from the bottom of the door before operating. 2. Check that safety sensors are clear of ice and snow. 3. If the door is sluggish, add lubricant — cold thickens it. 4. Replace opener remote battery if range has decreased. 5. Inspect the bottom seal for freeze damage." },
      { heading: 'Spring Checklist (April)', content: "1. Wash the door interior and exterior. 2. Check for rust on springs, cables, and tracks — treat with rust inhibitor. 3. Inspect cables for fraying. 4. Re-lubricate all moving parts with spring lubricant. 5. Check door balance: disconnect opener, lift door halfway, it should stay in place. If it drops, springs need adjustment." },
      { heading: 'Summer Checklist (July)', content: "1. Inspect panels for dents or warping from heat. 2. Check weather stripping again — UV degrades rubber. 3. Test all safety features. 4. Listen for new noises — grinding, scraping, or popping warrant a service call before they become expensive." },
      { heading: 'Annual Professional Service', content: "Even with good DIY maintenance, we recommend a professional service call once per year. A technician will check spring tension, cable condition, and opener force settings — things that are unsafe or difficult to check yourself. Our full maintenance tune-up is $150 and covers the full system." },
    ],
  },
  'garage-door-off-track-ottawa': {
    emoji: '🚨',
    cat: 'Repairs',
    title: 'Garage Door Off Track? Ottawa Guide to Causes, Risks & Repair Costs',
    date: 'Oct 1, 2025',
    readTime: '6 min read',
    intro: "An off-track garage door is one of the most common — and most dangerous — garage door problems. Here's what causes it, whether it's safe to use, and what repair costs in Ottawa.",
    sections: [
      { heading: 'Stop Using the Door Immediately', content: "An off-track door can collapse without warning, potentially on a car, pet, or person. The moment you notice the door is off track, stop operating it completely — both manually and with the opener." },
      { heading: 'Common Causes in Ottawa', content: "1. Impact — hitting the door with a car or object is the most common cause. 2. Worn rollers — old plastic rollers crack and slip out of the track. 3. Bent track — a significant bump or overtightened hardware bends the track. 4. Cable failure — a broken cable causes one side to drop suddenly, jumping the track." },
      { heading: 'Can You Fix It Yourself?', content: "Minor roller misalignment can sometimes be corrected DIY — gently tapping the track to widen it slightly and reinserting the roller. However, if the track is bent, a cable broke, or the door is significantly misaligned, call a professional. Attempting to force the door back on track with an opener risks serious injury." },
      { heading: 'Repair Costs in Ottawa', content: "Track adjustment and roller reinsertion: $95–$150. Track replacement (one side): $180–$280. Track replacement (both sides): $320–$450. If a broken cable caused the derailment, add $170–$250 for cable repair." },
      { heading: 'Prevention', content: "Install wheel guides to protect the bottom of the door from vehicle impacts. Replace plastic rollers with steel ball-bearing rollers (upgrade costs ~$80) — they last much longer and are less prone to cracking in Ottawa's cold." },
    ],
  },
  'replace-vs-repair-garage-door-ottawa': {
    emoji: '🔄',
    cat: 'Buying Guide',
    title: "Replace vs. Repair Your Garage Door? Ottawa Homeowner's Guide",
    date: 'Sep 18, 2025',
    readTime: '8 min read',
    intro: "When a garage door problem arises, the question is always: repair it or replace it? Here's the honest framework we use to help every Ottawa homeowner make the right call.",
    sections: [
      { heading: 'When Repair Makes Sense', content: "Repair when: the door is less than 15 years old, the issue is a single component (spring, cable, opener, roller), the door is structurally sound with no major panel damage, and the total repair cost is less than 40% of a replacement door's value." },
      { heading: 'When Replacement Makes Sense', content: "Replace when: the door is 20+ years old, you've repaired it multiple times in 2–3 years, the panels are significantly dented or damaged, it has no insulation and you want to lower heating costs, or you're renovating and want to improve curb appeal." },
      { heading: 'The 50% Rule', content: "A common guideline: if the cost of repairs exceeds 50% of the cost of a new door, replacement is usually the better long-term investment. New garage doors in Ottawa start from $1,800–$4,500 depending on size and model. If you're looking at $800+ in repairs on an old door, replacement math often wins." },
      { heading: 'Insulation ROI in Ottawa', content: "Upgrading from an uninsulated door to an R-16 insulated door in Ottawa typically saves $150–$300/year in heating costs for an attached garage. That's a 6–10 year payback on a new door — a reasonable investment if you plan to stay in the home." },
      { heading: 'Our Honest Approach', content: "Our technicians are trained to always recommend the most cost-effective solution for the homeowner — not the option with the highest invoice. If a spring replacement ($220–350) will give you 5 more good years, we'll tell you that rather than push a full replacement. We believe that honest advice is what builds long-term trust." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Ottawa - GDR`,
    description: post.intro?.slice(0, 160) || `Garage door repair and opener advice for Ottawa. ${post.title}`,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: 24 }}>🔍</div>
          <h1 style={{ fontFamily: 'var(--font-display)',  fontWeight: 900, fontSize: '3rem', color: 'white', marginBottom: 16 }}>POST NOT FOUND</h1>
          <p style={{ color: 'var(--gray-400)', marginBottom: 32 }}>This article doesn't exist or may have moved.</p>
          <a href="/blog" className="btn-primary">← Back to Blog</a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section style={{ padding: '60px 0 40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <nav style={{ marginBottom: 24, fontSize: '0.85rem', color: 'var(--gray-400)' }}>
            <a href="/" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <a href="/blog" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Blog</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--orange)' }}>{post.cat}</span>
          </nav>
          <span className="service-tag" style={{ marginBottom: 20, display: 'inline-block' }}>{post.cat}</span>
          <h1 style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'white', lineHeight: 1.3, marginBottom: 20 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: 20, color: 'var(--gray-400)', fontSize: '0.85rem', marginBottom: 32 }}>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
            <span>✍️ Ottawa - GDR Ottawa</span>
          </div>
          <div style={{ fontSize: '4rem', marginBottom: 8 }}>{post.emoji}</div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 64, alignItems: 'start', maxWidth: 1100, margin: '0 auto' }}>
          <article>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, marginBottom: 48,  borderLeft: '4px solid var(--orange)', paddingLeft: 24 }}>
              {post.intro}
            </p>
            {post.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: 44 }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'white', marginBottom: 16, lineHeight: 1.3, fontWeight: 700 }}>{section.heading}</h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, fontSize: '0.97rem' }}>{section.content}</p>
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="glass-card" style={{ padding: 36, marginTop: 48, textAlign: 'center' }}>
              <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}><Icon name="wrench" size={48} style={{ color: 'var(--orange)' }} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)',  fontWeight: 900, fontSize: '1.8rem', color: 'white', marginBottom: 12 }}>NEED A GARAGE DOOR REPAIR IN OTTAWA?</h3>
              <p style={{ color: 'var(--gray-400)', marginBottom: 28, lineHeight: 1.75 }}>Same-day service across all Ottawa. Free diagnosis. Upfront pricing. 5.0 ★ Google rating.</p>
              <a href={PHONE_HREF} className="btn-primary" style={{ fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={20} /> Call {PHONE}</a>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside style={{ position: 'sticky', top: 100 }}>
            <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
              <div style={{ fontWeight: 800, color: 'white', marginBottom: 6, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="emergency" size={22} style={{ color: 'var(--orange)' }} /> Need Help Now?</div>
              <p style={{ color: 'var(--gray-400)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 20 }}>We arrive in 90 minutes or less across all Ottawa. Same-day service 7 days a week.</p>
              <a href={PHONE_HREF} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="phone" size={20} /> {PHONE}</a>
            </div>
            <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
              <div style={{ fontWeight: 800, color: 'white', marginBottom: 16, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Quick Pricing</div>
              {[['Spring Replacement', '$220–350'], ['Opener Install', '$195+'], ['New Openers', 'From $650'], ['Cable Repair', '$170–250'], ['Panel Repair', 'From $170'], ['Maintenance', '$150'], ['Opener Gear', 'From $250']].map(([service, price]) => (
                <div key={service} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--gray-400)' }}>{service}</span>
                  <span style={{ color: 'var(--orange)', fontWeight: 700 }}>{price}</span>
                </div>
              ))}
            </div>
            <div className="glass-card" style={{ padding: 28 }}>
              <div style={{ fontWeight: 800, color: 'white', marginBottom: 16, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>More Articles</div>
              {Object.entries(posts).filter(([s]) => s !== slug).slice(0, 4).map(([s, p]) => (
                <a key={s} href={`/blog/${s}`} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14, textDecoration: 'none' }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{p.emoji}</span>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.45 }}>{p.title}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}