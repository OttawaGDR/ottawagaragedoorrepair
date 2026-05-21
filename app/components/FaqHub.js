'use client';

import { useMemo, useState, useId } from 'react';
import { PHONE, PHONE_HREF } from '../../lib/data';
import { FAQ_TOTAL } from '../../lib/faqPageData';

export default function FaqHub({ categories }) {
  const searchId = useId();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState(null);

  const allItems = useMemo(
    () =>
      categories.flatMap((cat) =>
        cat.questions.map((item) => ({
          ...item,
          categoryId: cat.id,
          categoryLabel: cat.label,
        }))
      ),
    [categories]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.categoryId === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
    });
  }, [allItems, query, activeCategory]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));
  const collapseAll = () => setOpenId(null);

  const categoryCounts = useMemo(() => {
    const map = { all: allItems.length };
    categories.forEach((c) => {
      map[c.id] = c.questions.length;
    });
    return map;
  }, [categories, allItems.length]);

  return (
    <section className="faq-hub-panel section-light" aria-labelledby="faq-hub-heading">
      <div className="container faq-hub-container">
        <div className="faq-hub-toolbar">
          <div className="faq-hub-search-wrap">
            <label className="faq-hub-search-label" htmlFor={searchId}>
              Search questions
            </label>
            <input
              id={searchId}
              type="search"
              className="faq-hub-search"
              placeholder="Try “spring”, “opener”, “winter”, “cost”…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            {query && (
              <button type="button" className="faq-hub-search-clear" onClick={() => setQuery('')} aria-label="Clear search">
                ×
              </button>
            )}
          </div>
          <div className="faq-hub-toolbar-meta">
            <span className="faq-hub-count">
              Showing <strong>{filtered.length}</strong> of {FAQ_TOTAL}
            </span>
            <div className="faq-hub-toolbar-actions">
              <button type="button" className="faq-hub-text-btn" onClick={collapseAll}>
                Collapse all
              </button>
            </div>
          </div>
        </div>

        <div className="faq-hub-layout">
          <aside className="faq-hub-sidebar" aria-label="Filter by topic">
            <button
              type="button"
              className={`faq-hub-topic ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <span>All topics</span>
              <span className="faq-hub-topic-num">{categoryCounts.all}</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`faq-hub-topic ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.shortLabel}</span>
                <span className="faq-hub-topic-num">{categoryCounts[cat.id]}</span>
              </button>
            ))}
          </aside>

          <div className="faq-hub-main">
            <h2 id="faq-hub-heading" className="visually-hidden">
              Garage door FAQ answers
            </h2>

            {filtered.length === 0 ? (
              <div className="faq-hub-empty light-card">
                <p className="faq-hub-empty-title">No matches for that search</p>
                <p className="faq-hub-empty-desc">Try different keywords or browse all topics on the left.</p>
                <button
                  type="button"
                  className="faq-hub-btn-dark"
                  style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', borderRadius: 100, fontWeight: 600, cursor: 'pointer' }}
                  onClick={() => {
                    setQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <ul className="faq-hub-list">
                {filtered.map((item, index) => {
                  const isOpen = openId === item.id;
                  const num = String(index + 1).padStart(2, '0');
                  return (
                    <li key={item.id} className={`faq-hub-card light-card ${isOpen ? 'is-open' : ''}`}>
                      <button
                        type="button"
                        className="faq-hub-card-trigger"
                        aria-expanded={isOpen}
                        aria-controls={`${item.id}-answer`}
                        onClick={() => toggle(item.id)}
                      >
                        <span className="faq-hub-card-num" aria-hidden="true">
                          {num}
                        </span>
                        <span className="faq-hub-card-body">
                          <span className="faq-hub-card-topic">{item.categoryLabel}</span>
                          <span className="faq-hub-card-q">{item.q}</span>
                        </span>
                        <span className="faq-hub-card-chevron" aria-hidden="true" />
                      </button>
                      <div
                        id={`${item.id}-answer`}
                        className="faq-hub-card-answer"
                        role="region"
                        hidden={!isOpen}
                      >
                        <p>{item.a}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        <div className="faq-hub-bottom-cta light-card">
          <div>
            <p className="faq-hub-bottom-label">Still stuck?</p>
            <p className="faq-hub-bottom-text">
              Our technicians answer garage door questions by phone at no charge — describe the issue and get a real answer before we visit.
            </p>
          </div>
          <div className="faq-hub-bottom-actions">
            <a href={PHONE_HREF} className="btn-primary">
              Call {PHONE}
            </a>
            <a href="/contact" className="btn-secondary faq-hub-btn-dark">
              Request callback
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
