'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryImage({ src, alt, caption }) {
  const [error, setError] = useState(false);
  const isExternal = typeof src === 'string' && src.startsWith('http');

  if (error) {
    return (
      <>
        <div
          style={{
            aspectRatio: '4/3',
            background: 'rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gray-400)',
            fontSize: '0.85rem',
          }}
        >
          Add photo to public/gallery
        </div>
        {caption && (
          <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', fontWeight: 600 }}>{caption}</span>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div style={{ position: 'relative', aspectRatio: '4/3', background: 'rgba(255,255,255,0.04)' }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          unoptimized={isExternal}
          onError={() => setError(true)}
        />
      </div>
      {caption && (
        <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--gray-400)', fontWeight: 600 }}>{caption}</span>
        </div>
      )}
    </>
  );
}
