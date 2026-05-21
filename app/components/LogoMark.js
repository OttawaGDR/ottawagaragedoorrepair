/** Same mark as app/icon.svg (favicon) — navy tile, orange house, light door */
export default function LogoMark({ className = 'logo-mark' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="6" fill="#0f172a" />
      <path fill="#f97316" d="M6 14 L16 7 L26 14 V26 H6 Z" />
      <rect x="11" y="17" width="10" height="9" rx="1" fill="#e2e8f0" />
    </svg>
  );
}
