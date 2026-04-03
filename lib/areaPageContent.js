/**
 * Unique copy per service area — used on /areas/[suburb] for SEO differentiation.
 * Each entry should read as genuinely local, not a find-replace of another city.
 */

const DEFAULT_ISSUES = [
  'Spring fatigue after Ottawa freeze–thaw cycles',
  'Opener sensors knocked out of alignment',
  'Worn rollers and cables from daily use',
];

function entry({ intro, localContext, issues, areaFaq }) {
  return {
    intro,
    localContext,
    issues: issues || DEFAULT_ISSUES,
    areaFaq,
  };
}

const CONTENT = {
  kanata: entry({
    intro: `Kanata blends high-tech campuses with family subdivisions from Bridlewood to Morgan’s Grant. Garage doors here see everything from long commuter cycles to cold snaps off the Greenbelt — we route trucks for same-day spring, cable, and opener work without treating you like a distant suburb.`,
    localContext: `Tech employees and shift workers often need the door working before dawn or after late flights. We carry torsion and extension spring sets sized for the wide double doors common in 1990s–2000s builds, plus hardware for newer builder packages. When a door won’t seal against Kanata winds, we look at bottom weatherstrip and track alignment, not just the opener symptom.`,
    issues: [
      'Undersized springs on original double-car doors from the subdivision boom years',
      'Frozen keypads and safety sensors after melt–refreeze on north-facing driveways',
      'Opener strain where insulation kits added weight the motor was never sized for',
    ],
    areaFaq: {
      q: 'Do you cover both Kanata North and Kanata South?',
      a: 'Yes. We serve all of Kanata including Morgan’s Grant, Beaverbrook, Glen Cairn, Katimavik, and Kanata Lakes. Same response-time promise as central Ottawa.',
    },
  }),
  barrhaven: entry({
    intro: `Barrhaven’s rapid growth means a mix of brand-new townhomes, long single-family streets, and mature pockets near Fallowfield. Doors in newer phases often use builder-grade openers — we see alignment issues and spring cycles that fail earlier than homeowners expect.`,
    localContext: `Longwood, Half Moon Bay, and Chapman Mills all have different driveway grades; that changes how tracks wear and how weather seals sit. We adjust for slope, not just swap parts. For growing families juggling school and work, we prioritize fixes that hold up to multiple daily cycles.`,
    issues: [
      'Safety sensors misaligned on newer homes after landscaping or curb bumps',
      'Extension or torsion springs matched to stock doors that now carry decorative hardware',
      'Noisy belt or chain drives where bedrooms sit above the garage',
    ],
    areaFaq: {
      q: 'Can you match parts for newer Barrhaven subdivisions?',
      a: 'Yes. We stock common builder door and opener models used across Barrhaven and can order same-day for less common brands when needed.',
    },
  }),
  nepean: entry({
    intro: `Nepean stretches from Bells Corners to Centrepointe and Merivale corridors — split-levels from the 70s sit beside infills and town rows. That mix means spring types, track hardware, and headroom solutions vary street by street.`,
    localContext: `We’re used to tight laneways off Baseline and older wood doors that need panel repair instead of a full replacement. For commercial strips near Merivale, we also service rolling steel and sectional doors where security and uptime matter.`,
    issues: [
      'Older torsion setups with limited headroom needing low-profile hardware',
      'Split-level homes where ceiling-mounted openers need side-mount or jackshaft alternatives',
      'Weather seals failed along sloped driveways toward the Greenbelt',
    ],
    areaFaq: {
      q: 'Do you work near Bells Corners and College Square?',
      a: 'Yes — all of Nepean including Bells Corners, Centrepointe, Barrhaven-adjacent pockets, and the Merivale corridor.',
    },
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
    intro: `Stittsville sits on the western growth corridor with newer subdivisions and some older village-core homes. Long commutes mean garage doors get heavy morning and evening use — wear shows up on rollers and springs faster than the calendar suggests.`,
    localContext: `We coordinate with Kanata–Stittsville traffic patterns so arrival times stay realistic. Rural properties on larger lots sometimes need longer cable runs or reinforced hardware; we bring that stock instead of a second trip.`,
    issues: [
      'High-cycle families wearing rollers and hinges ahead of the usual timeline',
      'Doors facing open fields catching more wind load and track flex',
      'Village-area homes with older wood doors needing panel or jamb repair',
    ],
    areaFaq: {
      q: 'How far west of Stittsville do you go?',
      a: 'We regularly serve Stittsville, west Ottawa, and nearby rural pockets. Call with your address — we’ll confirm same-day or scheduled service.',
    },
  }),
  gloucester: entry({
    intro: `Gloucester mixes dense residential grids, townhome rows, and commercial strips. Shorter driveways and shared walls mean noise and vibration from a failing opener bother neighbours — we fix balance and hardware, not just the motor noise.`,
    localContext: `Technicians know the major east-end arterials, so we’re not guessing travel time from the other side of the city. From Blackburn edges to the Gloucester industrial pockets, we carry residential and light commercial parts.`,
    issues: [
      'Townhome party-wall setups needing quieter belt drives and isolation',
      'Torsion tubes shifting on doors with heavy daily use',
      'Sensor issues after minor bumps from tight parking',
    ],
    areaFaq: {
      q: 'Do you do commercial garage doors in Gloucester?',
      a: 'We service residential and light commercial sectional doors common in plaza and warehouse bays — call with your door type.',
    },
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
    intro: `Hunt Club, South Keys, and the airport corridor blend commercial bays, townhomes, and single-family homes. Some properties see more dust and jet-noise vibration; hardware loosens faster on doors facing busy roads.`,
    localContext: `We’re used to coordinating around shift work and airport-area traffic. For mixed-use buildings, we clarify whether we’re servicing a private garage or a shared parkade door before we dispatch.`,
    issues: [
      'Vibration-related bracket and roller loosening near high-traffic roads',
      'Commercial-style doors on live-work properties needing heavier hardware',
      'Security concerns where quick keypad and remote reprogramming matters',
    ],
    areaFaq: {
      q: 'Do you service townhomes near South Keys?',
      a: 'Yes — we work on standard residential doors in Hunt Club and South Keys; for condo parkades, confirm access rules when booking.',
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
      'Metal buildings with commercial-style hardware',
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
    intro: `Cumberland blends village history with new development toward Navan. Long lots and rural roads mean some properties have shop bays and secondary garage doors — we ask how many doors need attention up front.`,
    localContext: `Snow clearing habits differ on rural drives; piles can knock sensors or block closing. We set realistic expectations for seal life when plows scrape near the threshold.`,
    issues: [
      'Secondary shop doors with different spring sizes than the house garage',
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
    localContext: `Farm and workshop doors sometimes use commercial hardware; residential techs who only carry suburban parts waste your time — we ask door size and photo before dispatch.`,
    issues: [
      'Commercial-style springs on shop doors',
      'Dusty farm lanes affecting sensor cleanliness',
      'Heavy equipment vibration loosening track hardware',
    ],
    areaFaq: {
      q: 'Can you fix large shop doors in Metcalfe?',
      a: 'Describe the door type and size — we handle many sectional shop doors; unusual industrial doors may need photos first.',
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

/** Unique meta description fragment from area intro; paired with CTA line in page metadata. */
export function getAreaMetaDescription(slug) {
  const c = CONTENT[slug];
  if (c?.intro) {
    const stripped = c.intro.replace(/\s+/g, ' ').trim();
    return stripped.length > 155 ? `${stripped.slice(0, 152)}…` : stripped;
  }
  return null;
}
