import React, { useEffect, useRef } from "react";

function DotFieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      /jsdom/i.test(window.navigator.userAgent)
    ) {
      return undefined;
    }

    const canvas = canvasRef.current;

    if (!canvas || typeof canvas.getContext !== "function") {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
      active: false,
      radius: 220,
    };

    let frameId = 0;
    let dots = [];

    const buildDots = (width, height) => {
      const spacing = width < 768 ? 12 : 14;
      const offset = spacing * 0.5;
      const generatedDots = [];

      for (let y = offset; y < height + spacing; y += spacing) {
        for (let x = offset; x < width + spacing; x += spacing) {
          generatedDots.push({
            baseX: x,
            baseY: y,
            x,
            y,
            size: Math.random() > 0.93 ? 1.1 : 0.68,
            driftX: (Math.random() - 0.5) * 8,
            driftY: (Math.random() - 0.5) * 8,
            speed: 0.18 + Math.random() * 0.42,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      return generatedDots;
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(ratio, ratio);

      dots = buildDots(width, height);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scrollOffset = (window.scrollY || 0) * 0.012;
      const time = performance.now() * 0.001;

      context.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        let targetX = dot.baseX + Math.sin(time * dot.speed + dot.phase) * dot.driftX;
        let targetY =
          dot.baseY -
          scrollOffset +
          Math.cos(time * (dot.speed * 0.9) + dot.phase) * dot.driftY;

        const dx = targetX - pointer.x;
        const dy = targetY - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        let visibility = 0;

        if (pointer.active && distance < pointer.radius) {
          const force = (pointer.radius - distance) / pointer.radius;
          targetX += (dx / distance) * force * 14;
          targetY += (dy / distance) * force * 14;
          visibility = force;
        }

        dot.x += (targetX - dot.x) * 0.035;
        dot.y += (targetY - dot.y) * 0.035;

        if (visibility > 0.02) {
          context.beginPath();
          context.arc(dot.x, dot.y, dot.size + visibility * 0.55, 0, Math.PI * 2);
          context.fillStyle = `rgba(22, 17, 13, ${0.06 + visibility * 0.46})`;
          context.fill();
        }
      });

      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="dot-field-canvas" aria-hidden="true" />;
}

export default DotFieldBackground;
