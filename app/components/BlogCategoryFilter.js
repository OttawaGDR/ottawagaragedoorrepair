'use client';

import { useState, useMemo } from 'react';

const CATEGORIES = ['All', 'Pricing', 'Emergency', 'Winter Tips', 'Maintenance', 'Buying Guide', 'Smart Home', 'Repairs'];

export default function BlogCategoryFilter({ posts }) {
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => {
    if (category === 'All') return posts;
    return posts.filter((p) => p.cat === category);
  }, [posts, category]);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16, marginBottom: 28 }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            style={{
              padding: '10px 20px',
              borderRadius: 100,
              border: category === cat ? '2px solid var(--orange)' : '1px solid rgba(255,255,255,0.2)',
              background: category === cat ? 'rgba(249,115,22,0.15)' : 'rgba(255,255,255,0.05)',
              color: category === cat ? 'white' : 'rgba(255,255,255,0.8)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
        {filtered.map((post) => (
          <a key={post.slug} href={'/blog/' + post.slug} className="glass-card card-shine" style={{ textDecoration: 'none', color: 'inherit', display: 'block', overflow: 'hidden' }}>
            <div style={{ height: 160, background: 'linear-gradient(135deg, var(--navy-light), var(--navy-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(249,115,22,0.08), transparent 70%)' }} />
              {post.emoji}
            </div>
            <div style={{ padding: '24px 28px' }}>
              <span className="service-tag" style={{ marginBottom: 14, display: 'inline-block' }}>{post.cat}</span>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.45, color: 'white', marginBottom: 10 }}>{post.title}</h3>
              <p style={{ color: 'var(--gray-400)', fontSize: '0.87rem', lineHeight: 1.65, marginBottom: 20 }}>{post.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                <span>{post.date}</span><span>{post.readTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
