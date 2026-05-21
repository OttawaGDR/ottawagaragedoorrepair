import FaqHub from '../components/FaqHub';
import { PHONE, PHONE_HREF } from '../../lib/data';
import { faqCategories, FAQ_TOTAL, getAllFaqItems } from '../../lib/faqPageData';

export const metadata = {
  title: 'FAQ — 33 Expert Answers',
  description: `Search ${FAQ_TOTAL} garage door FAQ answers for Ottawa — pricing, springs, openers, winter care, installs, and booking. Straight answers from a local repair crew.`,
  keywords: ['garage door FAQ Ottawa', 'garage door repair questions', 'garage door opener FAQ'],
  alternates: { canonical: 'https://www.ottawagaragedoorrepair.ca/faq' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: getAllFaqItems().map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FAQPage() {
  const topicCount = faqCategories.length;

  return (
    <div className="faq-hub-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="faq-hub-hero">
        <div className="container">
          <nav style={{ marginBottom: 24, fontSize: '0.85rem', color: 'var(--gray-400)' }}>
            <a href="/" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>
              Home
            </a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--orange)' }}>Help Centre</span>
          </nav>
          <div className="faq-hub-hero-inner">
            <span className="faq-hub-hero-kicker">Ottawa - GDR Help Centre</span>
            <h1 className="faq-hub-hero-title">
              Garage door questions, <em>answered clearly</em>
            </h1>
            <p className="faq-hub-hero-desc">
              Search or filter {FAQ_TOTAL} technician-written answers about repairs, openers, Ottawa winters, and booking — no fluff, no pressure.
            </p>
            <div className="faq-hub-hero-stats">
              <span className="faq-hub-hero-stat">
                <strong>{FAQ_TOTAL}</strong> answers
              </span>
              <span className="faq-hub-hero-stat">
                <strong>{topicCount}</strong> topics
              </span>
              <span className="faq-hub-hero-stat">
                <strong>Live</strong> search
              </span>
            </div>
          </div>
        </div>
      </header>

      <FaqHub categories={faqCategories} />

      <section style={{ background: 'var(--navy-mid)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 520 }}>
          <p style={{ color: 'var(--gray-400)', lineHeight: 1.75, marginBottom: 24 }}>
            Did not find your answer? Call us — we diagnose over the phone for free.
          </p>
          <a href={PHONE_HREF} className="btn-primary" style={{ fontSize: '1.05rem' }}>
            Call {PHONE}
          </a>
        </div>
      </section>
    </div>
  );
}
