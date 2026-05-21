import { BUSINESS_NAME } from '../../lib/data';
import LogoMark from './LogoMark';

export default function Logo({ compact = false, asLink = true }) {
  const className = compact ? 'logo logo-compact' : 'logo';
  const content = (
    <>
      <div className="logo-icon">
        <LogoMark className="logo-mark" />
      </div>
      <div className="logo-text">
        <div className="logo-line1">Ottawa</div>
        <div className="logo-divider" />
        <div className="logo-line2">GARAGE DOOR<br />REPAIR</div>
        {!compact && <div className="logo-line3">Licensed · Insured · 5.0 ⭐ Rated</div>}
      </div>
    </>
  );

  if (asLink) {
    return (
      <a href="/" className={className} aria-label={`${BUSINESS_NAME} - Home`}>
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}
