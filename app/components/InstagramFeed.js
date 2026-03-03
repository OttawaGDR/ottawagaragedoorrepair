'use client';

import { useEffect, useState } from 'react';
import { INSTAGRAM_URL } from '../../lib/data';

export default function InstagramFeed() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/instagram')
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch(() => {
        setPosts([]);
        setLoading(false);
      });
  }, []);

  const hasPosts = Array.isArray(posts) && posts.length > 0;

  return (
    <section className="section instagram-section" aria-labelledby="instagram-heading">
      <div className="container">
        <div className="instagram-header">
          <span className="section-label">Follow Us</span>
          <h2 id="instagram-heading" className="heading-xl reveal">
            Latest from <span className="text-orange">Instagram</span>
          </h2>
          <p className="instagram-intro">
            See our garage door repairs, installations, and Ottawa-area service in action.
          </p>
        </div>

        {loading ? (
          <div className="instagram-grid instagram-grid-placeholder">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="instagram-card instagram-card-skeleton" aria-hidden="true">
                <div className="instagram-card-image" />
              </div>
            ))}
          </div>
        ) : hasPosts ? (
          <div className="instagram-grid">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-card glass-card card-shine"
                aria-label={post.caption || 'View on Instagram'}
              >
                <div className="instagram-card-image">
                  <img
                    src={post.thumbnailUrl}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  {post.mediaType === 'VIDEO' && (
                    <span className="instagram-video-badge" aria-hidden="true">▶</span>
                  )}
                </div>
                {post.caption && (
                  <p className="instagram-card-caption">{post.caption}</p>
                )}
              </a>
            ))}
          </div>
        ) : (
          <div className="instagram-fallback">
            <div className="instagram-fallback-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <a
                  key={i}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-card glass-card instagram-fallback-card"
                >
                  <div className="instagram-card-image instagram-placeholder-bg">
                    <svg className="instagram-placeholder-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
            <p className="instagram-fallback-text">
              Follow <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="instagram-link">@ottawagaragedoor</a> for repair photos, tips, and same-day service updates.
            </p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary instagram-cta">
              View Instagram
            </a>
          </div>
        )}

        {hasPosts && (
          <div className="instagram-footer">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Follow @ottawagaragedoor
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
