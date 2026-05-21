/** Shared limits for callback / request forms */
export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024; // 4 MB (Vercel-friendly)
export const ACCEPTED_ATTACHMENT_TYPES =
  'image/jpeg,image/png,image/webp,image/gif,image/heic,application/pdf';
export const ACCEPTED_ATTACHMENT_LABEL = 'JPG, PNG, WebP, or PDF — max 4 MB';

export const PREFERRED_TIME_LABELS = {
  '': 'Any time',
  morning: 'Morning (8AM – 12PM)',
  afternoon: 'Afternoon (12PM – 5PM)',
  evening: 'Evening (5PM – 9PM)',
  asap: 'As soon as possible / Emergency',
};

export function buildSmsBody({ name, phone, serviceTitle, areaName, message, timeLabel, hasAttachment }) {
  return [
    'Service request',
    name && `Name: ${name}`,
    phone && `Phone: ${phone}`,
    serviceTitle && `Service: ${serviceTitle}`,
    areaName && `Area: ${areaName}`,
    message && `Issue: ${message}`,
    `Preferred: ${timeLabel}`,
    hasAttachment && 'Photo attached via form (see email).',
  ]
    .filter(Boolean)
    .join('\n');
}
