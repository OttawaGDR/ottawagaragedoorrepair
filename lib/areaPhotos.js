/**
 * Unique work photos per service area — local files preferred for SEO; wsimg as fallback.
 * Each suburb gets one primary image; avoid reusing the same src on adjacent areas when possible.
 */

const WSIMG = 'https://img1.wsimg.com/isteam/ip/1b277bec-adfe-487a-a8c7-5e77b97e6d1d';
const ws = (file) =>
  `${WSIMG}/${file}/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:900,cg:true`;

/** @type {Record<string, { src: string, alt: string, caption: string, category: 'install' | 'repair' }>} */
const AREA_PHOTOS = {
  gloucester: {
    src: '/images/garage-door-new-install-gloucester.jpg',
    alt: 'New white raised-panel garage door installation on brick home in Gloucester, Ottawa',
    caption: 'New door install — Gloucester',
    category: 'install',
  },
  kanata: {
    src: '/images/garage-door-new-install-kanata.jpg',
    alt: 'New insulated garage door installed on a Kanata home — Ottawa Garage Door Repair',
    caption: 'New door install — Kanata',
    category: 'install',
  },
  barrhaven: {
    src: '/images/garage-door-new-install-barrhaven.jpg',
    alt: 'New garage door installation in Barrhaven subdivision — steel sectional door',
    caption: 'New door install — Barrhaven',
    category: 'install',
  },
  orleans: {
    src: '/images/garage-door-new-install-orleans.jpg',
    alt: 'Two new garage doors installed in Orleans, Ottawa — double-car upgrade',
    caption: 'Twin door install — Orleans',
    category: 'install',
  },
  nepean: {
    src: ws('20251025_142148.jpg'),
    alt: 'Two new garage doors replaced in Nepean, Ottawa',
    caption: 'Double-door replacement — Nepean',
    category: 'install',
  },
  greely: {
    src: ws('20250124_095313.jpg'),
    alt: 'New garage door and opener installed in Greely, South Ottawa',
    caption: 'Door and opener — Greely',
    category: 'install',
  },
  stittsville: {
    src: '/images/garage-door-new-install-stittsville.jpg',
    alt: 'New garage door installed in Stittsville, West Ottawa',
    caption: 'New door install — Stittsville',
    category: 'install',
  },
  'riverside-south': {
    src: ws('blob-2c95119.png'),
    alt: 'Garage door installed on a new-build home in Riverside South, Ottawa',
    caption: 'New-build install — Riverside South',
    category: 'install',
  },
  'findlay-creek': {
    src: ws('blob-fddabbe.png'),
    alt: 'New insulated garage door installation in Findlay Creek, Ottawa',
    caption: 'Insulated door — Findlay Creek',
    category: 'install',
  },
  manotick: {
    src: '/images/garage-door-new-install-ottawa.jpg',
    alt: 'New garage door installed on an Ottawa-area estate home — Manotick service',
    caption: 'Premium install — Manotick',
    category: 'install',
  },
  'carleton-place': {
    src: ws('IMG-20260206-WA0000(1).jpg'),
    alt: 'New insulated garage door installation near Carleton Place and West Ottawa',
    caption: 'Insulated door — Carleton Place area',
    category: 'install',
  },
  'beacon-hill': {
    src: ws('20250222_164415.jpg'),
    alt: 'Complete garage door service in Beacon Hill, East Ottawa',
    caption: 'Full service — Beacon Hill',
    category: 'repair',
  },
  'blackburn-hamlet': {
    src: ws('20250110_075357-COLLAGE.jpg'),
    alt: 'Garage door spring repair before and after in Blackburn Hamlet, Ottawa',
    caption: 'Spring repair — Blackburn Hamlet',
    category: 'repair',
  },
  cumberland: {
    src: '/images/garage-door-emergency-repair-ottawa.jpg',
    alt: 'Off-track garage door emergency repair in Cumberland, East Ottawa',
    caption: 'Emergency realignment — Cumberland',
    category: 'repair',
  },
  navan: {
    src: ws('20251015_061012%20(1).jpg'),
    alt: 'Off-track garage door repair in Navan, rural East Ottawa',
    caption: 'Off-track repair — Navan',
    category: 'repair',
  },
  'alta-vista': {
    src: '/images/garage-door-springs-ottawa.png',
    alt: 'Garage door spring replacement in Alta Vista, Central Ottawa',
    caption: 'Spring replacement — Alta Vista',
    category: 'repair',
  },
  'hunt-club': {
    src: '/images/garage-door-cable-repair-ottawa.png',
    alt: 'Garage door cable and hardware repair in Hunt Club, Ottawa',
    caption: 'Cable repair — Hunt Club',
    category: 'repair',
  },
  westboro: {
    src: '/images/garage-door-opener-repair-ottawa.png',
    alt: 'Garage door opener repair and installation in Westboro, Ottawa',
    caption: 'Opener service — Westboro',
    category: 'repair',
  },
  vanier: {
    src: '/images/garage-door-opener-gear-replacement-ottawa.png',
    alt: 'Opener gear replacement in Vanier, East Ottawa',
    caption: 'Gear replacement — Vanier',
    category: 'repair',
  },
  'rockcliffe-park': {
    src: '/images/garage-door-panel-repair-ottawa.jpg',
    alt: 'Garage door panel repair in Rockcliffe Park, Ottawa',
    caption: 'Panel repair — Rockcliffe Park',
    category: 'repair',
  },
  'sandy-hill': {
    src: ws('20250115_105310.jpg'),
    alt: 'Garage door cable repair in Sandy Hill, downtown Ottawa',
    caption: 'Cable service — Sandy Hill',
    category: 'repair',
  },
  glebe: {
    src: ws('20250121_200049.jpg'),
    alt: 'Garage door opener gear repair in the Glebe, Ottawa',
    caption: 'Opener repair — Glebe',
    category: 'repair',
  },
  carp: {
    src: ws('20250121_090341.jpg'),
    alt: 'Garage door opener gear service in Carp, West Ottawa village',
    caption: 'Opener gear — Carp',
    category: 'repair',
  },
  dunrobin: {
    src: '/images/garage-door-weather-stripping-ottawa.png',
    alt: 'Garage door weather stripping upgrade in Dunrobin, West Carleton',
    caption: 'Weather seal — Dunrobin',
    category: 'repair',
  },
  richmond: {
    src: '/images/garage-door-bottom-seal-ottawa.png',
    alt: 'Garage door bottom seal replacement in Richmond, South Ottawa',
    caption: 'Bottom seal — Richmond',
    category: 'repair',
  },
  'constance-bay': {
    src: ws('20251020_211230.jpg'),
    alt: 'Winter weather seal installation on a garage door in Constance Bay, Ottawa',
    caption: 'Winter seal — Constance Bay',
    category: 'repair',
  },
  osgoode: {
    src: ws('20250128_131110.jpg'),
    alt: 'Cracked garage door panel repair in Osgoode, rural South Ottawa',
    caption: 'Panel repair — Osgoode',
    category: 'repair',
  },
  metcalfe: {
    src: ws('IMG-20260206-WA0001(8).jpg'),
    alt: 'Garage door weather stripping service in Metcalfe, South Ottawa',
    caption: 'Weather seal — Metcalfe',
    category: 'repair',
  },
  kemptville: {
    src: '/images/garage-door-new-install-ottawa.jpg',
    alt: 'New garage door installation serving Kemptville and North Grenville from Ottawa',
    caption: 'New door — Kemptville area',
    category: 'install',
  },
  embrun: {
    src: '/images/garage-door-new-install-ottawa.jpg',
    alt: 'New garage door installation in Embrun and Russell Township — Ottawa crew',
    caption: 'Install — Embrun',
    category: 'install',
  },
  russell: {
    src: ws('blob-fddabbe.png'),
    alt: 'New insulated garage door install serving Russell village from Ottawa',
    caption: 'Insulated install — Russell',
    category: 'install',
  },
  arnprior: {
    src: ws('IMG-20260206-WA0000(1).jpg'),
    alt: 'Insulated garage door install serving Arnprior and Ottawa Valley west',
    caption: 'Insulated door — Arnprior area',
    category: 'install',
  },
  almonte: {
    src: '/images/garage-door-new-install-kanata.jpg',
    alt: 'New garage door installation serving Almonte and Mississippi Mills',
    caption: 'West-valley install — Almonte',
    category: 'install',
  },
  casselman: {
    src: ws('blob-fddabbe.png'),
    alt: 'New insulated garage door install in Casselman and Prescott-Russell',
    caption: 'Insulated install — Casselman',
    category: 'install',
  },
  rockland: {
    src: ws('20251025_142148.jpg'),
    alt: 'Double garage door replacement in Rockland and Clarence-Rockland',
    caption: 'Twin doors — Rockland',
    category: 'install',
  },
  'smiths-falls': {
    src: '/images/garage-door-new-install-stittsville.jpg',
    alt: 'Garage door installation serving Smiths Falls and the Rideau region',
    caption: 'Install — Smiths Falls area',
    category: 'install',
  },
  winchester: {
    src: '/images/garage-door-new-install-barrhaven.jpg',
    alt: 'New garage door installation serving Winchester and North Dundas',
    caption: 'South-end install — Winchester',
    category: 'install',
  },
  limoges: {
    src: '/images/garage-door-new-install-orleans.jpg',
    alt: 'Garage door install serving Limoges and Prescott-Russell east of Ottawa',
    caption: 'East-end install — Limoges',
    category: 'install',
  },
};

