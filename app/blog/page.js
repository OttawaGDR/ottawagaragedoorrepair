import { PHONE, PHONE_HREF } from '../../lib/data';
import BlogCategoryFilter from '../components/BlogCategoryFilter';

export const metadata = {
  title: 'Garage Door Repair & Opener Tips Ottawa | Ottawa - GDR Blog',
  description: 'Expert advice on garage door repairs, garage door opener repair, and maintenance in Ottawa. Pricing, springs, winter tips from Ottawa - GDR.',
  keywords: ['garage door repair Ottawa', 'garage door opener repair Ottawa', 'garage door tips Ottawa'],
  alternates: { canonical: 'https://ottawagaragedoorrepair.ca/blog' },
};

const posts = [
  { slug: 'garage-door-repair-cost-ottawa', emoji: '💰', cat: 'Pricing', title: 'How Much Does Garage Door Repair Cost in Ottawa? (2026 Guide)', excerpt: 'Complete pricing breakdown for every type of garage door repair in Ottawa. No surprises.', date: 'Jan 15, 2026', readTime: '8 min read' },
  { slug: 'broken-spring-ottawa-what-to-do', emoji: '🔩', cat: 'Emergency', title: 'Broken Garage Door Spring in Ottawa? Here is Exactly What To Do', excerpt: 'Your spring just snapped. The door will not open. Here is what to do and what it costs to fix.', date: 'Jan 8, 2026', readTime: '6 min read' },
  { slug: 'garage-door-not-opening-cold-weather', emoji: '❄️', cat: 'Winter Tips', title: 'Garage Door Not Opening in Cold Weather? Ottawa Fix Guide', excerpt: 'The 7 most common reasons your door stops working when Ottawa temperatures drop below -15C.', date: 'Dec 20, 2025', readTime: '7 min read' },
  { slug: 'best-insulated-garage-doors-ottawa', emoji: '🏠', cat: 'Buying Guide', title: 'Best Insulated Garage Doors for Ottawa Homes (2026)', excerpt: 'We compare the top insulated garage door brands by R-value, cost, and durability for Ottawa.', date: 'Dec 5, 2025', readTime: '10 min read' },
  { slug: 'how-long-do-garage-door-springs-last', emoji: '⏰', cat: 'Maintenance', title: 'How Long Do Garage Door Springs Last? Ottawa Climate Impact', excerpt: 'Standard springs are rated for 10,000 cycles. Ottawa cold cuts that significantly.', date: 'Nov 18, 2025', readTime: '5 min read' },
  { slug: 'smart-garage-door-opener-ottawa', emoji: '📱', cat: 'Smart Home', title: 'Best Smart Garage Door Openers for Ottawa Homes (2026)', excerpt: 'Which smart openers hold up in Ottawa brutal winters? Our honest 2026 review.', date: 'Nov 2, 2025', readTime: '9 min read' },
  { slug: 'garage-door-maintenance-checklist-ottawa', emoji: '📋', cat: 'Maintenance', title: 'The Complete Ottawa Garage Door Maintenance Checklist', excerpt: 'A season-by-season checklist to keep your door running through Ottawa extreme climate.', date: 'Oct 15, 2025', readTime: '7 min read' },
  { slug: 'garage-door-off-track-ottawa', emoji: '🚨', cat: 'Repairs', title: 'Garage Door Off Track? Ottawa Guide to Causes and Repair Costs', excerpt: 'An off-track door is a safety hazard. Learn causes, risks and what repair costs in Ottawa.', date: 'Oct 1, 2025', readTime: '6 min read' },
  { slug: 'replace-vs-repair-garage-door-ottawa', emoji: '🔄', cat: 'Buying Guide', title: 'Replace vs Repair Your Garage Door? Ottawa Guide', excerpt: 'When does repair make sense vs full replacement? The framework we use for every Ottawa customer.', date: 'Sep 18, 2025', readTime: '8 min read' },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <span className="badge" style={{ marginBottom: 24, display: 'inline-flex' }}>✍️ Expert Garage Door Advice</span>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            TIPS FOR<br /><span className="text-gradient">OTTAWA</span><br />HOMEOWNERS
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Honest advice on garage door repair, maintenance, and buying decisions from Ottawa most trusted local team.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 20px' }}>
        <div className="container">
          <span className="section-label">Featured Article</span>
          <a href={'/blog/' + featured.slug} className="glass-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, textDecoration: 'none', color: 'inherit', overflow: 'hidden', marginTop: 16 }}>
            <div style={{ background: 'linear-gradient(135deg, var(--navy-mid), var(--navy-light))', minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.12), transparent 70%)' }} />
              {featured.emoji}
            </div>
            <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="service-tag" style={{ marginBottom: 20, display: 'inline-block', width: 'fit-content' }}>{featured.cat}</span>
              <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', lineHeight: 1.35, color: 'white', marginBottom: 16 }}>{featured.title}</h2>
              <p style={{ color: 'var(--gray-400)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: 24 }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 20, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
                  <span>📅 {featured.date}</span>
                  <span>⏱ {featured.readTime}</span>
                </div>
                <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.88rem' }}>Read Article →</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <span className="section-label">Browse by Category</span>
          <BlogCategoryFilter posts={rest} />
        </div>
      </section>

      <section style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 className="display-xl" style={{ marginBottom: 12, lineHeight: 1.1 }}>
            SKIP THE BLOG.<br /><span style={{ color: 'var(--orange)' }}>JUST CALL US.</span>
          </h2>
          <p style={{ color: 'var(--gray-400)', marginBottom: 32, lineHeight: 1.75 }}>
            Our technicians can diagnose your issue over the phone for free and give you a real price before we arrive. <a href="/contact" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Request a callback</a> or <a href="/services" style={{ color: 'var(--orange)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>browse our services</a>.
          </p>
          <a href={PHONE_HREF} className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 44px' }}>📞 Call {PHONE}</a>
        </div>
      </section>
    </>
  );
}
