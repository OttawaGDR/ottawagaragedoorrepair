import { PHONE, JOBS_TOTAL, FIRST_VISIT_STAT } from './data';

/** Differentiated marketing copy — avoid mirroring GDS Ottawa site wording */

export const EMERGENCY_REPAIR_INTRO =
  'Spring failed overnight? Door stuck halfway or off the tracks? We dispatch same-day across Ottawa with springs, cables, rollers, and opener parts on the truck — so most call-outs wrap up in a single visit.';

export const trustBarItems = [
  { icon: 'shield', label: 'Licensed & Insured' },
  { icon: 'bolt', label: 'Same-Day Scheduling' },
  { icon: 'dollar', label: 'Price Before Work Starts' },
  { icon: 'shield', label: 'Workmanship Guarantee' },
  { icon: 'emergency', label: '24/7 Callback Line' },
  { icon: 'mappin', label: 'Ottawa-Owned Crew' },
  { icon: 'phone', label: 'Talk to a Real Person' },
];

export const heroFeaturePills = [
  { icon: 'bolt', label: 'Same-Day Dispatch' },
  { icon: 'dollar', label: 'Price Before Work' },
  { icon: 'shield', label: 'Guaranteed Labour' },
];

export const howItWorksSteps = [
  {
    num: '01',
    title: 'Tell Us What Happened',
    desc: `Call ${PHONE} or request service online. Describe the issue — we confirm timing and a realistic price range with no pressure.`,
  },
  {
    num: '02',
    title: 'On-Site Assessment',
    desc: 'Your technician arrives within 90 minutes with common parts on board. We find the root cause and put the full price in writing before any repair starts.',
  },
  {
    num: '03',
    title: 'Repair & Safety Check',
    desc: `We complete the fix the same day when possible, then balance the door and test sensors. ${FIRST_VISIT_STAT} jobs finish in one trip — backed by our warranty.`,
  },
];

export const howItWorksPromiseItems = [
  { label: 'Under 90 Min', sub: 'Typical Arrival' },
  { label: 'Written Price', sub: 'Before We Start' },
  { label: 'Stocked Trucks', sub: `${FIRST_VISIT_STAT} One-Trip Fix` },
  { label: 'Local Crew', sub: 'Ottawa Based' },
];

export const whyChooseUsCards = [
  { icon: 'truck', title: 'Stocked Mobile Workshop', desc: `Springs, cables, rollers, and opener parts travel with us — ${FIRST_VISIT_STAT} jobs done without a second appointment.` },
  { icon: 'dollar', title: 'Price Locked Upfront', desc: 'You approve a written total before tools come out. Evening and weekend calls are never surcharged.' },
  { icon: 'shield', title: 'Workmanship Guarantee', desc: 'Repairs include parts and labour coverage; new door installs backed by a 5-year installation warranty.' },
  { icon: 'weather', title: 'Built for Ottawa Winters', desc: 'Cold-rated hardware, freeze-thaw tune-ups, and seal upgrades sized for -30°C and road salt.' },
  { icon: 'mappin', title: 'Local Ottawa Crew', desc: 'Technicians based in Ottawa — not a franchise call centre or lead broker.' },
  { icon: 'phone', title: 'Live Emergency Line', desc: 'A technician answers after hours when you need a stuck or off-track door secured tonight.' },
];

export const servicePageTrustBullets = [
  'Ontario-licensed technicians',
  'Heavy parts stocked on every truck',
  'Approved price in writing first',
  'Labour guarantee on every repair',
  'Same-day booking across Ottawa',
  'Cold-climate garage door specialists',
];

export const aboutStoryCards = [
  { icon: '🏠', title: 'Locally Owned Team', desc: 'A small Ottawa crew — not a franchise network or lead-generation marketplace.' },
  { icon: '📋', title: 'Fully Licensed & Insured', desc: '$2M liability coverage on every visit. Credentials available on request before we arrive.' },
  { icon: '🔩', title: 'Stocked Service Vans', desc: 'Common springs, cables, rollers, and opener parts ride with us — fewer wait-and-return visits.' },
  { icon: '💬', title: 'Phone Consult First', desc: 'Describe the problem and get a realistic range before we dispatch — no bait-and-switch on site.' },
  { icon: '❄️', title: 'Winter-Ready Hardware', desc: 'Cold-rated springs, low-temp lubricants, and durable seals kept in stock year-round.' },
  { icon: '🇨🇦', title: 'Hire & Buy Local', desc: 'We work with Canadian suppliers and employ technicians who live in the Ottawa area.' },
];

export const gallerySection = {
  label: 'Our Work',
  title: 'Recent Service Calls',
  titleAccent: 'in Ottawa',
  subtitle: 'Springs, openers, installs, and seal work from neighbourhoods we serve every week.',
};

export const servicesGallerySection = {
  label: 'Field Photos',
  title: 'Recent Service Calls',
  titleAccent: 'Across Ottawa',
  subtitle: 'Documented repairs and installs from our technicians — not stock photography.',
};

export const finalCtaCopy = {
  badge: '🟢 DISPATCH OPEN — OTTAWA & SUBURBS',
  subtitle:
    'Open 9 AM–9 PM daily. Emergency line overnight. Most repairs wrapped up in one trip.',
};
