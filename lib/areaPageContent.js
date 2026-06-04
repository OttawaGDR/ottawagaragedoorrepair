/**
 * Unique copy per service area — used on /areas/[suburb] for SEO differentiation.
 * Each entry should read as genuinely local, not a find-replace of another city.
 */

const DEFAULT_ISSUES = [
  'Spring fatigue after Ottawa freeze–thaw cycles',
  'Opener sensors knocked out of alignment',
  'Worn rollers and cables from daily use',
];

function entry({
  intro,
  localContext,
  localContextExtra,
  issues,
  areaFaq,
  areaFaqs,
  metaDescription,
  neighborhoods,
  doorProfile,
  installNote,
  highlights,
}) {
  const faqs = areaFaqs || (areaFaq ? [areaFaq] : []);
  return {
    intro,
    localContext,
    localContextExtra,
    issues: issues || DEFAULT_ISSUES,
    areaFaq: faqs[0] || areaFaq,
    areaFaqs: faqs,
    metaDescription,
    neighborhoods,
    doorProfile,
    installNote,
    highlights,
    isPrimary: Boolean(neighborhoods?.length),
  };
}

const CONTENT = {
  kanata: entry({
    metaDescription:
      'Garage door repair in Kanata — springs, openers, and new installs from Kanata North to Bridlewood. Same-day service, local techs, under 90 min.',
    intro: `Kanata is one of Ottawa’s busiest garage door markets — wide double-car doors off the 417, wind off the Greenbelt, and homes that cycle the door four or more times a day. We treat Kanata as a primary route, not an afterthought: trucks head west with springs, cables, and opener parts sized for the doors actually installed in Morgan’s Grant, Beaverbrook, and Kanata Lakes.`,
    localContext: `Most Kanata calls are spring fatigue, opener strain on insulated upgrades, or weather seals that no longer block northwest wind. We measure door weight before quoting springs — many 1990s double doors still run original 10k-cycle hardware that should have been upgraded years ago.`,
    localContextExtra: `If you work near the tech park or commute on Terry Fox or March Road, we book early-morning and evening windows when you need the door working before you leave. For new steel or insulated installs, we remove the old door, align tracks to your driveway pitch, and program remotes before we leave — common in Kanata North infills and Kanata Lakes renovations.`,
    neighborhoods: [
      'Kanata North & South',
      'Kanata Lakes',
      'Morgan’s Grant',
      'Bridlewood',
      'Beaverbrook',
      'Glen Cairn',
      'Katimavik',
      'Marchwood',
      'Emerald Meadows',
    ],
    doorProfile:
      'Kanata homes often have 16–18 ft double sectional doors — steel raised-panel or insulated steel from the subdivision boom through today’s R-16 and R-18 upgrades. We see LiftMaster and Chamberlain openers on ceilings with standard headroom; some townhomes near the village need low-headroom track kits.',
    installNote:
      'New door installs in Kanata usually mean better insulation against Greenbelt wind and quieter belt-drive openers where bedrooms sit above the garage. We supply and install; you approve the full price in writing before work starts.',
    issues: [
      'Torsion springs on wide double doors failing after 8–12 years of heavy Kanata commuter use',
      'North-facing driveways: frozen bottom seals and safety sensors after Ottawa thaw cycles',
      'Insulated door upgrades without respringing — opener hums but struggles mid-lift',
      'Worn rollers on long tracks in two-storey homes backing onto greenspace',
      'Weatherstrip gaps letting snow melt into the garage along March Road corridors',
    ],
    highlights: [
      { icon: '⚡', title: 'West-end priority routing', desc: 'Kanata and Stittsville are scheduled on dedicated west routes — not squeezed behind downtown jobs.' },
      { icon: '🔧', title: 'Wide-door spring stock', desc: 'Common torsion sizes for Kanata double doors ride on the truck for same-day spring replacement.' },
      { icon: '🏠', title: 'New installs in Kanata', desc: 'Insulated steel and carriage-style doors installed with disposal of your old door and full safety testing.' },
      { icon: '💰', title: 'Written quote first', desc: 'You see the full repair or install price before we start — no surprise add-ons.' },
    ],
    areaFaqs: [
      {
        q: 'Do you cover Kanata North and Kanata South the same day?',
        a: 'Yes. We serve all Kanata communities with the same under-90-minute arrival target. Tell us your cross street near Terry Fox, March Road, or the 417 — we confirm timing when you call.',
      },
      {
        q: 'Why do Kanata garage door springs break so often?',
        a: 'Wide double doors, cold winters, and high daily cycles wear springs faster than single-car setups. We replace both springs together with rated hardware matched to your door weight.',
      },
      {
        q: 'Can you install a new insulated door in Kanata?',
        a: 'Yes — steel insulated doors, weather seals, and openers. We’ve completed installs across Kanata Lakes, Bridlewood, and Kanata North; free assessment and written quote first.',
      },
    ],
  }),
  barrhaven: entry({
    metaDescription:
      'Garage door repair in Barrhaven — builder-grade fixes, new installs in Longwood & Chapman Mills, springs and openers. Same-day, under 90 min.',
    intro: `Barrhaven grew faster than almost anywhere in Ottawa — townhomes near Fallowfield, detached homes in Longwood and Half Moon Bay, and new phases still going in around Chapman Mills. Builder-grade springs and openers often fail in the first 7–10 years; we fix what you have or install upgraded doors that match how your family actually uses the garage.`,
    localContext: `Barrhaven driveways are rarely flat — slight grades toward storm drains change how the bottom seal sits and how the door loads the tracks. We level and adjust tracks instead of only swapping parts. Noise matters here too: many plans have the primary bedroom above the garage, so belt-drive upgrades and roller replacements are common requests.`,
    localContextExtra: `We work daily in Stonebridge, Barrhaven on the Green, and streets feeding Strandherd and Greenbank. For new construction warranty headaches, we can service doors that never balanced correctly from move-in day — sensors, spring tension, and opener force settings checked as one system.`,
    neighborhoods: [
      'Longwood',
      'Chapman Mills',
      'Half Moon Bay',
      'Stonebridge',
      'Barrhaven on the Green',
      'Knollsbrook',
      'Cedarhill',
      'Harold Place',
      'Rideau Glen',
    ],
    doorProfile:
      'Barrhaven inventory is dominated by newer sectional steel doors — often lighter gauge builder packages with chain-drive openers. Decorative hardware and side windows add weight; we respring when owners upgrade facades. Townhomes near Fallowfield may use shorter 8–9 ft doors with standard 13-foot ceilings.',
    installNote:
      'Families in Barrhaven often upgrade to quieter belt-drive openers and better bottom seals before winter. Full door replacement makes sense when the panel is damaged or the door is still uninsulated on a heated garage — we’ll say when repair is the smarter spend.',
    issues: [
      'Safety sensors knocked out of alignment after landscaping, snowbanks, or curb contact',
      'Premature spring failure on stock double doors with added decorative weight',
      'Chain-drive noise and vibration in bedrooms directly above the garage',
      'Garage doors that worked at possession but drift out of balance within the first year',
      'Weather seals that shrink and gap on sloped driveways in newer phases',
    ],
    highlights: [
      { icon: '🏘️', title: 'New-build specialists', desc: 'We know Barrhaven builder door and opener models — parts are stocked or sourced same-day.' },
      { icon: '🔇', title: 'Quiet opener upgrades', desc: 'Belt-drive swaps and roller upgrades for homes with bedrooms over the garage.' },
      { icon: '🚪', title: 'Full door replacement', desc: 'New insulated doors installed in Longwood, Chapman Mills, and Half Moon Bay — old door removed.' },
      { icon: '⚡', title: 'South Ottawa routing', desc: 'Barrhaven and Riverside South share south-end dispatch — realistic arrival windows when you book.' },
    ],
    areaFaqs: [
      {
        q: 'Can you fix builder-grade garage doors in Barrhaven?',
        a: 'Yes. We balance, adjust springs, align sensors, and replace worn hardware on stock doors daily. If the door was never right since move-in, we treat it as a setup issue — not just a parts swap.',
      },
      {
        q: 'Do you serve Longwood and Chapman Mills?',
        a: 'Yes — all Barrhaven communities including Stonebridge, Half Moon Bay, and streets off Strandherd and Greenbank.',
      },
      {
        q: 'How fast can you get to Barrhaven?',
        a: 'We target under 90 minutes across Barrhaven. Emergency spring and off-track calls are prioritized; you approve the price before work begins.',
      },
    ],
  }),
  nepean: entry({
    metaDescription:
      'Garage door repair in Nepean — Bells Corners, Centrepointe, Merivale, springs, openers, panel repair. Older homes & new infills, same-day.',
    intro: `Nepean is not one neighbourhood — it’s Bells Corners bungalows, Centrepointe split-levels, Merivale corridor townhomes, and infills along Baseline. A spring that fits a 1978 single-car door is wrong for a new double door on the same block. We stock both worlds: low-headroom hardware, panel repair on wood doors, and modern insulated installs on Nepean’s newer pockets.`,
    localContext: `Calls from Nepean often involve original single torsion springs on 40-year-old doors, or Merivale-area townhomes with tight laneways where track alignment drifts from daily use. We repair panels when possible — we don’t push full replacements unless safety or structure requires it.`,
    localContextExtra: `Townhomes and tight laneways off Merivale and Baseline need careful track alignment and sensor setup — not a one-size-fits-all spring chart. For homeowners near Bells Corners and Centrepointe, we’re used to sloped driveways toward the Greenbelt and seals that fail after ice buildup.`,
    neighborhoods: [
      'Bells Corners',
      'Centrepointe',
      'Merivale corridor',
      'College Square',
      'City View',
      'Parkwood Hills',
      'Trend Village',
      'Leslie Park',
      'Calahan',
    ],
    doorProfile:
      'Nepean’s housing stock spans 1970s wood and steel single-car doors, 1980s–90s split-level doubles, and modern insulated steel on infill streets. Headroom varies: some garages need side-mount or jackshaft openers where the ceiling is low or the track is tight. We measure before recommending hardware.',
    installNote:
      'Double-door replacements are common where two single bays were combined, or where an uninsulated door sits on a heated garage. We install, seal, and balance — and we’ll tell you honestly if panel repair on an older Nepean door is enough for a few more years.',
    issues: [
      'Single springs on original Nepean doors that should be upgraded to a matched pair',
      'Low headroom: ceiling openers that need side-mount or track conversion',
      'Panel dents and rust on older wood or steel — repair vs replace assessed on site',
      'Sloped driveways near the Greenbelt: bottom seal and threshold failures',
      'Townhome laneways: cables and tracks affected by tight parking and bumps',
    ],
    highlights: [
      { icon: '🏡', title: 'Older-home expertise', desc: 'Split-levels, bungalows, and low-headroom garages — we carry hardware older Nepean doors need.' },
      { icon: '🏗️', title: 'Panel repair first', desc: 'We repair damaged panels when safe and practical — not automatic full-door sales.' },
      { icon: '🏘️', title: 'Townhome & laneway service', desc: 'Tight Nepean laneways — sensor alignment, track bumps, and balance work on row garages.' },
      { icon: '⚡', title: 'Central-west dispatch', desc: 'Nepean shares routes with Kanata and Barrhaven edges — clear ETA when you call.' },
    ],
    areaFaqs: [
      {
        q: 'Do you work in Bells Corners and Centrepointe?',
        a: 'Yes — full Nepean coverage including Bells Corners, Centrepointe, Merivale corridor, College Square, and Parkwood Hills.',
      },
      {
        q: 'Can you fix low-headroom garages in Nepean?',
        a: 'Often yes. We install low-profile tracks, side-mount openers, or jackshaft units where a standard rail will not fit — after measuring on site.',
      },
      {
        q: 'Do you replace both garage doors on a double-wide Nepean home?',
        a: 'Yes. We install double sectional doors, balance both sides, and upgrade springs and openers to match the new weight.',
      },
    ],
  }),
  orleans: entry({
    intro: `Orleans runs from Chapel Hill and Fallingbrook to older east-end streets near the river. Ice damming and wet snow are hard on bottom seals; east-end winds also stress older single-spring setups.`,
    localContext: `We plan routes from Gloucester and east Ottawa so you’re not waiting behind downtown jobs. Whether you’re in a 1980s bungalow or a newer Cardinal Creek build, we match springs and cables to the door weight — especially on wide insulated doors popular here.`,
    issues: [
      'Bottom seal and threshold rot from snow sitting against the door',
      'Cables fraying on heavy insulated panels after years of cold cycling',
      'Remotes and keypads failing after humidity swings in spring and fall',
    ],
    areaFaq: {
      q: 'Do you serve Chapel Hill and Fallingbrook?',
      a: 'Yes — full Orleans coverage including Chapel Hill, Fallingbrook, Avalon, and Cumberland-adjacent areas.',
    },
  }),
  stittsville: entry({
    metaDescription:
      'Garage door repair in Stittsville — village core & new subdivisions, springs, openers, new installs. West Ottawa same-day, under 90 min.',
    intro: `Stittsville sits between village-era homes near Abbott Street and fast-growing subdivisions west toward Fernbank and Bryanston. Morning and evening commutes on the 417 mean garage doors here often see more cycles than the national average — rollers, springs, and hinges wear on a timeline that doesn’t match the home’s age on paper.`,
    localContext: `We schedule Stittsville with Kanata on west-end routes so you’re not waiting behind central Ottawa jobs. Village properties may have shorter doors, older wood panels, or detached garages set back on long driveways — we confirm vehicle access and parts before we roll.`,
    localContextExtra: `Rural-lot homes past the village often face open exposure: wind loads flex tracks and stress bottom seals. We reinforce where needed and install heavier-rated springs on wide doors facing farm fields. New builds get the same written-quote process: door, seals, opener, and safety reverse tested before we leave.`,
    neighborhoods: [
      'Stittsville village core',
      'Crossing Bridge',
      'Bryanston',
      'Fernbank',
      'Jackson Trails',
      'Timbermere',
      'West Ridge',
      'Canadian Oaks',
      'Carleton Place corridor',
    ],
    doorProfile:
      'Stittsville mixes 1980s–90s village bungalows with 2000s–2020s subdivision steel doors — single and double wide. Some rural properties use taller or wider openings; we measure cable length and spring size on site. Builder packages in newer phases resemble Barrhaven and Kanata stock hardware.',
    installNote:
      'Homeowners upgrading from uninsulated village doors to insulated steel often do it before winter — we handle removal, track alignment to sloped pads, and opener sizing in one project when possible.',
    issues: [
      'High-cycle wear on rollers and hinges from twice-daily commuter use',
      'Wind exposure on doors facing open fields — track flex and seal tearing',
      'Older village wood doors: panel damage, jamb rot, and outdated spring systems',
      'Long driveways: we confirm access for service trucks on rural Stittsville lots',
      'New subdivision doors out of balance within the first few years after possession',
    ],
    highlights: [
      { icon: '🌾', title: 'Village + rural lots', desc: 'From Abbott Street village homes to west-end acreages — we confirm access and parts upfront.' },
      { icon: '🛣️', title: 'West-end routes', desc: 'Stittsville paired with Kanata dispatch for realistic ETAs on Strandherd and Hazeldean corridors.' },
      { icon: '🚪', title: 'New door installs', desc: 'Insulated sectional installs on new builds and replacements on older village garages.' },
      { icon: '❄️', title: 'Winter-ready seals', desc: 'Bottom seal and weatherstrip upgrades before Ottawa freeze–thaw season.' },
    ],
    areaFaqs: [
      {
        q: 'How far west of Stittsville do you travel?',
        a: 'We regularly serve Stittsville village, west subdivisions, and toward Carleton Place and rural west Ottawa. Call with your address — we confirm same-day or next available slot.',
      },
      {
        q: 'Do you repair older garage doors in the village core?',
        a: 'Yes — panel repair, spring replacement, track work, and openers on older wood and steel doors. We recommend replacement only when repair is no longer safe or cost-effective.',
      },
      {
        q: 'Can you install a new door on a Stittsville new build?',
        a: 'Yes. We install sectional steel doors, seals, and openers — common on Jackson Trails, Fernbank, and Bryanston phases. Written quote before work starts.',
      },
    ],
  }),
  gloucester: entry({
    metaDescription:
      'Garage door repair in Gloucester — townhomes, Blair, Hunt Club edges, new installs & springs. East Ottawa same-day, under 90 min.',
    intro: `Gloucester is east Ottawa’s workhorse corridor — townhome rows near Blair, single-family streets toward Blackburn, and infill near the Queensway. Short driveways and shared walls mean a noisy or unbalanced door is noticed fast. We fix the whole system: springs, cables, tracks, and opener force — not just the symptom you hear from the bedroom above the garage.`,
    localContext: `East-end routing keeps Gloucester jobs off the back of cross-town traffic. We service townhomes with party-wall garages, detached singles near Orleans borders, and infill streets along Ogilvie and Montreal Road — residential doors only.`,
    localContextExtra: `Brick and vinyl homes in Gloucester often get raised-panel steel replacements — we’ve installed doors on brick façades where sealing the header and jambs matters as much as the panel choice. For emergency off-track calls, we carry cables and rollers to finish most jobs in one trip.`,
    neighborhoods: [
      'Blair',
      'Blackburn Hamlet edges',
      'Hunt Club borders',
      'Beacon Hill south',
      'Cyrville',
      'Carson Grove',
      'Pineglen',
      'Sheffield Glen',
      'Ogilvie corridor',
    ],
    doorProfile:
      'Gloucester housing includes 1970s–90s bungalows, townhome garages with standard 8x7 or 9x7 doors, and newer insulated doubles on infill streets. Townhomes often need belt-drive openers for noise; older singles may still run single springs that should be paired.',
    installNote:
      'New white or insulated steel doors on brick and siding homes are common — we align tracks, install bottom seals for east-end snow, and dispose of the old door. Townhome owners often upgrade openers first; we’ll advise if the door itself is the real issue.',
    issues: [
      'Townhome garages: opener noise and vibration through party walls',
      'Torsion tubes and end bearings shifting on high-cycle family doors',
      'Tight parking: sensor misalignment and minor track bumps from vehicles',
      'Bottom seal failure where snow sits against the door on short driveways',
      'Older single springs on Gloucester bungalows due for balanced replacement',
    ],
    highlights: [
      { icon: '🏘️', title: 'Townhome-friendly', desc: 'Quiet belt-drive upgrades and balance work where garages share walls.' },
      { icon: '🧱', title: 'Brick-home installs', desc: 'New sectional doors fitted to brick and vinyl façades — sealing and alignment included.' },
      { icon: '🚨', title: 'East-end emergencies', desc: 'Off-track and spring calls prioritized on Gloucester routes — under 90 min target.' },
      { icon: '🔇', title: 'Quiet opener upgrades', desc: 'Belt-drive swaps and roller upgrades where bedrooms sit above the garage.' },
    ],
    areaFaqs: [
      {
        q: 'Do you service townhome garages in Gloucester?',
        a: 'Yes. We work in party-wall and row configurations daily — balance, quieter openers, sensors, and springs without pushing unnecessary replacements.',
      },
      {
        q: 'Do you install new garage doors in Gloucester?',
        a: 'Yes — steel sectional installs on brick and siding homes, weather seals, and openers. We remove your old door and test safety reverse before leaving.',
      },
      {
        q: 'How is Gloucester different from Orleans for scheduling?',
        a: 'Gloucester and east Ottawa share dedicated routes from our Orleans/Gloucester corridor — you get a realistic ETA, not a downtown-first delay.',
      },
    ],
  }),
  manotick: entry({
    intro: `Manotick features estate lots, village charm, and long driveways. Oversized doors and custom woodwork are common — standard spring charts don’t always apply, and we measure before swapping hardware.`,
    localContext: `We’re careful with heritage-style curb appeal: when a panel can be repaired instead of replaced, we say so. For long laneways, we confirm clearances for our service vehicles when you book.`,
    issues: [
      'Custom or carriage-style doors needing matched panels and hardware',
      'Heavy doors with dual spring systems where only one side failed',
      'Moisture-related rust at bottom corners near the Rideau watershed',
    ],
    areaFaq: {
      q: 'Do you service large estate garages in Manotick?',
      a: 'Yes — we regularly work on oversized doors and custom installations and bring appropriate spring and cable sizes.',
    },
  }),
  'alta-vista': entry({
    intro: `Alta Vista and Old Ottawa East have mature trees, older bungalows, and infills. Many garage systems are original to the home — springs and openers are often past their design cycles even when the door still looks fine.`,
    localContext: `Headroom in older garages can rule out certain openers; we’ve retrofitted side-mount units and adjusted tracks where ceiling space is tight. We also work around narrow older laneways common near the hospitals and university corridor.`,
    issues: [
      'Original single-spring setups overdue for balanced replacement',
      'Low headroom track conversions when homeowners upgrade insulation',
      'Remotes interfering with dense urban RF from neighbouring properties',
    ],
    areaFaq: {
      q: 'Can you upgrade my opener in a low-ceiling garage?',
      a: 'Often yes — we evaluate headroom and can recommend wall-mount or compact units when a standard rail won’t fit.',
    },
  }),
  'hunt-club': entry({
    intro: `Hunt Club, South Keys, and the airport corridor mix townhomes, semis, and single-family homes. Some properties see more dust and road vibration; hardware loosens faster on garage doors facing busy arterials.`,
    localContext: `We’re used to coordinating around shift work and airport-area traffic. We service private residential garages and attached home garages only — not storefront or industrial bay doors.`,
    issues: [
      'Vibration-related bracket and roller loosening near high-traffic roads',
      'Heavier insulated doors on newer Hunt Club builds needing matched springs',
      'Security concerns where quick keypad and remote reprogramming matters',
    ],
    areaFaq: {
      q: 'Do you service townhomes near South Keys?',
      a: 'Yes — standard residential garage doors in Hunt Club and South Keys. If you share a condo parkade, we only service your private garage door; parkade doors are not in our scope.',
    },
  }),
  'riverside-south': entry({
    intro: `Riverside South is packed with newer construction and tight timelines — homeowners expect warranty-grade work and clear explanations when a builder-installed door fails early.`,
    localContext: `We document wear patterns so you know whether you’re dealing with adjustment, balance, or a defect claim. Many homes here use the same few opener models; we stock gears, boards, and sensors that match.`,
    issues: [
      'Early spring or cable wear on stock doors with heavy daily use',
      'Sensor alignment after curb and driveway settling',
      'Smart opener pairing issues with new routers and mesh Wi-Fi',
    ],
    areaFaq: {
      q: 'My home is only a few years old — why is my door failing?',
      a: 'Sometimes it’s adjustment or balance; sometimes hardware is under-spec for an insulated door. We inspect and explain whether it’s a quick fix or a warranty conversation.',
    },
  }),
  westboro: entry({
    intro: `Westboro and Hintonburg combine narrow lots, laneway access, and renovated heritage homes. Garages are often tight; we plan truck placement and protect gardens and walkways while we work.`,
    localContext: `We’re mindful of neighbours and noise bylaws — if a belt drive or isolation pad solves the problem, we’ll say so before replacing major components. Off-street parking stress also means sensors get bumped; realignment is a common first step.`,
    issues: [
      'Laneway access limiting how far we can back equipment in',
      'Heritage doors where preserving trim matters as much as function',
      'Urban RF clutter affecting remote range on older openers',
    ],
    areaFaq: {
      q: 'Can you work on laneway garages with tight access?',
      a: 'Yes — tell us when you book if access is laneway-only; we bring compact gear and plan accordingly.',
    },
  }),
  vanier: entry({
    intro: `Vanier, Overbrook, and New Edinburgh edges include older housing stock and newer infill. Garages may be detached, shared, or converted — we assess what’s actually safe to operate before quoting.`,
    localContext: `We’re straightforward about rot, structural movement, and when a track fix won’t hold. For families near transit and schools, same-day matters — we prioritize springs and cables that leave the door safe to lock.`,
    issues: [
      'Older wood frame movement affecting track plumb',
      'Multi-unit setups needing clear scope on which door is included',
      'Break-ins or forced entry damage to panels and locks',
    ],
    areaFaq: {
      q: 'Do you repair doors on older duplexes and conversions?',
      a: 'Yes — we evaluate each opening. If framing or the door is beyond safe repair, we’ll explain why before any work.',
    },
  }),
  'rockcliffe-park': entry({
    intro: `Rockcliffe Park and nearby streets feature larger lots and high-expectation curb appeal. Homeowners often want minimal visible damage and discreet service vehicles — we respect that.`,
    localContext: `Custom wood and premium steel doors need hardware that matches manufacturer specs. We avoid “close enough” springs that stress openers. When automation integrates with home systems, we test remotes and smart features before we leave.`,
    issues: [
      'Premium doors needing factory-correct spring and cable specs',
      'Quiet-operation expectations driving belt-drive and vibration fixes',
      'Landscaped approaches where we protect stone and beds during service',
    ],
    areaFaq: {
      q: 'Can you service high-end doors without damaging finishes?',
      a: 'Yes — we use manufacturer-appropriate parts and protect surrounding trim and flooring during work.',
    },
  }),
  'findlay-creek': entry({
    intro: `Findlay Creek is one of Ottawa’s newer communities — long rows of similar elevations mean we see the same few door packages again and again, which speeds diagnosis when something fails out of sequence.`,
    localContext: `Drainage and grading still settle in newer phases; that can throw off bottom seal contact and sensor height. We adjust for real-world driveways, not just the manual’s default settings.`,
    issues: [
      'Driveway settlement affecting sensor height and reverse behaviour',
      'Builder springs nearing cycle limits sooner on busy households',
      'Wi-Fi smart openers in areas with patchy carrier or fibre install timing',
    ],
    areaFaq: {
      q: 'Is Findlay Creek still in your regular service area?',
      a: 'Yes — we treat Findlay Creek as core Ottawa service with the same arrival-time commitment.',
    },
  }),
  carp: entry({
    intro: `Carp and west rural Ottawa often mean longer driveways, shop buildings, and detached garages. We bring spring and cable inventory for taller and wider openings, not only standard suburban singles.`,
    localContext: `Winter wind off fields can load doors differently than sheltered city lots. We check track reinforcement and opener mounting when gusts are a factor. For workshop doors, we balance security with daily convenience.`,
    issues: [
      'Oversized or taller doors needing non-standard spring lengths',
      'Oversized residential doors on workshops and outbuildings needing heavier springs',
      'Power reliability concerns where battery backup openers help',
    ],
    areaFaq: {
      q: 'Do you service workshop and detached garage doors in Carp?',
      a: 'Yes — describe door size and type when you call so we load the right springs and cables.',
    },
  }),
  dunrobin: entry({
    intro: `Dunrobin and West Carleton combine village homes, acreage, and river-adjacent properties. Response routes respect longer distances — we’re upfront about timing while still aiming for same-day when safety is involved.`,
    localContext: `Rural power outages and tree debris affect automatic doors more than urban homes. We check manual release function and show you how to operate safely if power fails mid-winter.`,
    issues: [
      'Wind and snow load on wide country driveways',
      'Rodent damage to bottom seal and wiring in outbuildings',
      'Heavy farm trucks stressing door balance and opener limits',
    ],
    areaFaq: {
      q: 'Is there an extra charge for Dunrobin or rural West Carleton?',
      a: 'Pricing follows your quote — rural jobs may include travel context on the phone; no surprise fees after the fact.',
    },
  }),
  richmond: entry({
    intro: `Richmond, North Gower, and south rural routes include village cores and spreading suburbs. Mix of older detached garages and new builds means we verify door weight and spring type on site.`,
    localContext: `Commuter traffic toward Barrhaven and Highway 416 affects when you need the door working. We stock parts that suit both legacy hardware and newer insulated doors.`,
    issues: [
      'Mixed-era housing with mismatched springs from past DIY fixes',
      'Gravel driveways throwing sensor alignment off more often',
      'Detached garages with separate electrical feeds to the opener',
    ],
    areaFaq: {
      q: 'Do you come from Ottawa for Richmond same-day calls?',
      a: 'Yes — we dispatch from Ottawa and schedule rural jobs with realistic arrival windows.',
    },
  }),
  greely: entry({
    intro: `Greely sits in Ottawa’s south growth band — large lots, new construction, and country roads. Doors face open exposure; wind and sun can age seals and finish unevenly.`,
    localContext: `We plan for mud season and long driveways. If you’re on a well or septic lane, mention access constraints when booking so we send the right vehicle.`,
    issues: [
      'Wind exposure flexing tracks on wide openings',
      'New homes still settling — affecting seal contact and sensor mounts',
      'Estate-style doors with decorative weight straining openers',
    ],
    areaFaq: {
      q: 'How far south of Greely do you travel?',
      a: 'Call with your address — we serve Greely and nearby south Ottawa communities regularly.',
    },
  }),
  'sandy-hill': entry({
    intro: `Sandy Hill mixes student rentals, heritage homes, and infill. Garage access is often tight, shared, or converted — we clarify scope and safety before touching hardware.`,
    localContext: `We understand landlord timelines and tenant access. When multiple unrelated parties use one door, we document what was adjusted so everyone knows how to operate it safely.`,
    issues: [
      'High-turnover rentals with damaged remotes and keypad codes',
      'Older doors in laneways with limited headroom',
      'Vibration and noise complaints from neighbours in dense housing',
    ],
    areaFaq: {
      q: 'Do you work on rental properties near uOttawa?',
      a: 'Yes — we coordinate with property managers or tenants and provide clear invoices for landlord records.',
    },
  }),
  glebe: entry({
    intro: `The Glebe and Old Ottawa South feature premium finishes, tight lots, and heavy pedestrian traffic. Curb appeal matters — we avoid scuffing trim and recommend fixes that match the home’s character.`,
    localContext: `Game days and Lansdowne events can block streets; we ask about parking permits or event closures when you book. For older carriage-style doors, we source hardware that doesn’t cheapen the look.`,
    issues: [
      'Premium insulation and solid doors stressing older openers',
      'Pedestrian-heavy lanes where auto-close and sensor sensitivity matter',
      'Laneway garages needing compact or side-mount openers',
    ],
    areaFaq: {
      q: 'Can you schedule around Lansdowne event traffic?',
      a: 'Yes — mention event days when booking and we’ll plan realistic arrival times.',
    },
  }),
  'beacon-hill': entry({
    intro: `Beacon Hill, Cyrville, and north Gloucester include 1980s–90s subdivisions with mature trees. Roots and frost shift driveways; that shows up as binding tracks and uneven door closure.`,
    localContext: `East-end weather patterns dump more ice in some pockets than others — we look at drainage and seal contact, not only the spring. For families on fixed incomes, we separate “must fix now” from “plan for next season.”`,
    issues: [
      'Driveway heave affecting vertical track alignment',
      'Original springs on doors that have since been insulated or clad',
      'Lightning-season power spikes affecting opener logic boards',
    ],
    areaFaq: {
      q: 'Do you cover Cyrville and Beacon Hill North?',
      a: 'Yes — full coverage across Beacon Hill, Cyrville, and surrounding north Gloucester neighbourhoods.',
    },
  }),
  'blackburn-hamlet': entry({
    intro: `Blackburn Hamlet sits near greenbelt and flight paths — wind exposure and vibration differ from inner suburbs. Homes span modest bungalows to larger renovations; door hardware varies widely.`,
    localContext: `We approach older garages with an eye on whether the structure still tolerates the door’s weight. When bush lots back onto the property, pest damage to seals can be part of the story.`,
    issues: [
      'Wind gusts off open fields affecting large double doors',
      'Animal damage to bottom rubber and wiring near ravine edges',
      'Mixed DIY repairs needing proper spring re-indexing',
    ],
    areaFaq: {
      q: 'Is Blackburn Hamlet included in your east Ottawa routes?',
      a: 'Yes — we’re in Blackburn Hamlet regularly with the same service standards as Orleans and Gloucester.',
    },
  }),
  cumberland: entry({
    intro: `Cumberland blends village history with new development toward Navan. Long lots and rural roads mean some properties have a detached garage plus the main house door — we ask how many residential doors need attention up front.`,
    localContext: `Snow clearing habits differ on rural drives; piles can knock sensors or block closing. We set realistic expectations for seal life when plows scrape near the threshold.`,
    issues: [
      'Detached garage doors with different spring sizes than the main house',
      'Gravel and chip seal driveways misaligning photo eyes',
      'Power blips on rural lines affecting smart openers',
    ],
    areaFaq: {
      q: 'Do you service Cumberland village and rural Cumberland?',
      a: 'Yes — tell us if you’re on a long private drive so we plan equipment and time.',
    },
  }),
  'carleton-place': entry({
    intro: `Carleton Place is a busy Mississippi Valley town with Ottawa commuters. Garages see cold Mississippi mornings and daily open/close cycles — springs and rollers wear predictably, but timing still catches people off guard.`,
    localContext: `We schedule from Ottawa with clear arrival windows. Downtown street parking and older laneways get a quick plan before we unload heavy springs.`,
    issues: [
      'Commuter-heavy use wearing rollers faster than weekend-only doors',
      'Older downtown garages with quirky headroom',
      'Humidity from the river affecting metal hardware surface rust',
    ],
    areaFaq: {
      q: 'How often do you come to Carleton Place?',
      a: 'Regularly — call for same-day or next-day availability; we’ll quote timing honestly based on current routes.',
    },
  }),
  embrun: entry({
    intro: `Embrun anchors a growing francophone community east of Ottawa. Newer subdivisions and established streets both need reliable doors through freeze–thaw and wet springs common in Prescott–Russell clay soils.`,
    localContext: `We respect bilingual service on request. Routing from Ottawa accounts for distance — you’ll get a straight answer on when a tech can be on site.`,
    issues: [
      'Clay soil settlement affecting driveway pitch and door balance',
      'Large family homes with heavy insulated doors',
      'Road-salt mist on driveways accelerating bottom seal wear',
    ],
    areaFaq: {
      q: 'Offrez-vous le service en français?',
      a: 'Oui — mentionnez la préférence linguistique à la réservation et nous ferons de notre mieux pour accommoder.',
    },
  }),
  russell: entry({
    intro: `Russell village and township properties range from compact lots to acreage. Wind across open fields and longer private drives mean we confirm vehicle access and door count when you call.`,
    localContext: `We carry rural-friendly inventory — longer cables, heavier springs, and backup parts so we’re not leaving you with a half-fixed door overnight.`,
    issues: [
      'Wide agricultural-style doors on outbuildings',
      'Power reliability and manual release readiness',
      'Mice and chipmunks chewing weatherstrip near fields',
    ],
    areaFaq: {
      q: 'Do you drive to Russell Township outside the village?',
      a: 'Often yes — share your address or major intersection so we confirm coverage and timing.',
    },
  }),
  metcalfe: entry({
    intro: `Metcalfe, Osgoode, and rural south Ottawa mean longer distances, shop buildings, and seasonal mud. We’re used to scheduling realistic windows while still treating emergencies seriously.`,
    localContext: `Rural properties may have a second residential garage or workshop door with different spring sizes than the house. We ask for a photo and measurements before dispatch so the right hardware is on the truck.`,
    issues: [
      'Oversized residential garage doors on workshops and outbuildings',
      'Dusty farm lanes affecting sensor cleanliness',
      'Heavy equipment vibration loosening track hardware on detached garages',
    ],
    areaFaq: {
      q: 'Can you fix a second garage or workshop door in Metcalfe?',
      a: 'Yes — for standard residential sectional garage doors on your property. Send a photo and rough door size when you book; we do not service industrial or storefront doors.',
    },
  }),
  kemptville: entry({
    intro: `Kemptville is a North Grenville hub with new growth and older stock. KYC campus traffic and commuter ties to Ottawa mean garage doors get real daily workouts year round.`,
    localContext: `We plan Ottawa–Kemptville timing explicitly — no vague “sometime today” when distance is involved. Downtown bridge traffic and event days can shift arrival slightly; we communicate that upfront.`,
    issues: [
      'Mixed housing eras needing on-site spring measurement',
      'River valley humidity affecting metal hardware',
      'New subdivisions with tight warranty questions on builder doors',
    ],
    areaFaq: {
      q: 'Is Kemptville same-day from Ottawa?',
      a: 'Often yes for urgent issues — call early; we’ll confirm the next available slot.',
    },
  }),
  arnprior: entry({
    intro: `Arnprior sits where the Ottawa and Madawaska rivers meet — damp cold, older downtown lanes, and valley winds. Doors here see rust on hardware sooner than inland suburbs if maintenance slips.`,
    localContext: `We service town and nearby White Lake / McNab routes. Tell us if you’re on a well-travelled truck route — vibration and dust show up in tracks and rollers.`,
    issues: [
      'Surface rust on springs and cables in humid river weather',
      'Tight older garages needing creative opener placement',
      'Seasonal tourists and traffic affecting when you need the door fixed',
    ],
    areaFaq: {
      q: 'Do you cover McNab and Braeside from Arnprior?',
      a: 'Often yes — give your address when booking so we confirm rural coverage.',
    },
  }),
  almonte: entry({
    intro: `Almonte and Mississippi Mills draw Ottawa day-trippers and long-time residents. Heritage homes near the falls mix with new builds — door expectations range from rustic to showroom.`,
    localContext: `Stone and brick approaches matter — we protect steps and walkways. For older carriage doors, we discuss wood repair versus replacement honestly.`,
    issues: [
      'Tourism-area homes where quiet operation matters for guests',
      'Moisture from the river valley affecting metal components',
      'Steep driveways affecting seal wear and bottom brackets',
    ],
    areaFaq: {
      q: 'How far west of Ottawa do you go for Almonte?',
      a: 'Almonte is in our regular valley routing — call for availability.',
    },
  }),
  casselman: entry({
    intro: `Casselman is a Prescott–Russell crossroads — bilingual service, highway access, and a mix of older homes and new construction. Garage doors face the same Ottawa Valley cold with sometimes heavier wind exposure.`,
    localContext: `We route from east Ottawa efficiently. If you’re near the 417, mention it — it helps us sequence jobs.`,
    issues: [
      'Wind exposure on country-facing lots',
      'Older single-spring doors overdue for dual-spring balance',
      'Road noise vibration on doors facing highway corridors',
    ],
    areaFaq: {
      q: 'Service-t-on Casselman en français?',
      a: 'Oui — indiquez votre préférence lors de l’appel.',
    },
  }),
  rockland: entry({
    intro: `Rockland and Clarence–Rockland span Ottawa River communities with strong bilingual character. Winters are harsh; ice buildup and blowing snow test bottom seals and photo eyes.`,
    localContext: `We understand river commute patterns. If you work in Ottawa but live in Rockland, you need the door reliable before early departures — we prioritize safety-critical failures.`,
    issues: [
      'Blowing snow covering sensors and thresholds',
      'Heavier insulated doors on river-view homes',
      'Long driveways where plow piles interfere with door travel',
    ],
    areaFaq: {
      q: 'Do you serve Clarence and Rockland township?',
      a: 'Yes — include your township or landmark when booking for accurate routing.',
    },
  }),
  navan: entry({
    intro: `Navan is a rural east community with estate lots, farm adjacency, and growing residential pockets. Mice, cold, and dust are the usual trio alongside normal mechanical wear.`,
    localContext: `We often approach Navan from Orleans or Cumberland routes — sharing cross streets speeds things up. For long private drives, confirm gate codes when you book.`,
    issues: [
      'Pest damage to seals and bottom fixtures',
      'Large doors on detached shops',
      'Generators and power quirks in rural pockets',
    ],
    areaFaq: {
      q: 'Is Navan still considered local Ottawa service?',
      a: 'We serve Navan regularly — call for timing; rural distance may affect same-day slotting.',
    },
  }),
  'smiths-falls': entry({
    intro: `Smiths Falls sits on the Rideau Canal corridor with a mix of heritage brick, rural edges, and commuters. Garage doors endure humid summers and cold snaps; hardware rust is common without annual lube.`,
    localContext: `Distance from Ottawa means we batch valley work when possible — for emergencies we still push for fastest safe arrival. Tell us if you’re canal-adjacent; humidity differs block by block.`,
    issues: [
      'Canal-area humidity accelerating rust on springs and cables',
      'Older downtown garages with non-standard sizes',
      'Tourism traffic and bridge delays affecting when you need service',
    ],
    areaFaq: {
      q: 'Can you reach Smiths Falls same day?',
      a: 'Sometimes — call early; we’ll confirm based on technician routing that day.',
    },
  }),
  winchester: entry({
    intro: `Winchester and North Dundas are south rural communities with village cores and spreading development. Agricultural traffic and gravel roads show up as dust on tracks and misaligned sensors.`,
    localContext: `We’re honest about travel time from Ottawa. For farm properties, describe whether we’re servicing the house garage, shop, or both.`,
    issues: [
      'Shop doors with farm equipment clearance needs',
      'Dusty sensors on gravel drives',
      'Cold starts on doors not opened daily',
    ],
    areaFaq: {
      q: 'Do you service Winchester village and surrounding farms?',
      a: 'Yes — describe door types and access when booking.',
    },
  }),
  limoges: entry({
    intro: `Limoges sits near Calypso and Prescott–Russell recreation traffic — seasonal congestion and weekend peaks matter for when you can meet a technician. Homes range from cottages to year-round builds.`,
    localContext: `We plan around 417 and local event traffic. If you’re on a private road, mention surface conditions — spring mud affects where we park.`,
    issues: [
      'Seasonal homes where doors sit idle then fail on first heavy use',
      'Sand and dust from unpaved shoulders affecting rollers',
      'Large insulated doors on newer builds',
    ],
    areaFaq: {
      q: 'Is Limoges inside your east Ottawa service radius?',
      a: 'Yes — call with your address for scheduling; seasonal traffic can shift arrival slightly.',
    },
  }),
  'constance-bay': entry({
    intro: `Constance Bay and West Carleton river communities face wind off the Ottawa River, ice, and private roads. Springs and cables corrode faster without seasonal maintenance.`,
    localContext: `We respect cottage access and ice conditions. If the door is the only thing securing gear or boats, we treat alignment and lock issues as security, not convenience.`,
    issues: [
      'River wind flexing wide double doors',
      'Ice buildup forcing doors out of alignment',
      'Seasonal properties with stale lubricant and stuck hardware',
    ],
    areaFaq: {
      q: 'Do you service seasonal cottages in Constance Bay?',
      a: 'Yes — mention seasonal access and whether power is on when you book.',
    },
  }),
  osgoode: entry({
    intro: `Osgoode village and rural Osgoode combine older homes, new builds, and long country lots. Like other south rural areas, we confirm door dimensions and whether multiple buildings need service.`,
    localContext: `Deer, rodents, and weather extremes show up in damaged seals and wiring. We bring enough hardware to finish rural jobs in one visit when possible.`,
    issues: [
      'Multiple outbuildings each with different door weights',
      'Long private drives affecting where we stage equipment',
      'Backup lighting and power considerations for evening service',
    ],
    areaFaq: {
      q: 'How do I describe my door if I don’t know the model?',
      a: 'Send a quick photo or measure width and height — we’ll identify the likely spring and cable type before we come.',
    },
  }),
};

export function getAreaContent(slug) {
  const data = CONTENT[slug];
  if (!data) return null;
  return data;
}

/** Unique meta description for area pages — custom copy for primary suburbs, else intro excerpt. */
export function getAreaMetaDescription(slug) {
  const c = CONTENT[slug];
  if (c?.metaDescription) return c.metaDescription;
  if (c?.intro) {
    const stripped = c.intro.replace(/\s+/g, ' ').trim();
    return stripped.length > 155 ? `${stripped.slice(0, 152)}…` : stripped;
  }
  return null;
}

export function getAreaFaqs(slug) {
  const c = CONTENT[slug];
  if (c?.areaFaqs?.length) return c.areaFaqs;
  if (c?.areaFaq) return [c.areaFaq];
  return [];
}

export function isPrimaryArea(slug) {
  return Boolean(CONTENT[slug]?.isPrimary);
}
