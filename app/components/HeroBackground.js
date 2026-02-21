/** Global motion background (orbs, grid, aurora, rays, particles) — same as front page hero. Used in layout so every page has it. */
export default function HeroBackground() {
  return (
    <div className="page-motion-bg" aria-hidden="true">
      <div className="motion-orb motion-orb-1" />
      <div className="motion-orb motion-orb-2" />
      <div className="motion-orb motion-orb-3" />
      <div className="motion-grid-overlay" />
      {[
        { top: '20%', dur: '12s', delay: '0s' },
        { top: '45%', dur: '15s', delay: '1s' },
        { top: '70%', dur: '18s', delay: '0.5s' },
        { top: '85%', dur: '14s', delay: '1.5s' },
      ].map((a, i) => (
        <div key={`a-${i}`} className="motion-aurora" style={{ top: a.top, '--a-duration': a.dur, '--a-delay': a.delay }} />
      ))}
      {[
        { top: '15%', dur: '20s', delay: '0s' },
        { top: '60%', dur: '25s', delay: '2s' },
      ].map((r, i) => (
        <div key={`r-${i}`} className="motion-ray" style={{ top: r.top, '--r-duration': r.dur, '--r-delay': r.delay }} />
      ))}
      {[
        [10, '15s', '0s', -50], [25, '18s', '0.3s', 30], [40, '20s', '0.6s', -80], [55, '16s', '0.9s', 60],
        [70, '22s', '1.2s', -30], [85, '19s', '1.5s', 90], [15, '17s', '0.2s', -70], [30, '21s', '0.5s', 40],
        [45, '14s', '0.8s', -60], [60, '23s', '1.1s', 70], [75, '16s', '1.4s', -40], [90, '20s', '0.1s', 50],
      ].map(([left, dur, delay, offset], i) => (
        <div
          key={`p-${i}`}
          className="motion-particle"
          style={{
            left: `${left}%`,
            '--p-duration': dur,
            '--p-delay': delay,
            '--p-x': `${offset}px`,
          }}
        />
      ))}
      {[
        { top: '25%', dur: '10s', delay: '0s' },
        { top: '50%', dur: '13s', delay: '1s' },
        { top: '75%', dur: '11s', delay: '0.5s' },
      ].map((gl, i) => (
        <div key={`g-${i}`} className="motion-glow-line" style={{ top: gl.top, '--gl-duration': gl.dur, '--gl-delay': gl.delay }} />
      ))}
    </div>
  );
}
