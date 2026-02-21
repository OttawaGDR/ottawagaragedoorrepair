export default function Logo({ compact = false, asLink = true }) {
  const className = compact ? 'logo logo-compact' : 'logo';
  const content = (
    <>
      <div className="logo-icon">
        <div className="logo-icon-shape">
          <div className="logo-icon-roof" />
          <div className="logo-icon-panels">
            <div className="logo-icon-panel" />
            <div className="logo-icon-panel" />
            <div className="logo-icon-panel" />
          </div>
          <div className="logo-icon-ground" />
        </div>
      </div>
      <div className="logo-text">
        <div className="logo-line1">Ottawa</div>
        <div className="logo-divider" />
        <div className="logo-line2">GARAGE DOOR<br />REPAIR</div>
        <div className="logo-line3">Licensed · Insured · 5.0 ⭐ Rated</div>
      </div>
    </>
  );

  if (asLink) {
    return (
      <a href="/" className={className} aria-label="Ottawa Garage Door Repair - Home">
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}
