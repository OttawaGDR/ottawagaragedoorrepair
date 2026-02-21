import { PHONE, PHONE_HREF } from '../../lib/data';

export const metadata = {
  title: 'Garage Door Repair & Opener FAQ Ottawa | Ottawa - GDR',
  description: 'FAQ: garage door services Ottawa, garage door repairs, garage door opener repair costs. Pricing, springs, maintenance, same-day service.',
  keywords: ['garage door repair Ottawa FAQ', 'garage door opener repair Ottawa', 'garage door services Ottawa'],
  alternates: { canonical: 'https://ottawagaragedoorrepair.ca/faq' },
};

const faqSections = [
  {
    title: 'Costs & Pricing',
    emoji: '💰',
    color: '#f97316',
    questions: [
      { q: 'How much does garage door repair cost in Ottawa?', a: 'Spring replacement $220–350, cable repair $170–250, maintenance tune-up $150, panel repair from $170 (we don\'t replace panels). Opener installation from $195; opener gear replacement from $250; new openers supply & install from $650 (model-dependent). New garage doors from $1,800–4,500 (size and model). We always provide a full written quote before any work begins.' },
      { q: 'How much does a new garage door cost in Ottawa?', a: 'New garage doors start from $1,800–$4,500 depending on size and model. A standard insulated steel door with installation typically runs in that range. Adding a new opener is from $650 (model-dependent).' },
      { q: 'How much does a garage door opener installation cost in Ottawa?', a: 'Opener installation starts at $195. New openers supplied and installed start from $650 depending on the model (chain-drive, belt-drive, or smart WiFi). Opener gear replacement starts from $250. All prices include labour; we provide a written quote before starting.' },
      { q: 'Do you charge for estimates?', a: 'Phone estimates are always free — call us and describe the problem and we will give you a likely price range immediately. For in-home estimates on new door installations, there is no charge.' },
      { q: 'Are there any hidden fees?', a: 'Never. We provide a complete written quote before any work begins. The price we quote is the price you pay. We do not charge extra for evenings, weekends, or same-day service.' },
    ],
  },
  {
    title: 'Springs & Cables',
    emoji: '🔩',
    color: '#ef4444',
    questions: [
      { q: 'How do I know if my garage door spring is broken?', a: 'The most obvious sign is a loud bang (like a gunshot) followed by a door that will not open. Other signs include a door that opens only 6 inches then stops, visible gap in the spring coil, or a door that feels extremely heavy when lifted manually. Do not attempt to operate the door with a broken spring.' },
      { q: 'Is it safe to use my garage door with a broken spring?', a: 'No. A broken spring puts enormous strain on your opener motor and cables, and can cause the door to fall suddenly. Disconnect the opener and do not use the door manually either — the door can fall and cause serious injury or property damage.' },
      { q: 'Should I replace one spring or both?', a: 'Always replace both springs at the same time. If one broke, the other is at the same wear point and will likely break within weeks or months. Replacing both costs only slightly more than one, and you avoid paying a second service call shortly after.' },
      { q: 'How long do garage door springs last?', a: 'Standard springs are rated for 10,000 cycles (one cycle = one open + one close). For an average family using the door 4 times per day, that is about 7 years. In Ottawa\'s cold climate, springs often fail sooner due to metal contraction. We install 20,000-cycle springs on request for longer lifespan.' },
      { q: 'My cable snapped — can I still use the door?', a: 'No. A snapped cable causes the door to tilt dangerously to one side. Continuing to operate it can cause the door to fall completely off the tracks, damaging the door, opener, vehicle, or injuring someone. Call us immediately for an emergency repair.' },
    ],
  },
  {
    title: 'Openers & Remotes',
    emoji: '⚙️',
    color: '#8b5cf6',
    questions: [
      { q: 'Why is my garage door opener not working?', a: 'The most common causes are dead remote batteries, a tripped circuit breaker, misaligned safety sensors, a locked door (check the lock button on your wall panel), or a worn drive gear inside the motor unit. Try replacing batteries first, then check that the sensors are aligned (both lights should be solid, not blinking).' },
      { q: 'What is the difference between belt-drive and chain-drive openers?', a: 'Chain-drive openers use a metal chain (like a bicycle chain) and are louder but very durable and cost-effective — ideal for detached garages. Belt-drive openers use a rubber belt and are nearly silent — ideal for attached garages with living space above or beside. Belt-drive costs about $100 more but is worth it for attached garages.' },
      { q: 'How do I reset my garage door opener after a power outage?', a: 'Most modern openers reset automatically when power returns. If the door does not respond, unplug the unit for 30 seconds then plug it back in. If remotes are not working after a reset, you may need to reprogram them — check your owner\'s manual or call us for a free walkthrough.' },
      { q: 'Can I add WiFi to my existing opener?', a: 'Yes, in many cases. LiftMaster and Chamberlain offer add-on WiFi modules (myQ) that work with most of their units made after 2011. For older or other brand openers, a new WiFi-enabled opener is typically the better solution.' },
      { q: 'How do I program a new remote to my opener?', a: 'Most openers have a "Learn" button on the motor unit. Press it, then within 30 seconds press the button on your remote. The opener light will flash to confirm pairing. If this does not work, your opener may use a fixed code system requiring a different process — call us and we will walk you through it for free.' },
    ],
  },
  {
    title: 'Ottawa Winters',
    emoji: '❄️',
    color: '#3b82f6',
    questions: [
      { q: 'Why does my garage door not work in cold weather?', a: 'Ottawa winters cause several issues: springs lose tension in extreme cold and break more easily, metal contracts making tracks tight, batteries in remotes and keypads die faster, the bottom seal freezes to the ground trapping the door, and older openers struggle with the increased weight of cold steel. Most cold-weather failures are preventable with annual maintenance.' },
      { q: 'My garage door is frozen to the ground — what do I do?', a: 'Do NOT force the opener — this will strip the drive gear. Instead, use a heat gun or hair dryer along the bottom seal to melt the ice. De-icer spray also works. Once free, clear the area and apply a silicone lubricant to the seal to prevent refreezing. If the seal is cracked and causing recurring freeze, we can replace it from $250.' },
      { q: 'What insulation rating do I need for an Ottawa garage?', a: 'For an attached garage, we recommend R-16 minimum, with R-18 being ideal. This keeps the garage 10–15°C warmer, protects your vehicle, reduces heating costs, and prevents frost buildup on the door panels. For detached garages where temperature is less critical, R-12 is sufficient.' },
      { q: 'Should I lubricate my garage door in winter?', a: 'Yes — but use the right product. Use a silicone-based or lithium-based spray on hinges, rollers, and springs. Never use WD-40 on garage door components (it attracts dirt and degrades rubber). Lubricate in fall before temperatures drop. Avoid lubricating tracks — they should be clean and dry.' },
    ],
  },
  {
    title: 'Maintenance & DIY',
    emoji: '🔧',
    color: '#10b981',
    questions: [
      { q: 'How often should I service my garage door?', a: 'We recommend a professional tune-up once per year, ideally in fall before Ottawa winters hit. Between professional services, do a visual check monthly: look for fraying cables, worn rollers, rust on springs, and test the auto-reverse by placing a 2x4 flat on the ground under the door.' },
      { q: 'Can I replace a garage door spring myself?', a: 'We strongly advise against it. Torsion springs are under hundreds of pounds of tension and have caused serious injuries and fatalities when improperly handled. Extension springs are slightly less dangerous but still high-risk. This is one repair where the cost of professional service ($149–$299) is absolutely worth the safety it buys.' },
      { q: 'How do I test my garage door safety sensors?', a: 'Place a 2x4 flat on the ground in the path of the door. Press the close button. The door should stop and reverse when it contacts the board. If it does not reverse, your auto-reverse needs adjustment — call us as this is a safety hazard. Also wave your hand through the sensor beam while closing — the door should immediately reverse.' },
      { q: 'My door is making a grinding/squeaking noise — what is it?', a: 'Squeaking usually means rollers or hinges need lubrication — apply silicone spray to all metal-to-metal contact points. Grinding often indicates worn nylon rollers (replace every 5–7 years), a loose chain or belt on the opener, or a track that needs cleaning. Popping or banging sounds when operating usually indicate spring tension issues.' },
      { q: 'How do I manually open my garage door during a power outage?', a: 'Pull the red emergency release cord hanging from the trolley (the carriage that moves along the rail). This disengages the door from the opener. You can then lift the door manually. Important: only do this when the door is fully closed, never when it is partially open — the door could fall. To re-engage, simply pull the release cord toward the door and operate the opener once.' },
    ],
  },
  {
    title: 'New Doors & Installation',
    emoji: '🚪',
    color: '#f59e0b',
    questions: [
      { q: 'How long does a garage door installation take?', a: 'A standard single door replacement takes 3–4 hours. A double door (16 ft wide) takes 5–7 hours. If we are also installing a new opener, add 1–2 hours. We handle everything: removing the old door, installing the new door, springs, tracks, opener, sensors, and cleanup.' },
      { q: 'What garage door styles are available in Ottawa?', a: 'The most popular styles we install are raised panel (classic, most common), carriage house (heritage look with decorative hardware), flush modern (clean lines, popular in contemporary homes), and full-view aluminum with glass panels (premium, maximizes light). All are available in insulated versions.' },
      { q: 'How long does a garage door last?', a: 'A quality steel door with proper maintenance lasts 20–30 years. Springs last 7–15 years depending on cycle rating and climate. Openers last 10–15 years. The door panels themselves rarely need full replacement — most end-of-life situations involve worn hardware, not the door itself.' },
      { q: 'Do I need a permit to replace my garage door in Ottawa?', a: 'In most cases, no — a like-for-like replacement of an existing garage door does not require a permit in Ottawa. If you are changing the size of the opening or doing structural work, a permit may be required. We handle all necessary permits when applicable.' },
    ],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSections.flatMap(section =>
    section.questions.map(q => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #040d1a, #0a1628)', padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }} className="grid-bg">
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: 32, fontSize: '0.85rem', color: 'var(--gray-400)' }}>
            <a href="/" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--orange)' }}>FAQ</span>
          </nav>
          <div style={{ maxWidth: 680 }}>
            <span className="badge" style={{ marginBottom: 24 }}>❓ 29 Questions Answered</span>
            <h1 className="display-xl" style={{ marginBottom: 20, color: 'white' }}>
              GARAGE DOOR<br />
              <span className="text-gradient glow-text">QUESTIONS</span><br />
              <span className="orange-outline">ANSWERED</span>
            </h1>
            <p style={{ color: 'var(--gray-400)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520 }}>
              Every common question Ottawa homeowners ask us — answered honestly. No fluff, no upselling, just straight answers from our technicians.
            </p>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, var(--navy))', pointerEvents: 'none' }} />
      </section>

      {/* QUICK JUMP */}
      <section style={{ background: 'var(--navy-mid)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>Jump to:</span>
            {faqSections.map(section => (
              <a key={section.title} href={`#${section.title.toLowerCase().replace(/\s+&?\s*/g, '-')}`} style={{ background: `${section.color}15`, border: `1px solid ${section.color}33`, color: section.color, fontSize: '0.8rem', fontWeight: 700, padding: '6px 14px', borderRadius: 100, textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                {section.emoji} {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="section" style={{ background: 'var(--navy)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 72 }}>
            {faqSections.map(section => (
              <div key={section.title} id={section.title.toLowerCase().replace(/\s+&?\s*/g, '-')}>
                {/* SECTION HEADER */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, paddingBottom: 20, borderBottom: `2px solid ${section.color}33` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${section.color}18`, border: `1px solid ${section.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0 }}>
                    {section.emoji}
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900,  color: 'white', letterSpacing: '0.02em' }}>
                      {section.title}
                    </h2>
                    <div style={{ fontSize: '0.78rem', color: section.color, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>
                      {section.questions.length} questions
                    </div>
                  </div>
                </div>

                {/* QUESTIONS */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {section.questions.map((faq, i) => (
                    <div key={i} className="faq-item" style={{ borderBottomColor: 'rgba(255,255,255,0.06)' }}>
                      <button className="faq-question" style={{ paddingRight: 8 }}>
                        <span style={{ flex: 1, textAlign: 'left', paddingRight: 16 }}>{faq.q}</span>
                        <span className="faq-icon" style={{ borderColor: `${section.color}44`, color: section.color }}>+</span>
                      </button>
                      <div className="faq-answer" style={{ paddingBottom: 8 }}>{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section style={{ background: 'var(--navy-mid)', padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: 20 }}>🤔</span>
          <h2 className="heading-xl reveal" style={{ marginBottom: 16 }}>
            Still Have a<br />
            <em style={{ color: 'var(--orange)' }}>Question?</em>
          </h2>
          <p style={{ color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: 36, fontSize: '1rem' }}>
            Call us — our technicians answer questions for free over the phone. Describe your problem and we will tell you what it likely is, what it costs, and whether you need us or can fix it yourself.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} className="btn-primary" style={{ fontSize: '1.05rem' }}>📞 Call {PHONE}</a>
            <a href="/contact" className="btn-secondary">Send a Message →</a>
          </div>
        </div>
      </section>
    </>
  );
}
