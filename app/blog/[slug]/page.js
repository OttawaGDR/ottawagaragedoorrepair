import { PHONE, PHONE_HREF } from '../../../lib/data';
import { SITE_BRAND, SITE_URL, blogMetaDescription, openGraphPage } from '../../../lib/seo';
import Icon from '../../components/Icons';

const posts = {
  'prepare-garage-door-ottawa-winter': {
    emoji: '❄️',
    cat: 'Winter Tips',
    title: 'How to Prepare Your Garage Door for Ottawa Winter (2026 Guide)',
    date: 'Nov 6, 2026',
    readTime: '7 min read',
    metaDescription: 'Prepare your garage door for Ottawa winter — lubrication, weather seals, springs, sensors, and opener checks before -20°C. Same-day tune-ups across Ottawa, Kanata, Barrhaven & Orleans.',
    intro: "Ottawa winters punish garage doors. When temperatures drop below -15°C, dry rollers seize, bottom seals freeze to the slab, springs get brittle, and openers strain against binding hardware. A short fall prep routine prevents the stuck-door emergencies we see every January across Kanata, Barrhaven, Nepean, Orleans, and Stittsville. Here is what to do before the deep freeze — and when to book a tune-up instead of DIY.",
    sections: [
      { heading: 'Why Ottawa Winters Break Garage Doors', content: "Cold contracts metal tracks and springs, thickens cheap grease into paste, and freezes rubber weather seals to wet concrete overnight. Road salt and slush creep under the door and corrode bottom brackets and cables. Attached garages lose heat through worn seals, which raises heating bills and leaves the opener working harder every cycle. Most mid-winter failures we fix started as small fall issues that were ignored." },
      { heading: '1. Lubricate Moving Parts With Cold-Rated Product', content: "Wipe old black grease off rollers, hinges, bearing plates, and spring coils, then apply a silicone or lithium spray rated to at least -40°C. Avoid WD-40 as a long-term lubricant — it cleans briefly, then leaves parts dry. Do not soak the opener rail with oil if the manufacturer specifies a dry PTFE lube. One thorough lube in October or early November cuts squeaks and reduces opener strain when the first cold snap hits." },
      { heading: '2. Inspect and Replace Weatherstripping', content: "Check the bottom rubber seal for cracks, flattening, or gaps that let drafts and mice in. Side and top vinyl stops should lightly touch the closed door without tearing. Soft, brittle, or torn seals freeze solid and can glue the door to the floor — forcing the opener then burns out the motor or snaps a cable. Fresh weatherstripping is one of the highest-ROI winter upgrades for Ottawa attached garages." },
      { heading: '3. Test Door Balance and Spring Condition', content: "Pull the red emergency release and lift the door halfway by hand. A balanced door stays put; if it drops hard or feels heavy, spring tension is off or a spring is near failure. Look for rust, gaps in the coil, or uneven cable wrap on the drums. Never try to wind torsion springs yourself — they are under extreme tension. Book a spring check now; mid-winter snaps leave cars trapped and doors unsafe." },
      { heading: '4. Clear Sensors and Check Auto-Reverse', content: "Wipe both photo-eye lenses and confirm indicator lights stay solid. Place a 2x4 on the floor in the door's path and close the door — it should reverse on contact. Misaligned sensors from frost heave or summer bumps become a bigger headache when snow piles block the beam. Fix sensor and force settings in fall so you are not troubleshooting in a snowstorm with frozen fingers." },
      { heading: '5. Opener, Remotes, and Power Backup', content: "Replace remote batteries before winter kills them. Confirm the wall button works if remotes fail. Listen for grinding — worn gears fail faster when the door binds in cold. If your garage loses power often in ice storms, consider a battery backup opener or know how to use the manual release safely. Smart openers help you verify the door closed after you leave, which matters when winter wind can push a soft-closed door open." },
      { heading: '6. Keep the Threshold Clear of Ice and Salt', content: "Chip ice off the sill and sweep salt away from the bottom seal so it does not freeze overnight. A thin silicone wipe on the seal in late fall helps prevent sticking. If the door freezes shut, use warm (not boiling) water along the seal — never force the opener. Repeated freeze-thaw cycles without seal care are a top cause of burned motors on Ottawa January service calls." },
      { heading: 'DIY vs Professional Fall Tune-Up', content: "Homeowners can safely lubricate, wipe sensors, replace remote batteries, and visually check seals. Leave spring tension, cable replacement, track realignment, and opener gear work to a licensed technician. Our 21-point maintenance tune-up covers lubrication, balance, sensors, hardware, and a written report — usually under an hour — so small issues get fixed before they become emergency calls." },
      { heading: 'Book Before the Deep Freeze', content: "Same-day garage door prep and repair is available across Ottawa and the suburbs. We stock cold-rated springs, rollers, seals, and opener parts on the truck so most winter-readiness jobs finish in one visit. Call for a fall tune-up or weather seal upgrade before overnight lows hit the teens below zero — that is when emergency volume spikes and wait times grow." },
    ],
  },
  'garage-door-opener-not-working-ottawa': {
    emoji: '⚙️',
    cat: 'Repairs',
    title: 'Garage Door Opener Not Working? Ottawa Repair Guide',
    date: 'Oct 17, 2026',
    readTime: '7 min read',
    metaDescription: 'Garage door opener not working in Ottawa? Fix remotes, wall buttons, grinding gears, sensor faults, and dead motors — plus when to repair vs replace. Same-day service across Ottawa.',
    intro: "Your garage door opener won't respond — remotes dead, wall button silent, motor humming, or grinding every cycle. Opener failures are one of the top service calls we see across Ottawa, Kanata, Barrhaven, Nepean, and Orleans. This guide helps you spot the common causes, try safe checks first, and know when repair or a new unit makes more sense.",
    sections: [
      { heading: 'Confirm It Is the Opener — Not the Door', content: "Before blaming the motor, rule out a mechanical door problem. Disconnect the opener with the red emergency release and try lifting the door halfway by hand. If it feels extremely heavy, drops, or sits crooked, you likely have a broken spring, frayed cable, or binding track — not an opener failure. Running a motor against a broken spring often burns out the unit and costs more to fix." },
      { heading: '1. Power, Outlet, and Breaker Issues', content: "Check that the ceiling unit has power: look for a lit bulb or status LED, confirm the plug is seated, and reset any GFCI outlet or breaker that tripped. Ottawa garages often share circuits with freezers or heaters that overload cold-weather loads. If power is restored and the opener still does nothing, move on to the wall control and logic board." },
      { heading: '2. Remotes Work Differently Than the Wall Button', content: "Always test the hard-wired wall button first. If the wall button opens the door but remotes do not, replace remote batteries and reprogram the remotes to the opener. Vehicle HomeLink and older rolling-code remotes sometimes lose sync after a battery change or power outage. If neither remotes nor the wall button work, the problem is usually inside the opener — capacitor, logic board, or motor — not the remotes." },
      { heading: '3. Motor Hums or Grinds but Door Does Not Move', content: "A humming motor with no travel, or a loud grind on every open, usually means worn drive gears — especially on older LiftMaster and Chamberlain chain-drive units common in Ottawa subdivisions. Gear replacement is often cheaper than a full opener and restores quiet, reliable travel. If plastic gear teeth are shredded, do not keep running the unit; that can damage the worm gear or rail trolley." },
      { heading: '4. Safety Sensors and Travel Limits', content: "Misaligned or dirty photo-eye sensors can stop the door from closing — and some units lock out further travel until the fault clears. Clean both lenses, clear ice or clutter from the beam path, and adjust until both indicator lights stay solid. If the door opens fine but stops short or reverses at the floor, travel limits or force settings may need recalibration after a power outage or cold snap." },
      { heading: '5. When Repair Beats Replacement', content: "Repair usually makes sense when the opener is under about 10–12 years old, the rail and motor housing are sound, and the failure is a gear kit, capacitor, logic board, remote programming, or sensor wiring. We service LiftMaster, Chamberlain, Genie, Craftsman, and Marantec units same day when parts are on the truck. Opener service and gear work are typically much less than a full swap when the unit still has life left." },
      { heading: '6. When a New Opener Is the Better Call', content: "Replace the opener when the motor is burned out, the chassis is cracked, parts are discontinued, or the unit is noisy and unreliable every winter. Belt-drive and modern quiet openers hold up better in attached Ottawa garages where bedrooms sit above. Smart WiFi models add phone control and alerts — useful if you want to check the door from work — and we handle removal, install, and remote programming in one visit." },
      { heading: 'Safe DIY Checks Before You Call', content: "1) Verify power and reset GFCI/breaker. 2) Test the wall button, then remotes with fresh batteries. 3) Confirm the emergency release has not left the trolley disconnected. 4) Clean and realign safety sensors. 5) Manually lift the door to confirm springs still balance it. Stop DIY if you hear grinding with no movement, smell burning, or the door is heavy or crooked — those need a technician." },
      { heading: 'Same-Day Opener Repair Across Ottawa', content: "If checks do not restore normal operation, call for on-site diagnosis. Garage Door Repair Ottawa carries common opener parts and gear kits so most jobs finish without a second appointment — across Ottawa, Kanata, Barrhaven, Orleans, Stittsville, and Gloucester. You get a written price before work starts, and we tell you honestly whether repair or replacement is the smarter spend." },
    ],
  },
  'garage-door-wont-open-ottawa': {
    emoji: '🚪',
    cat: 'Repairs',
    title: "Garage Door Won't Open? Ottawa Troubleshooting Guide",
    date: 'Sep 10, 2026',
    readTime: '8 min read',
    metaDescription: "Garage door won't open in Ottawa? Diagnose broken springs, dead openers, locked remotes, frozen seals, and off-track doors — plus when to call same-day repair across Ottawa.",
    intro: "Your garage door won't open — remote dead, wall button silent, or the motor humming with nothing moving. This is one of the most common service calls we get across Ottawa, Kanata, Barrhaven, and Orleans. Use this guide to narrow the cause safely, try a few low-risk checks, and know when to stop and call a technician.",
    sections: [
      { heading: 'Stay Safe Before You Troubleshoot', content: "Never force a door that feels stuck or extremely heavy. A broken torsion spring leaves 200–400 lbs of unbalanced weight on the panels — lifting it by hand or running the opener can snap cables, bend the track, or injure you. If you heard a loud bang overnight, treat it as a broken spring and leave the door alone until a pro arrives." },
      { heading: '1. Broken Torsion or Extension Spring', content: "The #1 reason a garage door won't open in Ottawa is a snapped spring — especially after cold snaps when metal gets brittle. Look at the spring(s) above the door: a visible gap in the coil means it's broken. The door may sit crooked or feel impossibly heavy. Spring replacement is same-day on most Ottawa calls; we replace both springs for balance so you don't get a second failure weeks later." },
      { heading: '2. Opener Power, Remotes, and Wall Button', content: "Confirm the opener has power — check the ceiling unit light, the outlet, and any GFCI or breaker that may have tripped. Try the hard-wired wall button next. If the wall button works but remotes don't, replace remote batteries and reprogram if needed. If neither works and the motor is silent, you may have a failed logic board, fried capacitor, or dead unit that needs opener repair or replacement." },
      { heading: '3. Motor Runs but Door Does Not Move', content: "If you hear humming or grinding but the door stays put, the drive gear inside the opener is often worn — a common LiftMaster and Chamberlain failure after years of Ottawa winters. Gear replacement restores quiet travel without buying a full opener. Also check the red emergency release cord: if someone pulled it during a power outage, the trolley may still be disconnected — pull toward the door until it clicks back onto the rail." },
      { heading: '4. Safety Sensors Blocking the Close Cycle', content: "Some openers refuse to open after a failed close if sensors are misaligned or blocked by snow, ice, or clutter. Check both photo-eyes near the floor — lights should be solid, not blinking. Clear the path, wipe the lenses, and realign until both indicators stay steady. Persistent sensor faults after cleaning usually need a technician to check wiring." },
      { heading: '5. Frozen Bottom Seal or Ice Buildup', content: "In winter, the rubber bottom seal can freeze to the driveway overnight. Running the opener then burns out the motor. Pour warm (not boiling) water along the seal, wait a minute, then try again. Long-term: keep a low-temp silicone on the seal each fall. If ice is thick or the door is already straining, stop and call — forcing it risks spring or cable damage." },
      { heading: '6. Off-Track Door, Bent Rollers, or Binding Hardware', content: "If panels are crooked, rollers sit outside the track, or the door binds halfway, do not operate it. Off-track doors and frayed cables are safety hazards. Causes include impact, frost heave on the slab, or deferred maintenance. A licensed tech resets the track, replaces rollers or cables, and rebalances the door so the opener isn't fighting a mechanical problem." },
      { heading: 'Quick DIY Checks That Are Usually Safe', content: "1) Confirm power and try the wall button. 2) Replace remote batteries. 3) Look for a visible spring gap. 4) Clear sensor path and check indicator lights. 5) See if the emergency cord left the opener disconnected. Skip DIY if the door is heavy, crooked, off-track, or you heard a bang — those need professional tools and winding bars." },
      { heading: 'When to Call Same-Day Garage Door Repair in Ottawa', content: "Call a technician if the spring is broken, the door is off-track, cables look frayed, the opener hums without moving the door, or DIY checks didn't restore normal travel. Garage Door Repair Ottawa stocks springs, cables, rollers, and opener parts on every truck — most won't-open calls finish in one visit across Ottawa and the suburbs, typically within 90 minutes, with a written price before work starts." },
    ],
  },
  'garage-door-safety-sensors-ottawa': {
    emoji: '🔴',
    cat: 'Repairs',
    title: 'Garage Door Safety Sensors Not Working? Ottawa Troubleshooting Guide',
    date: 'Jul 5, 2026',
    readTime: '6 min read',
    metaDescription: 'Garage door safety sensors blinking or door won\'t close in Ottawa? Step-by-step alignment, cleaning, and glare fixes — plus when to call a technician. Same-day service across Ottawa.',
    intro: "Your garage door starts to close, then reverses halfway up — or the opener light blinks and nothing moves. In most Ottawa homes, the culprit is the pair of photo-eye safety sensors at the bottom of the door frame. Here's how to diagnose and fix the common causes yourself, and when it's time to call a pro.",
    sections: [
      { heading: 'How Safety Sensors Work', content: "Modern garage doors have two small units mounted about 6 inches off the floor on each side of the opening. One sends an invisible infrared beam; the other receives it. If anything breaks that beam — a person, bike, snowbank, or misalignment — the opener stops and reverses. That's required by law and prevents serious injuries. When the beam is interrupted or the sensors can't \"see\" each other, the door won't close with the opener." },
      { heading: 'Blinking Lights: What They Mean', content: "On most LiftMaster, Chamberlain, and Genie units, a steady green or amber light on each sensor means aligned and working. A blinking light usually means misalignment or a blocked beam. If one sensor is dark entirely, check the wiring connection at the back of the unit or at the opener terminal — vibration and cold can loosen clips over time." },
      { heading: 'Step 1: Clear the Path', content: "Before adjusting anything, look along the floor between the sensors. Remove bikes, bins, snow piles, and leaves. Ottawa garages often accumulate slush and road salt near the door in winter — a small mound of ice can block the beam even when the door looks clear from standing height." },
      { heading: 'Step 2: Clean the Lenses', content: "Wipe both sensor lenses with a soft, dry cloth. Spider webs, dust, and road salt film are common in Ottawa and can scatter the infrared beam enough to trigger a false reversal. Avoid harsh chemicals — a microfiber cloth is usually enough." },
      { heading: 'Step 3: Realign the Sensors', content: "Loosen the mounting bracket wing nut slightly on one sensor. Adjust it until the indicator light stays solid (not blinking). Tighten and repeat on the other side if needed. Sensors should point directly at each other across the full width of the opening. A door frame that has shifted with frost heave or a bumped bracket is a frequent cause in older Ottawa homes." },
      { heading: 'Sun Glare in Late Afternoon', content: "If the door only fails to close on sunny afternoons, direct sunlight hitting the receiver sensor can overpower the infrared beam — especially on west-facing garages in Kanata, Barrhaven, and Orleans. A short sun shield (cardboard or a commercial shade clip) on the outside of the receiver often fixes it. If glare is the pattern, alignment alone won't solve it." },
      { heading: 'Check the Door Balance and Travel Limits', content: "Sometimes the sensors are fine but the door hits an obstruction because it's binding on the track or the opener force setting is too low. Disconnect the opener with the red release cord and lift the door manually halfway — it should stay put. If it drops or feels heavy, you may have a spring or track issue, not a sensor issue. Forcing the opener in that case risks more damage." },
      { heading: 'When to Call a Technician', content: "Call a professional if both sensors show solid lights but the door still reverses, wires are frayed or chewed, the opener wall button works but remotes don't (or vice versa), or you've realigned twice and the problem returns. Snapped cables, bent tracks, and broken springs can mimic sensor problems — our technicians test the full system on site across Ottawa, usually within 90 minutes." },
    ],
  },
  'garage-door-repair-cost-ottawa': {
    emoji: '💰',
    cat: 'Pricing',
    title: 'How Much Does Garage Door Repair Cost in Ottawa? (2026 Guide)',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    metaDescription: 'Garage door repair costs in Ottawa explained — spring replacement, openers, cables, tune-ups & new doors. What affects pricing, no surprise fees. Same-day service across Ottawa.',
    intro: "Getting your garage door repaired in Ottawa doesn't have to be a guessing game. Here's a complete breakdown of what you'll actually pay for every common repair — no surprises.",
    sections: [
      { heading: 'Spring Replacement', content: 'Torsion spring replacement is the most common garage door repair in Ottawa. Spring replacement runs $220–$350. We always recommend replacing both springs at the same time since if one broke, the other is near the end of its life — and it saves you a second service call within months.' },
      { heading: 'Opener Repair or Replacement', content: 'Opener installation starts at $195. Opener gear replacement (motor running but door not moving) starts from $250. New openers supplied and installed start from $650 depending on the model — chain drive, belt drive, or smart WiFi.' },
      { heading: 'Cable Replacement', content: 'Broken or frayed cables are a safety hazard. Cable repair in Ottawa typically costs $170–$250 for both cables including labour. Never attempt to replace cables yourself — they are under extreme tension.' },
      { heading: 'Panel Repair', content: "We don't replace panels — we repair them. Panel repair starts at $170. If your door is older or severely damaged, a new door may make more sense; new garage doors start from $1,800–$4,500 depending on size and model." },
      { heading: 'Track Adjustment or Replacement', content: 'If your door is off-track or rubbing, a track adjustment runs $95–$150. Full track replacement is $200–$350. Left unaddressed, misaligned tracks will damage your rollers and panels.' },
      { heading: 'Maintenance Tune-Up', content: 'Our full 21-point maintenance tune-up is $150. Inspection findings and an approved price are always shared before any work begins.' },
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
      { heading: 'Step 3: Call a Professional', content: "Torsion springs are under hundreds of pounds of tension. DIY spring replacement is one of the leading causes of serious garage door injuries. In Ottawa, Garage Door Repair Ottawa can typically arrive within 90 minutes and complete the repair in under an hour." },
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
      { heading: 'Why Insulation Matters in Ottawa', content: "An uninsulated garage door has an R-value of about R-2. Ottawa's climate requires at least R18 to maintain a reasonable temperature in an attached garage. Better insulation means lower heating bills, less noise, and a more comfortable home." },
      { heading: 'Understanding R-Values', content: "R-value measures thermal resistance. For Ottawa we recommend R18 insulation: it keeps your garage 10–15°C warmer, reduces heating costs, and is ideal for both attached and detached garages, especially if you use the space as a workshop or want maximum comfort." },
      { heading: 'Top Pick: Garaga Standard+ (R18)', content: "Garaga is a Quebec-based manufacturer that designs specifically for Canadian winters. The Standard+ line offers R18 insulation, steel construction, and is available in dozens of finishes. Price installed: $1,800–$2,800 depending on size and style." },
      { heading: 'Best Value: Clopay Coachman (R18)', content: "Clopay's Coachman series offers R18 insulation with a realistic wood look at a fraction of the price of real wood. Durable, low-maintenance, and well-suited to Ottawa's freeze-thaw cycles. Price installed: $1,400–$2,200." },
      { heading: 'Premium Option: Garaga Prestige (R18)', content: "For homeowners who use their garage year-round, the Garaga Prestige series offers R18 insulation with a premium finish and 10-year warranty. Price installed: $2,600–$4,200." },
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
      { heading: 'High-Cycle Upgrades', content: "Garage Door Repair Ottawa recommends upgrading to high-cycle springs (25,000 or 50,000 cycle rating) when replacing. The cost premium is $60–$120, but they last 2–5x longer. For Ottawa homeowners who want to avoid repeat service calls, it's the smart choice." },
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
      { heading: 'Insulation ROI in Ottawa', content: "Upgrading from an uninsulated door to an R18 insulated door in Ottawa typically saves $150–$300/year in heating costs for an attached garage. That's a 6–10 year payback on a new door — a reasonable investment if you plan to stay in the home." },
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
  const url = `${SITE_URL}/blog/${slug}`;
  const description = blogMetaDescription(post);
  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: openGraphPage({ title: post.title, description, url }),
    twitter: { card: 'summary', title: post.title, description },
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

  const articleUrl = `${SITE_URL}/blog/${slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: blogMetaDescription(post),
    datePublished: post.date,
    author: { '@type': 'Organization', name: SITE_BRAND },
    publisher: { '@type': 'Organization', name: SITE_BRAND, url: SITE_URL },
    mainEntityOfPage: articleUrl,
    inLanguage: 'en-CA',
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
          <h1 className="display-xl" style={{ marginBottom: 20, lineHeight: 1.1 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: 20, color: 'var(--gray-400)', fontSize: '0.85rem', marginBottom: 32 }}>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
            <span>✍️ Garage Door Repair Ottawa</span>
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
              <h3 className="display-lg" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginBottom: 12 }}>NEED A GARAGE DOOR REPAIR IN OTTAWA?</h3>
              <p style={{ color: 'var(--gray-400)', marginBottom: 28, lineHeight: 1.75 }}>Same-day service across all Ottawa. Free diagnosis. Upfront pricing.</p>
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