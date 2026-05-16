import React, { useEffect, useRef } from 'react';

const WaveMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number, cols: number, rows: number, t = 0;
    let animationFrameId: number;

    const COLS = 32;
    const ROWS = 20;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      cols = COLS;
      rows = ROWS;
    };

    // Wave height at grid point (cx, cy) at time t
    const waveY = (cx: number, cy: number, time: number) => {
      // Multiple wave layers for organic look
      const w1 = Math.sin(cx * Math.PI * 2.2 - time * 0.7) * 0.09;
      const w2 = Math.sin(cx * Math.PI * 1.4 + cy * Math.PI * 0.8 - time * 0.5) * 0.07;
      const w3 = Math.sin(cx * Math.PI * 3.1 - time * 1.1 + cy * 1.2) * 0.04;
      const w4 = Math.cos(cx * Math.PI * 0.9 + time * 0.3) * 0.06;
      // Terrain base: center-high ridge
      const base = Math.pow(Math.sin(cx * Math.PI), 1.2) * 0.18;
      return base + w1 + w2 + w3 + w4;
    };

    const project = (cx: number, cy: number, wh: number) => {
      // Perspective projection: grid lays on a tilted plane
      const perspY = 0.38 + cy * 0.38; // 0.38 to 0.76 of screen height
      const perspScale = 0.3 + cy * 0.9; // narrower far, wider near

      const screenX = W * (0.5 + (cx - 0.5) * perspScale * 1.05);
      const screenY = H * (perspY - wh * (0.5 + cy * 1.2));
      return { x: screenX, y: screenY };
    };

    const brightness = (cy: number, wh: number) => {
      // Brighter near top of wave, fade to dark at bottom
      const base = 0.13 + cy * 0.15;
      const highlight = Math.max(0, wh) * 2.5;
      return Math.min(1, base + highlight);
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#050505'); // Using brand color
      bg.addColorStop(0.5, '#0a0a0f');
      bg.addColorStop(1, '#050505');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Draw grid lines (cols direction — along X)
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath();
        let started = false;
        for (let c = 0; c <= cols; c++) {
          const cx = c / cols;
          const cy = r / rows;
          const wh = waveY(cx, cy, t);
          const p = project(cx, cy, wh);
          const br = brightness(cy, wh);
          const alpha = 0.18 + br * 0.55;
          const val = Math.round(br * 200 + 40);
          ctx.strokeStyle = `rgba(${val},${val},${val},${alpha})`;
          ctx.lineWidth = 0.5 + br * 0.8;
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw grid lines (rows direction — along Y)
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        let started = false;
        for (let r = 0; r <= rows; r++) {
          const cx = c / cols;
          const cy = r / rows;
          const wh = waveY(cx, cy, t);
          const p = project(cx, cy, wh);
          const br = brightness(cy, wh);
          const alpha = 0.12 + br * 0.40;
          const val = Math.round(br * 180 + 40);
          ctx.strokeStyle = `rgba(${val},${val},${val},${alpha})`;
          ctx.lineWidth = 0.4 + br * 0.6;
          if (!started) { ctx.moveTo(p.x, p.y); started = true; }
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw intersection dots
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const cx = c / cols;
          const cy = r / rows;
          const wh = waveY(cx, cy, t);
          const p = project(cx, cy, wh);
          const br = brightness(cy, wh);

          if (br < 0.08) continue; // skip very dark dots

          const dotR = 0.8 + br * 2.2;
          const val = Math.round(br * 220 + 35);
          const alpha = 0.3 + br * 0.7;

          // Glow for bright peaks
          if (br > 0.55) {
            const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, dotR * 5);
            const gVal = Math.round(br * 255);
            glow.addColorStop(0, `rgba(${gVal},${gVal},${gVal},${0.25 * br})`);
            glow.addColorStop(1, `rgba(${gVal},${gVal},${gVal},0)`);
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(p.x, p.y, dotR * 5, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, dotR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${val},${val},${val},${alpha})`;
          ctx.fill();
        }
      }

      // Subtle top fog gradient
      const fog = ctx.createLinearGradient(0, 0, 0, H * 0.45);
      fog.addColorStop(0, 'rgba(5,5,5,0.92)');
      fog.addColorStop(1, 'rgba(5,5,5,0)');
      ctx.fillStyle = fog;
      ctx.fillRect(0, 0, W, H * 0.45);

      // Bottom vignette
      const vignette = ctx.createLinearGradient(0, H * 0.7, 0, H);
      vignette.addColorStop(0, 'rgba(5,5,5,0)');
      vignette.addColorStop(1, 'rgba(5,5,5,0.85)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, H * 0.7, W, H * 0.3);
    };

    const loop = () => {
      t += 0.012;
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default WaveMesh;
