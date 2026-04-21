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
      targetX: window.innerWidth * 0.5,
      targetY: window.innerHeight * 0.5,
      active: false,
      radius: 240,
      velocity: 0,
      lastX: window.innerWidth * 0.5,
      lastY: window.innerHeight * 0.5,
    };

    let frameId = 0;
    let dots = [];
    let glyphTargets = [];
    let glyphBounds = { width: 0, height: 0 };

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

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
            size: Math.random() > 0.94 ? 0.82 : 0.42,
            driftX: (Math.random() - 0.5) * 8,
            driftY: (Math.random() - 0.5) * 8,
            speed: 0.18 + Math.random() * 0.42,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      return generatedDots;
    };

    const buildGlyphTargets = (width) => {
      const isCompact = width < 768;
      const sampleStep = isCompact ? 6 : 7;
      const glyphCanvas = document.createElement("canvas");
      const glyphContext = glyphCanvas.getContext("2d");
      const canvasWidth = isCompact ? 260 : 430;
      const canvasHeight = isCompact ? 120 : 160;
      const fontSize = isCompact ? 54 : 84;

      if (!glyphContext) {
        return { targets: [], bounds: { width: 0, height: 0 } };
      }

      glyphCanvas.width = canvasWidth;
      glyphCanvas.height = canvasHeight;

      glyphContext.clearRect(0, 0, canvasWidth, canvasHeight);
      glyphContext.fillStyle = "#000";
      glyphContext.textBaseline = "middle";
      glyphContext.font = `700 ${fontSize}px "Space Grotesk", "Outfit", sans-serif`;
      glyphContext.fillText("JS", isCompact ? 10 : 18, canvasHeight * 0.44);
      glyphContext.fillText("C#", isCompact ? 120 : 222, canvasHeight * 0.44);

      const { data } = glyphContext.getImageData(
        0,
        0,
        canvasWidth,
        canvasHeight
      );
      const points = [];

      for (let y = 0; y < canvasHeight; y += sampleStep) {
        for (let x = 0; x < canvasWidth; x += sampleStep) {
          const alpha = data[(y * canvasWidth + x) * 4 + 3];

          if (alpha > 100) {
            points.push({ x, y });
          }
        }
      }

      if (points.length === 0) {
        return { targets: [], bounds: { width: 0, height: 0 } };
      }

      const minX = Math.min(...points.map((point) => point.x));
      const maxX = Math.max(...points.map((point) => point.x));
      const minY = Math.min(...points.map((point) => point.y));
      const maxY = Math.max(...points.map((point) => point.y));
      const centerX = (minX + maxX) * 0.5;
      const centerY = (minY + maxY) * 0.5;

      return {
        targets: points.map((point) => ({
          x: point.x - centerX,
          y: point.y - centerY,
        })),
        bounds: {
          width: maxX - minX,
          height: maxY - minY,
        },
      };
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
      const glyphShape = buildGlyphTargets(width);
      glyphTargets = glyphShape.targets;
      glyphBounds = glyphShape.bounds;
    };

    const handlePointerMove = (event) => {
      const moveX = event.clientX - pointer.lastX;
      const moveY = event.clientY - pointer.lastY;

      pointer.velocity = Math.min(
        Math.sqrt(moveX * moveX + moveY * moveY),
        36
      );
      pointer.lastX = event.clientX;
      pointer.lastY = event.clientY;
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.velocity = 0;
    };

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scrollOffset = (window.scrollY || 0) * 0.012;
      const time = performance.now() * 0.001;

      pointer.x += (pointer.targetX - pointer.x) * 0.18;
      pointer.y += (pointer.targetY - pointer.y) * 0.18;
      pointer.velocity *= 0.9;

      context.clearRect(0, 0, width, height);

      const activeDots = [];

      dots.forEach((dot, index) => {
        let targetX = dot.baseX + Math.sin(time * dot.speed + dot.phase) * dot.driftX;
        let targetY =
          dot.baseY -
          scrollOffset +
          Math.cos(time * (dot.speed * 0.9) + dot.phase) * dot.driftY;
        const dx = targetX - pointer.x;
        const dy = targetY - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        let visibility = 0;
        let orbit = 0;

        if (pointer.active && distance < pointer.radius) {
          const force = (pointer.radius - distance) / pointer.radius;
          const spinDirection = dot.phase > Math.PI ? 1 : -1;
          const swirl = Math.sin(time * 3.2 + dot.phase) * force * 8;
          orbit = force * (7 + pointer.velocity * 0.7) * spinDirection;

          targetX +=
            (dx / distance) * force * 10 +
            (dy / distance) * (swirl + orbit);
          targetY +=
            (dy / distance) * force * 10 -
            (dx / distance) * (swirl + orbit);
          visibility = force;
        }

        dot.x += (targetX - dot.x) * 0.065;
        dot.y += (targetY - dot.y) * 0.065;

        if (visibility > 0.04) {
          context.beginPath();
          context.moveTo(dot.baseX, dot.baseY - scrollOffset);
          context.lineTo(dot.x, dot.y);
          context.strokeStyle = `rgba(184, 92, 56, ${visibility * 0.1})`;
          context.lineWidth = 1;
          context.stroke();
        }

        if (visibility > 0.01) {
          activeDots.push({
            x: dot.x,
            y: dot.y,
            visibility,
          });

          const glow = context.createRadialGradient(
            dot.x,
            dot.y,
            0,
            dot.x,
            dot.y,
            6 + visibility * 10
          );
          glow.addColorStop(0, `rgba(255, 255, 255, ${0.18 + visibility * 0.28})`);
          glow.addColorStop(1, "rgba(255, 255, 255, 0)");

          context.beginPath();
          context.arc(dot.x, dot.y, 6 + visibility * 10, 0, Math.PI * 2);
          context.fillStyle = glow;
          context.fill();

          context.beginPath();
          context.arc(dot.x, dot.y, dot.size + visibility * 0.95, 0, Math.PI * 2);
          context.fillStyle = `rgba(184, 92, 56, ${0.12 + visibility * 0.62})`;
          context.fill();
        }
      });

      if (pointer.active) {
        const anchorX = clamp(
          pointer.x,
          glyphBounds.width * 0.5 + 30,
          width - glyphBounds.width * 0.5 - 30
        );
        const anchorY = clamp(
          pointer.y,
          glyphBounds.height * 0.5 + 30,
          height - glyphBounds.height * 0.5 - 30
        );
        const pulseRadius = 38 + Math.sin(time * 4.4) * 10 + pointer.velocity * 1.8;

        context.beginPath();
        context.arc(pointer.x, pointer.y, pulseRadius, 0, Math.PI * 2);
        context.strokeStyle = "rgba(184, 92, 56, 0.11)";
        context.lineWidth = 1.2;
        context.stroke();

        context.beginPath();
        context.arc(pointer.x, pointer.y, pulseRadius * 0.58, 0, Math.PI * 2);
        context.strokeStyle = "rgba(255, 255, 255, 0.14)";
        context.lineWidth = 1;
        context.stroke();

        glyphTargets.forEach((target, index) => {
          const x = anchorX + target.x;
          const y = anchorY + target.y;

          if (index > 0) {
            const previous = glyphTargets[index - 1];
            const prevX = anchorX + previous.x;
            const prevY = anchorY + previous.y;
            const dx = x - prevX;
            const dy = y - prevY;
            const segmentLength = Math.sqrt(dx * dx + dy * dy);

            if (segmentLength < 16) {
              context.beginPath();
              context.moveTo(prevX, prevY);
              context.lineTo(x, y);
              context.strokeStyle = "rgba(255, 255, 255, 0.08)";
              context.lineWidth = 0.7;
              context.stroke();
            }
          }

          const glow = context.createRadialGradient(x, y, 0, x, y, 7);
          glow.addColorStop(0, "rgba(255, 255, 255, 0.45)");
          glow.addColorStop(1, "rgba(255, 255, 255, 0)");

          context.beginPath();
          context.arc(x, y, 7, 0, Math.PI * 2);
          context.fillStyle = glow;
          context.fill();

          context.beginPath();
          context.arc(x, y, 1.45, 0, Math.PI * 2);
          context.fillStyle = "rgba(184, 92, 56, 0.92)";
          context.fill();
        });

        activeDots
          .sort((a, b) => b.visibility - a.visibility)
          .slice(0, 7)
          .forEach((dot, index, array) => {
            if (index === array.length - 1) {
              return;
            }

            const nextDot = array[index + 1];
            context.beginPath();
            context.moveTo(dot.x, dot.y);
            context.lineTo(nextDot.x, nextDot.y);
            context.strokeStyle = `rgba(255, 255, 255, ${0.03 + dot.visibility * 0.08})`;
            context.lineWidth = 0.8;
            context.stroke();
          });
      }

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
