export default function TrustBadges() {
  return (
    <section className="trust-badges-homepage-section" aria-labelledby="trust-badges-heading">
      <div className="trust-badges-container-wrapper">
        <h2 id="trust-badges-heading" className="trust-badges-title">
          Trusted by Ottawa Homeowners
        </h2>
        <p className="trust-badges-subtitle">
          BBB Accredited Business • 5.0 Google Rating • HomeStars Verified
        </p>

        <div className="badges-container">
          {/* BBB Badge - CLICKABLE */}
          <a
            href="https://www.bbb.org/ottawa/customer-reviews/garage-doors/gds-garage-doors-openers-ottawa-in-stittsville-on-255126/add/"
            target="_blank"
            rel="nofollow"
            className="trust-badge"
          >
            <div className="badge-icon trust-badge-icon-img">
              <img
                src="https://seal-ottawa.bbb.org/customer-reviews/badge-4-bbb-255126.png"
                alt="BBB Accredited Business"
                width={115}
                height={85}
              />
            </div>
            <div className="trust-badge-text">
              <div className="badge-title">BBB</div>
              <div className="badge-subtitle">Accredited</div>
            </div>
          </a>

          {/* Google Reviews Badge - DISPLAY ONLY */}
          <div className="trust-badge-display">
            <div className="badge-icon trust-badge-icon-google">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div className="trust-badge-text">
              <div className="badge-title">Google</div>
              <div className="badge-stars">★★★★★</div>
              <div className="badge-rating">5.0</div>
            </div>
          </div>

          {/* HomeStars Badge - DISPLAY ONLY */}
          <div className="trust-badge-display">
            <div className="badge-icon trust-badge-icon-homestars">
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M27.9709 8.60423L26.1438 7.54906C25.9716 7.44955 25.7726 7.40485 25.5751 7.42263C24.7784 7.49426 22.6605 7.5505 23.1022 6.06556C23.1445 5.92375 23.0916 5.77089 22.9696 5.68771C22.7089 5.50986 22.4398 5.34064 22.1625 5.18008C18.1671 2.87359 13.4249 3.03174 9.69692 5.18247C8.60473 5.81259 9.19938 6.54484 9.69692 6.4761C13.0466 6.01269 16.7294 6.84528 16.2001 9.48058C16.1231 9.86275 15.9147 10.2865 15.6622 10.7377L6.28334 25.3981C6.17229 25.5717 6.19825 25.8 6.34679 25.9428C7.13565 26.6999 8.02786 27.3753 9.01767 27.9464C9.47916 28.2127 9.94978 28.4492 10.4271 28.6565C10.6338 28.7463 10.8747 28.6598 10.98 28.4607L20.1756 11.0621C20.253 10.9155 20.3502 10.7795 20.4698 10.6646C21.514 9.66278 22.4942 11.4751 22.8238 12.1875C22.907 12.3668 23.0436 12.5158 23.2152 12.6149L25.0448 13.6715C25.2289 13.7777 25.464 13.7147 25.5702 13.5306L28.1118 9.12869C28.218 8.94458 28.155 8.70951 27.9709 8.60327V8.60423Z"
                  fill="#261230"
                />
              </svg>
            </div>
            <div className="trust-badge-text">
              <div className="badge-title">HomeStars</div>
              <div className="badge-stars badge-stars-orange">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