/** Homepage — new door installs (featured first). */
export const newDoorGalleryImages = [
  AREA_PHOTOS.gloucester,
  AREA_PHOTOS.kanata,
  AREA_PHOTOS.barrhaven,
  AREA_PHOTOS.orleans,
  AREA_PHOTOS.nepean,
  AREA_PHOTOS.greely,
  {
    src: '/images/garage-door-new-install-ottawa.jpg',
    alt: 'New garage door installed in Ottawa — raised-panel steel door on residential home',
    caption: 'New door install — Ottawa',
    category: 'install',
  },
  AREA_PHOTOS.stittsville,
];

/** Other recent work for homepage gallery (repairs + mixed). */
export const repairGalleryImages = [
  {
    src: '/images/garage-door-panel-repair-ottawa.jpg',
    alt: 'Broken garage door panel with cracked frame — panel repair Ottawa',
    caption: 'Panel repair',
    category: 'repair',
  },
  {
    src: '/images/garage-door-emergency-repair-ottawa.jpg',
    alt: 'Garage door off track — emergency repair Ottawa',
    caption: 'Off-track emergency',
    category: 'repair',
  },
  {
    src: '/images/garage-door-springs-ottawa.png',
    alt: 'Broken garage door springs — spring replacement Ottawa',
    caption: 'Spring replacement',
    category: 'repair',
  },
  {
    src: '/images/garage-door-cable-repair-ottawa.png',
    alt: 'Garage door lift cable repair Ottawa',
    caption: 'Cable repair',
    category: 'repair',
  },
  {
    src: '/images/garage-door-opener-repair-ottawa.png',
    alt: 'Garage door opener repair Ottawa',
    caption: 'Opener repair',
    category: 'repair',
  },
  {
    src: '/images/garage-door-weather-stripping-ottawa.png',
    alt: 'Garage door weather stripping Ottawa',
    caption: 'Weather stripping',
    category: 'repair',
  },
];

export function getAreaPhoto(slug) {
  return AREA_PHOTOS[slug] || null;
}

/** Absolute URL for Open Graph / JSON-LD image on area pages. */
export function getAreaPhotoAbsolute(slug, siteUrl) {
  const photo = getAreaPhoto(slug);
  if (!photo) return null;
  const src = photo.src;
  return src.startsWith('http') ? src : `${siteUrl}${src}`;
}

export function areaPhotoAltForMeta(areaName, slug) {
  const photo = getAreaPhoto(slug);
  if (photo?.alt) return photo.alt;
  return `Garage door repair and new door installation in ${areaName}, Ottawa`;
}
