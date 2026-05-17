import React, { useEffect, useRef } from 'react';
type ShapeType =
'circle' |
'triangle' |
'square' |
'plus' |
'hexagon' |
'ring' |
'diamond' |
'star' |
'pentagon' |
'blob';
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  shape: ShapeType;
  opacity: number;
  baseOpacity: number;
  blur: number;
  layer: number; // 0 = far/blurry, 1 = mid, 2 = closer
}
const COLORS = [
'rgba(251, 146, 60, 0.8)',
'rgba(251, 191, 36, 0.8)',
'rgba(248, 113, 113, 0.8)',
'rgba(167, 139, 250, 0.8)',
'rgba(34, 211, 238, 0.8)',
'rgba(52, 211, 153, 0.8)',
'rgba(236, 72, 153, 0.8)',
'rgba(96, 165, 250, 0.8)',
'rgba(244, 114, 182, 0.8)' // fuchsia
];
const SHAPES: ShapeType[] = [
'circle',
'triangle',
'square',
'plus',
'hexagon',
'ring',
'diamond',
'star',
'pentagon',
'blob'];

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    active: false,
    prevX: -1000,
    prevY: -1000
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    const initParticles = () => {
      const area = window.innerWidth * window.innerHeight;
      const count = Math.min(70, Math.max(28, Math.floor(area / 28000)));
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        // 3 depth layers — far ones are big & very blurry, near ones small & sharper
        const layer = Math.random();
        let layerIdx: number;
        let baseRadius: number;
        let blur: number;
        let baseOpacity: number;
        if (layer < 0.4) {
          // Far/big/blurry
          layerIdx = 0;
          baseRadius = 30 + Math.random() * 50;
          blur = 35 + Math.random() * 25;
          baseOpacity = 0.25 + Math.random() * 0.2;
        } else if (layer < 0.75) {
          // Mid
          layerIdx = 1;
          baseRadius = 12 + Math.random() * 20;
          blur = 12 + Math.random() * 12;
          baseOpacity = 0.4 + Math.random() * 0.25;
        } else {
          // Near, sharper
          layerIdx = 2;
          baseRadius = 4 + Math.random() * 9;
          blur = 2 + Math.random() * 5;
          baseOpacity = 0.55 + Math.random() * 0.3;
        }
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          baseRadius,
          radius: baseRadius,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.006,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
          opacity: baseOpacity,
          baseOpacity,
          blur,
          layer: layerIdx
        });
      }
      particlesRef.current = particles;
    };
    resize();
    initParticles();
    const handleResize = () => {
      resize();
      initParticles();
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.prevX = mouseRef.current.x;
        mouseRef.current.prevY = mouseRef.current.y;
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, {
      passive: true
    });
    const drawShape = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.strokeStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = p.blur;
      ctx.lineWidth = Math.max(1, p.radius * 0.12);
      const r = p.radius;
      switch (p.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'ring':
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.stroke();
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -r);
          ctx.lineTo(r * 0.866, r * 0.5);
          ctx.lineTo(-r * 0.866, r * 0.5);
          ctx.closePath();
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-r * 0.8, -r * 0.8, r * 1.6, r * 1.6);
          break;
        case 'plus':{
            const t = r * 0.32;
            ctx.fillRect(-r, -t, r * 2, t * 2);
            ctx.fillRect(-t, -r, t * 2, r * 2);
            break;
          }
        case 'hexagon':{
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = Math.PI / 3 * i;
              const px = Math.cos(angle) * r;
              const py = Math.sin(angle) * r;
              if (i === 0) ctx.moveTo(px, py);else
              ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            break;
          }
        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -r);
          ctx.lineTo(r * 0.7, 0);
          ctx.lineTo(0, r);
          ctx.lineTo(-r * 0.7, 0);
          ctx.closePath();
          ctx.fill();
          break;
        case 'star':{
            ctx.beginPath();
            const spikes = 5;
            const outer = r;
            const inner = r * 0.45;
            for (let i = 0; i < spikes * 2; i++) {
              const angle = Math.PI / spikes * i - Math.PI / 2;
              const radius = i % 2 === 0 ? outer : inner;
              const px = Math.cos(angle) * radius;
              const py = Math.sin(angle) * radius;
              if (i === 0) ctx.moveTo(px, py);else
              ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            break;
          }
        case 'pentagon':{
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
              const angle = Math.PI * 2 / 5 * i - Math.PI / 2;
              const px = Math.cos(angle) * r;
              const py = Math.sin(angle) * r;
              if (i === 0) ctx.moveTo(px, py);else
              ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            break;
          }
        case 'blob':{
            // Organic squishy blob shape
            ctx.beginPath();
            const points = 8;
            for (let i = 0; i <= points; i++) {
              const angle = Math.PI * 2 / points * i;
              const variance = 0.75 + Math.sin(angle * 3 + p.rotation * 2) * 0.25;
              const px = Math.cos(angle) * r * variance;
              const py = Math.sin(angle) * r * variance;
              if (i === 0) ctx.moveTo(px, py);else
              ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
            break;
          }
      }
      ctx.restore();
    };
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      // Sort by layer so far/blurry objects render behind
      particles.sort((a, b) => a.layer - b.layer);
      // Subtle connections between sharp (near) particles
      ctx.lineWidth = 0.5;
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].layer < 2) continue;
        for (let j = i + 1; j < particles.length; j++) {
          if (particles[j].layer < 2) continue;
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.1;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        // Cursor interaction — different layers respond differently (parallax-ish)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // Bigger radius for bigger particles
          const radius = 200 + p.baseRadius * 2;
          if (dist < radius && dist > 0) {
            // Far layer = subtle attraction. Near layer = stronger.
            const layerForce = [0.035, 0.06, 0.09][p.layer];
            const force = (1 - dist / radius) * layerForce;
            p.vx += dx / dist * force;
            p.vy += dy / dist * force;
            // Grow slightly near cursor + brighten
            p.radius =
            p.baseRadius + (1 - dist / radius) * (p.baseRadius * 0.25);
            p.opacity = p.baseOpacity + (1 - dist / radius) * 0.25;
          } else {
            p.radius += (p.baseRadius - p.radius) * 0.05;
            p.opacity += (p.baseOpacity - p.opacity) * 0.05;
          }
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.05;
          p.opacity += (p.baseOpacity - p.opacity) * 0.05;
        }
        // Apply velocity
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        // Soft drag — keeps speed slow & calm
        p.vx *= 0.985;
        p.vy *= 0.985;
        // Tiny ambient drift so motion never freezes
        p.vx += (Math.random() - 0.5) * 0.005;
        p.vy += (Math.random() - 0.5) * 0.005;
        // Cap max speed (slower for bigger/farther particles for depth)
        const maxV = p.layer === 0 ? 0.5 : p.layer === 1 ? 0.8 : 1.1;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > maxV) {
          p.vx = p.vx / speed * maxV;
          p.vy = p.vy / speed * maxV;
        }
        // Wrap around edges (using particle's render radius as buffer)
        const buf = p.baseRadius + p.blur;
        if (p.x < -buf) p.x = w + buf;
        if (p.x > w + buf) p.x = -buf;
        if (p.y < -buf) p.y = h + buf;
        if (p.y > h + buf) p.y = -buf;
        drawShape(p);
      }
      animationRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft color blobs underneath canvas for warmth */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-warm-orange/10 rounded-full blur-[140px] animate-float-slow" />
      <div className="absolute top-[40%] right-[-15%] w-[700px] h-[700px] bg-warm-coral/8 rounded-full blur-[160px] animate-float-medium" />
      <div
        className="absolute bottom-[-10%] left-[15%] w-[600px] h-[600px] bg-cool-violet/8 rounded-full blur-[150px] animate-float-slow"
        style={{
          animationDelay: '3s'
        }} />
      
      <div
        className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-cool-cyan/8 rounded-full blur-[140px] animate-float-medium"
        style={{
          animationDelay: '5s'
        }} />
      

      {/* Interactive blurry particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle grid overlay for premium texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
          'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      
    </div>);

}