import React, { useEffect, useRef, useState } from 'react';

interface Props {
  enabled: boolean;
}

export const MinecraftMobsFloor: React.FC<Props> = ({ enabled }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Creeper state
  const [creeperPos, setCreeperPos] = useState({ x: 80, dir: 1, legFrame: 0, isPaused: false });
  // Pink Sheep state
  const [sheepPos, setSheepPos] = useState({ x: 380, dir: -1, legFrame: 0, isPaused: false, isGrazing: false });

  const stateRef = useRef({
    creeper: {
      x: 100,
      dir: 1,
      speed: 1.1,
      legCycle: 0,
      isPaused: false,
      pauseTimer: 0,
      pauseDuration: 0,
      nextPause: 220 + Math.random() * 200,
      frames: 0
    },
    sheep: {
      x: 500,
      dir: -1,
      speed: 0.85,
      legCycle: 0,
      isPaused: false,
      pauseTimer: 0,
      pauseDuration: 0,
      isGrazing: false,
      nextPause: 180 + Math.random() * 220,
      frames: 0
    }
  });

  useEffect(() => {
    if (!enabled) return;

    let animId: number;

    const loop = () => {
      const vw = window.innerWidth || 1200;
      const s = stateRef.current;

      // 1. Update Creeper
      s.creeper.frames++;
      if (s.creeper.isPaused) {
        s.creeper.pauseTimer++;
        if (s.creeper.pauseTimer >= s.creeper.pauseDuration) {
          s.creeper.isPaused = false;
          s.creeper.pauseTimer = 0;
          s.creeper.nextPause = 240 + Math.random() * 250;
          if (Math.random() < 0.4) s.creeper.dir *= -1;
        }
      } else {
        if (s.creeper.frames >= s.creeper.nextPause) {
          s.creeper.isPaused = true;
          s.creeper.pauseTimer = 0;
          s.creeper.pauseDuration = 80 + Math.random() * 110;
          s.creeper.frames = 0;
        } else {
          s.creeper.legCycle += 0.18;
          s.creeper.x += s.creeper.speed * s.creeper.dir;
          if (s.creeper.x <= 15) {
            s.creeper.x = 15;
            s.creeper.dir = 1;
          } else if (s.creeper.x >= vw - 65) {
            s.creeper.x = vw - 65;
            s.creeper.dir = -1;
          }
        }
      }

      // 2. Update Pink Sheep
      s.sheep.frames++;
      if (s.sheep.isPaused) {
        s.sheep.pauseTimer++;
        if (s.sheep.pauseTimer >= s.sheep.pauseDuration) {
          s.sheep.isPaused = false;
          s.sheep.isGrazing = false;
          s.sheep.pauseTimer = 0;
          s.sheep.nextPause = 200 + Math.random() * 240;
          if (Math.random() < 0.45) s.sheep.dir *= -1;
        }
      } else {
        if (s.sheep.frames >= s.sheep.nextPause) {
          s.sheep.isPaused = true;
          s.sheep.isGrazing = true;
          s.sheep.pauseTimer = 0;
          s.sheep.pauseDuration = 100 + Math.random() * 130;
          s.sheep.frames = 0;
        } else {
          s.sheep.legCycle += 0.16;
          s.sheep.x += s.sheep.speed * s.sheep.dir;
          if (s.sheep.x <= 20) {
            s.sheep.x = 20;
            s.sheep.dir = 1;
          } else if (s.sheep.x >= vw - 95) {
            s.sheep.x = vw - 95;
            s.sheep.dir = -1;
          }
        }
      }

      // Sync React state
      const creeperLeg = s.creeper.isPaused ? 0 : Math.sin(s.creeper.legCycle) > 0.3 ? 1 : Math.sin(s.creeper.legCycle) < -0.3 ? -1 : 0;
      setCreeperPos({
        x: Math.round(s.creeper.x),
        dir: s.creeper.dir,
        legFrame: creeperLeg,
        isPaused: s.creeper.isPaused
      });

      const sheepLeg = s.sheep.isPaused ? 0 : Math.sin(s.sheep.legCycle) > 0.3 ? 1 : Math.sin(s.sheep.legCycle) < -0.3 ? -1 : 0;
      setSheepPos({
        x: Math.round(s.sheep.x),
        dir: s.sheep.dir,
        legFrame: sheepLeg,
        isPaused: s.sheep.isPaused,
        isGrazing: s.sheep.isGrazing
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [enabled]);

  if (!enabled) return null;

  const creeperLeg1 = creeperPos.legFrame * 3;
  const creeperLeg2 = -creeperPos.legFrame * 3;

  const sheepLeg1 = sheepPos.legFrame * 3;
  const sheepLeg2 = -sheepPos.legFrame * 3;

  return (
    <div
      ref={containerRef}
      id="mine-mobs-container"
      className="fixed bottom-0 left-0 w-full h-[90px] pointer-events-none select-none z-[99999] overflow-hidden"
    >
      {/* 1. Autonomous Creeper */}
      <div
        className="absolute bottom-2 transition-transform duration-75"
        style={{
          transform: `translateX(${creeperPos.x}px) scaleX(${creeperPos.dir > 0 ? 1 : -1})`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 38"
          width="46"
          height="72"
          shapeRendering="crispEdges"
          className="drop-shadow-md overflow-visible"
        >
          {/* Floor Shadow */}
          <ellipse cx="12" cy="36" rx="9" ry="2.5" fill="rgba(0,0,0,0.25)" />

          {/* Rear Legs */}
          <g transform={`translate(${4 + creeperLeg2}, 26)`}>
            <rect x="0" y="0" width="4" height="10" fill="#2d7729" />
            <rect x="0" y="7" width="4" height="3" fill="#1b4d18" />
          </g>
          <g transform={`translate(${12 - creeperLeg2}, 26)`}>
            <rect x="0" y="0" width="4" height="10" fill="#2d7729" />
            <rect x="0" y="7" width="4" height="3" fill="#1b4d18" />
          </g>

          {/* Torso */}
          <g transform="translate(6, 12)">
            <rect x="0" y="0" width="12" height="15" fill="#388e3c" />
            <rect x="2" y="2" width="3" height="3" fill="#4caf50" />
            <rect x="7" y="1" width="3" height="2" fill="#2e7d32" />
            <rect x="1" y="8" width="4" height="4" fill="#66bb6a" />
            <rect x="7" y="7" width="4" height="3" fill="#1b5e20" />
            <rect x="3" y="11" width="3" height="3" fill="#81c784" />
            <rect x="8" y="11" width="3" height="3" fill="#2e7d32" />
          </g>

          {/* Front Legs */}
          <g transform={`translate(${3 + creeperLeg1}, 27)`}>
            <rect x="0" y="0" width="5" height="9" fill="#43a047" />
            <rect x="0" y="6" width="5" height="3" fill="#1b5e20" />
          </g>
          <g transform={`translate(${12 - creeperLeg1}, 27)`}>
            <rect x="0" y="0" width="5" height="9" fill="#43a047" />
            <rect x="0" y="6" width="5" height="3" fill="#1b5e20" />
          </g>

          {/* Head & Iconic Face */}
          <g transform="translate(4, 0)">
            <rect x="0" y="0" width="16" height="13" fill="#4caf50" />
            <rect x="0" y="0" width="4" height="4" fill="#388e3c" />
            <rect x="12" y="0" width="4" height="3" fill="#66bb6a" />
            <rect x="1" y="9" width="3" height="3" fill="#2e7d32" />
            <rect x="12" y="9" width="3" height="3" fill="#81c784" />

            {/* Eyes */}
            <rect x="2" y="3" width="3" height="3" fill="#000000" />
            <rect x="9" y="3" width="3" height="3" fill="#000000" />

            {/* Nose & Mouth */}
            <rect x="5" y="5" width="4" height="4" fill="#000000" />
            <rect x="4" y="8" width="6" height="3" fill="#000000" />
            <rect x="3" y="10" width="2" height="3" fill="#000000" />
            <rect x="9" y="10" width="2" height="3" fill="#000000" />
          </g>
        </svg>
      </div>

      {/* 2. Autonomous Pink Sheep (Ovelha Rosa) */}
      <div
        className="absolute bottom-2 transition-transform duration-75"
        style={{
          transform: `translateX(${sheepPos.x}px) scaleX(${sheepPos.dir > 0 ? -1 : 1})`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38 32"
          width="74"
          height="62"
          shapeRendering="crispEdges"
          className="drop-shadow-md overflow-visible"
        >
          {/* Shadow */}
          <ellipse cx="20" cy="30" rx="15" ry="2.5" fill="rgba(0,0,0,0.25)" />

          {/* Rear Legs */}
          <g transform={`translate(${12 + sheepLeg2}, 18)`}>
            <rect x="0" y="0" width="3" height="12" fill="#d7a58a" />
            <rect x="0" y="9" width="3" height="3" fill="#4a3728" />
          </g>
          <g transform={`translate(${26 - sheepLeg2}, 18)`}>
            <rect x="0" y="0" width="3" height="12" fill="#c49075" />
            <rect x="0" y="9" width="3" height="3" fill="#4a3728" />
          </g>

          {/* Pink Wool Fluffy Body */}
          <g transform="translate(8, 6)">
            <rect x="0" y="0" width="24" height="14" fill="#f49ac2" />
            <rect x="2" y="2" width="4" height="3" fill="#ffb5d5" />
            <rect x="10" y="1" width="5" height="3" fill="#ffc2dc" />
            <rect x="18" y="3" width="4" height="3" fill="#ea7eb0" />
            <rect x="4" y="7" width="6" height="4" fill="#ea7eb0" />
            <rect x="14" y="6" width="5" height="4" fill="#ffb5d5" />
            <rect x="8" y="11" width="6" height="2" fill="#d66195" />
            <rect x="18" y="10" width="4" height="3" fill="#d66195" />
          </g>

          {/* Front Legs */}
          <g transform={`translate(${10 + sheepLeg1}, 19)`}>
            <rect x="0" y="0" width="3" height="11" fill="#e2b49c" />
            <rect x="0" y="8" width="3" height="3" fill="#3f2d22" />
          </g>
          <g transform={`translate(${24 - sheepLeg1}, 19)`}>
            <rect x="0" y="0" width="3" height="11" fill="#d7a58a" />
            <rect x="0" y="8" width="3" height="3" fill="#3f2d22" />
          </g>

          {/* Head (tilts down when grazing) */}
          <g
            style={{
              transition: 'transform 0.35s ease-in-out',
              transform: sheepPos.isGrazing ? 'translate(0, 9px) rotate(32deg)' : 'translate(0, 0)',
              transformOrigin: '6px 12px',
            }}
          >
            {/* Pink Wool Cap on Head */}
            <rect x="1" y="2" width="9" height="6" fill="#f49ac2" />
            <rect x="2" y="1" width="6" height="2" fill="#ffb5d5" />
            {/* Face Skin */}
            <rect x="1" y="7" width="8" height="7" fill="#e2b49c" />
            <rect x="3" y="11" width="4" height="3" fill="#d7a58a" />
            {/* Eyes */}
            <rect x="0" y="6" width="2" height="2" fill="#ffffff" />
            <rect x="0" y="7" width="1" height="1" fill="#111111" />
            <rect x="8" y="6" width="2" height="2" fill="#ffffff" />
            <rect x="8" y="7" width="1" height="1" fill="#111111" />
            {/* Snout */}
            <rect x="3" y="12" width="3" height="2" fill="#c49075" />
          </g>
        </svg>
      </div>
    </div>
  );
};
