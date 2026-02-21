'use client';

import { useState, useEffect } from 'react';
import Icon from './Icons';
import { PHONE, PHONE_HREF } from '../../lib/data';

export default function EmergencyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`emergency-bar${visible ? ' visible' : ''}`}
      id="emergency-bar"
    >
      <span style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Icon name="emergency" size={22} style={{ color: 'white' }} /> <strong>Garage door emergency?</strong> We arrive in 90 min or less.
      </span>
      <a href={PHONE_HREF} style={{ background: 'white', color: '#dc2626', padding: '8px 24px', borderRadius: 100, fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <Icon name="phone" size={20} /> Call Now: {PHONE}
      </a>
      <button
        onClick={() => setVisible(false)}
        style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontSize: '1.2rem', padding: '0 8px' }}
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
