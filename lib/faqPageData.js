/** Standalone FAQ hub — 33 questions for /faq */

export const FAQ_TOTAL = 33;

export const faqCategories = [
  {
    id: 'pricing',
    label: 'Pricing & Estimates',
    shortLabel: 'Pricing',
    questions: [
      { id: 'p1', q: 'How much does garage door repair cost in Ottawa?', a: 'Spring replacement $220–350, cable repair $170–250, maintenance tune-up $150, panel repair from $170. Opener installation from $195; gear replacement from $250; new openers from $650 (model-dependent). New doors $1,800–4,500. You approve the full price in writing before work begins.' },
      { id: 'p2', q: 'How much does a new garage door cost in Ottawa?', a: 'New garage doors start from $1,800–$4,500 depending on size, insulation, and style. A standard insulated steel door with installation typically falls in that range. Adding a new opener starts from $650 depending on the model.' },
      { id: 'p3', q: 'How much does garage door opener installation cost?', a: 'Opener installation starts at $195. New openers supplied and installed start from $650 (chain-drive, belt-drive, or smart WiFi). Opener gear replacement starts from $250. Labour is included; you approve the total before we start.' },
      { id: 'p4', q: 'Do you charge for estimates?', a: 'Phone estimates are always free — describe the problem and we will give you a realistic range right away. In-home estimates for new door installations are also free with no obligation.' },
      { id: 'p5', q: 'Are there any hidden fees?', a: 'No. You approve the full total in writing before work begins. Evenings, weekends, and same-day dispatch are never surcharged.' },
    ],
  },
  {
    id: 'springs',
    label: 'Springs & Cables',
    shortLabel: 'Springs',
    questions: [
      { id: 's1', q: 'How do I know if my garage door spring is broken?', a: 'A loud bang followed by a door that will not open is the classic sign. Other signs: the door rises only a few inches then stops, a visible gap in the spring coil, or the door feels extremely heavy manually. Do not keep using the opener.' },
      { id: 's2', q: 'Is it safe to use my garage door with a broken spring?', a: 'No. A broken spring overloads the opener and cables and the door can fall without warning. Disconnect the opener and do not lift the door manually — call for a professional repair.' },
      { id: 's3', q: 'Should I replace one spring or both?', a: 'Replace both at the same time. When one breaks, the other is near end of life. Replacing both costs slightly more than one and avoids a second service call within weeks.' },
      { id: 's4', q: 'How long do garage door springs last?', a: 'Standard springs are rated for 10,000 cycles (one open + one close). At four cycles per day that is roughly seven years. Ottawa cold can shorten lifespan; we offer 20,000-cycle upgrades on request.' },
      { id: 's5', q: 'My cable snapped — can I still use the door?', a: 'No. A snapped cable makes the door tilt dangerously. Continuing to run it can pull the door off the tracks. Call us for an emergency visit — we replace both cables for balanced, safe operation.' },
    ],
  },
  {
    id: 'openers',
    label: 'Openers & Remotes',
    shortLabel: 'Openers',
    questions: [
      { id: 'o1', q: 'Why is my garage door opener not working?', a: 'Common causes: dead remote batteries, tripped breaker, misaligned safety sensors, engaged wall-door lock, or worn drive gears. Replace batteries first, then check sensors show solid lights (not blinking).' },
      { id: 'o2', q: 'What is the difference between belt-drive and chain-drive openers?', a: 'Chain-drive uses a metal chain — durable and economical, louder, best for detached garages. Belt-drive uses a rubber belt — near-silent, ideal when bedrooms are beside or above the garage. Belt-drive costs more but is worth it when noise matters.' },
      { id: 'o3', q: 'How do I reset my opener after a power outage?', a: 'Most units recover automatically when power returns. If not, unplug the motor for 30 seconds and plug back in. If remotes fail after that, they may need reprogramming — call us for a free walkthrough.' },
      { id: 'o4', q: 'Can I add WiFi to my existing opener?', a: 'Often yes. LiftMaster and Chamberlain myQ modules fit many units made after 2011. Older or off-brand openers may need a WiFi-ready replacement for reliable app control.' },
      { id: 'o5', q: 'How do I program a new remote to my opener?', a: 'Press the Learn button on the motor, then press your remote within 30 seconds. The light flashes to confirm. Fixed-code systems use a different process — we can guide you by phone at no charge.' },
    ],
  },
  {
    id: 'winter',
    label: 'Ottawa Winters',
    shortLabel: 'Winter',
    questions: [
      { id: 'w1', q: 'Why does my garage door not work in cold weather?', a: 'Cold affects springs, track fit, remote batteries, frozen bottom seals, and older openers struggling with stiff hardware. Many winter failures are preventable with a fall tune-up and proper lubrication.' },
      { id: 'w2', q: 'My garage door is frozen to the ground — what do I do?', a: 'Do not force the opener — that can strip gears. Use a heat gun or hair dryer along the bottom seal, or de-icer spray. Once free, clear ice and apply silicone to the seal. Cracked seals that refreeze should be replaced from $250.' },
      { id: 'w3', q: 'What insulation rating do I need for an Ottawa garage?', a: 'We recommend R18 for Ottawa garages. It keeps the space warmer, cuts heating loss, reduces frost on panels, and protects vehicles. R18 suits attached and detached garages.' },
      { id: 'w4', q: 'Should I lubricate my garage door in winter?', a: 'Yes — use silicone or lithium spray on hinges, rollers, and springs. Avoid WD-40 on door hardware. Lubricate in fall before deep cold. Keep tracks clean and dry rather than oily.' },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance & Safety',
    shortLabel: 'Maintenance',
    questions: [
      { id: 'm1', q: 'How often should I service my garage door?', a: 'A professional tune-up once per year — ideally in fall before Ottawa winters. Monthly, visually check cables, rollers, and springs; test auto-reverse with a 2x4 flat under the door path.' },
      { id: 'm2', q: 'Can I replace a garage door spring myself?', a: 'We strongly advise against it. Torsion springs store extreme energy and cause serious injuries when mishandled. Professional spring work ($220–350) is the safe choice.' },
      { id: 'm3', q: 'How do I test my garage door safety sensors?', a: 'Place a 2x4 flat where the door closes — it should reverse on contact. Wave a hand through the sensor beam while closing — the door should reverse immediately. If not, call us; auto-reverse failures are hazardous.' },
      { id: 'm4', q: 'My door is grinding or squeaking — what is it?', a: 'Squeaks often need silicone on hinges and rollers. Grinding may mean worn nylon rollers, a loose opener chain, or dirty tracks. Popping when the door moves usually points to spring balance issues.' },
      { id: 'm5', q: 'How do I manually open the door during a power outage?', a: 'Pull the red emergency release cord on the trolley to disengage the opener, then lift manually. Only do this when the door is fully closed — never when partially open. Re-engage by pulling the cord toward the door and running the opener once.' },
    ],
  },
  {
    id: 'installation',
    label: 'New Doors & Install',
    shortLabel: 'Install',
    questions: [
      { id: 'i1', q: 'How long does a garage door installation take?', a: 'A single door replacement usually takes 3–4 hours. A double 16 ft door takes 5–7 hours. Adding an opener adds 1–2 hours. We remove the old door, install hardware, balance, test, and clean up.' },
      { id: 'i2', q: 'What garage door styles are available in Ottawa?', a: 'Popular options: raised panel (most common), carriage house (decorative hardware), flush modern, and full-view aluminum with glass. All are available insulated for Ottawa winters.' },
      { id: 'i3', q: 'How long does a garage door last?', a: 'Quality steel doors last 20–30 years with maintenance. Springs last 7–15 years depending on cycles and climate. Openers typically last 10–15 years. Hardware usually wears out before panels.' },
      { id: 'i4', q: 'Do I need a permit to replace my garage door in Ottawa?', a: 'Like-for-like replacements usually need no permit. Structural opening changes may require one. We advise during your estimate and handle permits when they apply.' },
    ],
  },
  {
    id: 'service',
    label: 'Booking & Service',
    shortLabel: 'Service',
    questions: [
      { id: 'b1', q: 'How do I book garage door service with Garage Door Repair Ottawa?', a: 'Call (613) 617-4238 anytime, use our online booking page, or request a callback through the contact form. We confirm timing and a price range before dispatch.' },
      { id: 'b2', q: 'What are your regular business hours?', a: 'Scheduled service runs 9 AM–9 PM, seven days a week, across Ottawa and surrounding communities. Emergency line is available 24/7 for urgent stuck or off-track situations.' },
      { id: 'b3', q: 'How fast can you respond to an emergency?', a: 'We target under 90 minutes arrival everywhere in Ottawa — Kanata, Barrhaven, Orleans, Nepean, Stittsville, and all listed service areas.' },
      { id: 'b4', q: 'Are you licensed and insured?', a: 'Yes. We are licensed in Ontario and carry $2 million liability coverage on every job. Credentials are available on request before we arrive.' },
      { id: 'b5', q: 'What if something is not right after the repair?', a: 'Contact us right away. Labour is guaranteed for at least 90 days and parts carry a minimum one-year warranty. If an adjustment is needed, we return and make it right.' },
    ],
  },
];

export function getAllFaqItems() {
  return faqCategories.flatMap((cat) =>
    cat.questions.map((item) => ({ ...item, categoryId: cat.id, categoryLabel: cat.label }))
  );
}
