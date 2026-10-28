/**
 * Raw contents of the mine-skill package files for in-browser zip generation
 * and interactive code viewer.
 */

export const MINE_THEME_CSS = `/**
 * mine-theme.css - Minecraft GUI Design System
 * Compatible with Vanilla HTML, React, Next.js, Vue, Svelte, and modern CSS frameworks.
 * Part of mine-skill.
 *
 * REGRA UNIVERSAL:
 * 1. Zero Transparência: Todos os containers (cards, slots, painéis) são 100% sólidos e opacos.
 * 2. Fundo Escuro => Letras Claras (#ffffff e #cbd5e1).
 * 3. Fundo Claro => Letras Escuras (#111111 e #27272a).
 */

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

:root {
  --mc-font: 'Press Start 2P', monospace;
  --mc-gui-bg: #c6c6c6;
  --mc-gui-light: #ffffff;
  --mc-gui-mid-light: #dbdbdb;
  --mc-gui-mid-dark: #555555;
  --mc-gui-dark: #373737;
  --mc-slot-bg: #121214;
  --mc-slot-border-dark: #000000;
  --mc-slot-border-light: #2c2c32;
  --mc-btn-bg: #727272;
  --mc-btn-hover: #838383;
  --mc-btn-active: #5a5a5a;
  --mc-btn-disabled: #444444;
  --mc-text-shadow: #1a1a1a;
  --mc-btn-text: #ffffff;
  --mc-btn-wood-bg: #85542b;
  --mc-btn-wood-light: #a66a37;
  --mc-btn-wood-dark: #4b2e16;
  --mc-gold: #fcee4c;
  --mc-emerald: #55ff55;
  --mc-redstone: #ff5555;
  --mc-diamond: #55ffff;
}

.mine-theme {
  background-color: #1a1a1e !important;
  color: #f8fafc !important;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  position: relative;
}

.mine-theme,
.mine-theme .mine-card,
.mine-theme .mine-panel,
.mine-theme .mine-box,
.mine-theme .mine-slot,
.mine-theme button,
.mine-theme input,
.mine-theme textarea,
.mine-theme select {
  opacity: 1 !important;
}

.mine-theme h1,
.mine-theme h2,
.mine-theme h3,
.mine-theme h4,
.mine-theme .mine-pixel-text,
.mine-theme .mine-btn,
.mine-theme button:not(.mine-no-theme),
.mine-theme .mine-badge {
  font-family: var(--mc-font), monospace !important;
  letter-spacing: -0.5px;
}

.mine-theme h1 { font-size: 1.25rem; line-height: 1.6; }
.mine-theme h2 { font-size: 1rem; line-height: 1.5; }
.mine-theme h3 { font-size: 0.85rem; line-height: 1.4; }
.mine-theme h4 { font-size: 0.75rem; line-height: 1.4; }

.mine-theme * {
  border-radius: 0px !important;
}

.mine-box,
.mine-theme .mine-panel {
  background-color: #c6c6c6 !important;
  opacity: 1 !important;
  box-shadow: 
    inset -2px -2px 0px 0px var(--mc-gui-mid-dark),
    inset 2px 2px 0px 0px var(--mc-gui-light),
    inset -4px -4px 0px 0px var(--mc-gui-dark),
    inset 4px 4px 0px 0px var(--mc-gui-mid-light);
  border: 2px solid #000000 !important;
  padding: 16px;
  color: #111111 !important;
}

.mine-panel h1, .mine-panel h2, .mine-panel h3, .mine-panel h4,
.mine-theme .mine-panel h1, .mine-theme .mine-panel h2, .mine-theme .mine-panel h3, .mine-theme .mine-panel h4,
.mine-theme .mine-panel .text-slate-900,
.mine-theme .mine-panel .text-slate-800,
.mine-theme .mine-panel strong {
  color: #111111 !important;
  text-shadow: none !important;
}

.mine-panel p,
.mine-theme .mine-panel p,
.mine-theme .mine-panel .text-slate-600,
.mine-theme .mine-panel .text-slate-500 {
  color: #27272a !important;
  text-shadow: none !important;
}

.mine-card,
.mine-theme .mine-card {
  background-color: #242429 !important;
  opacity: 1 !important;
  color: #ffffff !important;
  border: 2px solid #000000 !important;
  box-shadow: 
    inset 3px 3px 0px 0px #424248,
    inset -3px -3px 0px 0px #111113,
    0 4px 0 0 #000000 !important;
  overflow: hidden;
}

.mine-card h1, .mine-card h2, .mine-card h3, .mine-card h4, .mine-card h5, .mine-card h6,
.mine-theme .mine-card h1, .mine-theme .mine-card h2, .mine-theme .mine-card h3, .mine-theme .mine-card h4,
.mine-theme .mine-card .text-slate-900,
.mine-theme .mine-card .text-slate-800,
.mine-theme .mine-card .text-slate-700,
.mine-theme .mine-card strong {
  color: #ffffff !important;
  text-shadow: 1px 1px 0px #000000 !important;
}

.mine-card p,
.mine-card span:not([class*="text-emerald"]):not([class*="text-amber"]):not([class*="text-red"]):not([class*="text-cyan"]),
.mine-card li,
.mine-theme .mine-card p,
.mine-theme .mine-card span:not([class*="text-emerald"]):not([class*="text-amber"]):not([class*="text-red"]):not([class*="text-cyan"]),
.mine-theme .mine-card .text-slate-600,
.mine-theme .mine-card .text-slate-500,
.mine-theme .mine-card .text-slate-400 {
  color: #cbd5e1 !important;
}

.mine-slot,
.mine-theme .mine-slot,
.mine-theme input[type="text"],
.mine-theme input[type="search"],
.mine-theme input[type="email"],
.mine-theme input[type="number"],
.mine-theme textarea,
.mine-theme select {
  background-color: #121214 !important;
  opacity: 1 !important;
  color: #ffffff !important;
  border: 2px solid #000000 !important;
  box-shadow: 
    inset 2px 2px 0px 0px #000000,
    inset -2px -2px 0px 0px #2c2c32 !important;
  padding: 8px 12px;
  font-family: var(--mc-font), monospace;
  font-size: 0.75rem;
  outline: none;
}

.mine-slot *,
.mine-theme .mine-slot * {
  color: #ffffff !important;
}

.mine-slot .text-slate-400,
.mine-slot .text-slate-500,
.mine-theme .mine-slot .text-slate-400,
.mine-theme .mine-slot .text-slate-500 {
  color: #cbd5e1 !important;
}

.mine-btn,
.mine-theme button:not(.mine-no-theme),
.mine-theme a.mine-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: #727272 !important;
  opacity: 1 !important;
  color: #ffffff !important;
  text-shadow: 2px 2px 0px #1a1a1a;
  border: 2px solid #000000 !important;
  box-shadow: 
    inset 2px 2px 0px 0px #a2a2a2,
    inset -2px -2px 0px 0px #383838 !important;
  font-family: var(--mc-font), monospace;
  font-size: 0.75rem;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  position: relative;
  transition: filter 0.05s ease, transform 0.05s ease;
}

.mine-btn:hover,
.mine-theme button:not(.mine-no-theme):hover {
  background-color: #838383 !important;
  color: #ffffa0 !important;
}

.mine-btn:active,
.mine-theme button:not(.mine-no-theme):active {
  background-color: #5a5a5a !important;
  box-shadow: 
    inset 2px 2px 0px 0px #242424,
    inset -2px -2px 0px 0px #7a7a7a !important;
  transform: translateY(1px);
}

.mine-btn-wood {
  background-color: var(--mc-btn-wood-bg) !important;
  box-shadow: 
    inset 2px 2px 0px 0px var(--mc-btn-wood-light),
    inset -2px -2px 0px 0px var(--mc-btn-wood-dark) !important;
}

.mine-btn-diamond {
  background-color: #2c6c72 !important;
  box-shadow: 
    inset 2px 2px 0px 0px var(--mc-diamond),
    inset -2px -2px 0px 0px #123438 !important;
}

.mine-theme img,
.mine-card img {
  image-rendering: auto !important;
  border-bottom: 2px solid #000000;
  opacity: 1 !important;
}

.mine-lore {
  background: #100010 !important;
  opacity: 1 !important;
  border: 2px solid #28007f !important;
  box-shadow: 
    inset 1px 1px 0px 0px #5000ff,
    inset -1px -1px 0px 0px #180050 !important;
  padding: 6px 10px;
  color: #ffffff !important;
  font-family: var(--mc-font), monospace;
  font-size: 0.65rem;
  line-height: 1.5;
  text-shadow: 1px 1px 0px #3f3f3f;
}
`;

export const MINE_MOBS_JS = `/**
 * mine-mobs.js - Autonomous Pixel-Art Decorative Minecraft Mobs
 * Features: Exactly 1 Creeper & 1 Pink Sheep patrolling the bottom of the screen.
 * Zero audio, zero external images, pure inline SVG pixel art, zero framework dependencies.
 * Part of mine-skill.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MineMobs = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const SPRITES = {
    creeper: function (legFrame) {
      const legOffset1 = legFrame * 3;
      const legOffset2 = -legFrame * 3;

      return \`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 38" width="48" height="76" shape-rendering="crispEdges" style="display:block; overflow:visible;">
        <ellipse cx="12" cy="36" rx="9" ry="2.5" fill="rgba(0,0,0,0.25)" />
        <g transform="translate(\${4 + legOffset2}, 26)">
          <rect x="0" y="0" width="4" height="10" fill="#2d7729" />
          <rect x="0" y="7" width="4" height="3" fill="#1b4d18" />
        </g>
        <g transform="translate(\${12 - legOffset2}, 26)">
          <rect x="0" y="0" width="4" height="10" fill="#2d7729" />
          <rect x="0" y="7" width="4" height="3" fill="#1b4d18" />
        </g>
        <g transform="translate(6, 12)">
          <rect x="0" y="0" width="12" height="15" fill="#388e3c" />
          <rect x="2" y="2" width="3" height="3" fill="#4caf50" />
          <rect x="7" y="1" width="3" height="2" fill="#2e7d32" />
          <rect x="1" y="8" width="4" height="4" fill="#66bb6a" />
          <rect x="7" y="7" width="4" height="3" fill="#1b5e20" />
          <rect x="3" y="11" width="3" height="3" fill="#81c784" />
          <rect x="8" y="11" width="3" height="3" fill="#2e7d32" />
        </g>
        <g transform="translate(\${3 + legOffset1}, 27)">
          <rect x="0" y="0" width="5" height="9" fill="#43a047" />
          <rect x="0" y="6" width="5" height="3" fill="#1b5e20" />
        </g>
        <g transform="translate(\${12 - legOffset1}, 27)">
          <rect x="0" y="0" width="5" height="9" fill="#43a047" />
          <rect x="0" y="6" width="5" height="3" fill="#1b5e20" />
        </g>
        <g transform="translate(4, 0)">
          <rect x="0" y="0" width="16" height="13" fill="#4caf50" />
          <rect x="0" y="0" width="4" height="4" fill="#388e3c" />
          <rect x="12" y="0" width="4" height="3" fill="#66bb6a" />
          <rect x="1" y="9" width="3" height="3" fill="#2e7d32" />
          <rect x="12" y="9" width="3" height="3" fill="#81c784" />
          <rect x="2" y="3" width="3" height="3" fill="#000000" />
          <rect x="9" y="3" width="3" height="3" fill="#000000" />
          <rect x="5" y="5" width="4" height="4" fill="#000000" />
          <rect x="4" y="8" width="6" height="3" fill="#000000" />
          <rect x="3" y="10" width="2" height="3" fill="#000000" />
          <rect x="9" y="10" width="2" height="3" fill="#000000" />
        </g>
      </svg>\`;
    },

    pinkSheep: function (legFrame, isGrazing) {
      const legOffset1 = legFrame * 3;
      const legOffset2 = -legFrame * 3;
      const headTransform = isGrazing 
        ? 'translate(0, 10) rotate(35, 4, 10)' 
        : 'translate(0, 0)';

      return \`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="76" height="64" shape-rendering="crispEdges" style="display:block; overflow:visible;">
        <ellipse cx="20" cy="30" rx="15" ry="2.5" fill="rgba(0,0,0,0.25)" />
        <g transform="translate(\${12 + legOffset2}, 18)">
          <rect x="0" y="0" width="3" height="12" fill="#d7a58a" />
          <rect x="0" y="9" width="3" height="3" fill="#4a3728" />
        </g>
        <g transform="translate(\${26 - legOffset2}, 18)">
          <rect x="0" y="0" width="3" height="12" fill="#c49075" />
          <rect x="0" y="9" width="3" height="3" fill="#4a3728" />
        </g>
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
        <g transform="translate(\${10 + legOffset1}, 19)">
          <rect x="0" y="0" width="3" height="11" fill="#e2b49c" />
          <rect x="0" y="8" width="3" height="3" fill="#3f2d22" />
        </g>
        <g transform="translate(\${24 - legOffset1}, 19)">
          <rect x="0" y="0" width="3" height="11" fill="#d7a58a" />
          <rect x="0" y="8" width="3" height="3" fill="#3f2d22" />
        </g>
        <g class="sheep-head" style="transition: transform 0.3s ease-in-out;" transform="\${headTransform}">
          <rect x="1" y="2" width="9" height="6" fill="#f49ac2" />
          <rect x="2" y="1" width="6" height="2" fill="#ffb5d5" />
          <rect x="1" y="7" width="8" height="7" fill="#e2b49c" />
          <rect x="3" y="11" width="4" height="3" fill="#d7a58a" />
          <rect x="0" y="6" width="2" height="2" fill="#ffffff" />
          <rect x="0" y="7" width="1" height="1" fill="#111111" />
          <rect x="8" y="6" width="2" height="2" fill="#ffffff" />
          <rect x="8" y="7" width="1" height="1" fill="#111111" />
          <rect x="3" y="12" width="3" height="2" fill="#c49075" />
        </g>
      </svg>\`;
    }
  };

  class MobEntity {
    constructor(type, initialX, speed, container) {
      this.type = type;
      this.x = initialX;
      this.speed = speed;
      this.direction = Math.random() > 0.5 ? 1 : -1;
      this.container = container;
      this.legCycle = 0;
      this.isPaused = false;
      this.pauseTimer = 0;
      this.pauseDuration = 0;
      this.isGrazing = false;
      this.nextPauseInterval = 180 + Math.random() * 240;
      this.frameCounter = 0;

      this.element = document.createElement('div');
      this.element.className = \`mine-mob mine-mob-\${type}\`;
      this.element.style.position = 'absolute';
      this.element.style.bottom = '4px';
      this.element.style.left = '0';
      this.element.style.pointerEvents = 'none';
      this.element.style.userSelect = 'none';
      this.element.style.willChange = 'transform';
      this.element.style.zIndex = '99999';

      this.container.appendChild(this.element);
      this.render();
    }

    render() {
      const legFrame = this.isPaused ? 0 : Math.sin(this.legCycle) > 0.3 ? 1 : Math.sin(this.legCycle) < -0.3 ? -1 : 0;
      
      if (this.type === 'creeper') {
        this.element.innerHTML = SPRITES.creeper(legFrame);
      } else {
        this.element.innerHTML = SPRITES.pinkSheep(legFrame, this.isGrazing);
      }

      const scaleX = this.type === 'pinkSheep' 
        ? (this.direction > 0 ? -1 : 1)
        : (this.direction > 0 ? 1 : -1);

      this.element.style.transform = \`translateX(\${this.x}px) scaleX(\${scaleX})\`;
    }

    update(viewportWidth) {
      this.frameCounter++;

      if (this.isPaused) {
        this.pauseTimer++;
        if (this.pauseTimer >= this.pauseDuration) {
          this.isPaused = false;
          this.isGrazing = false;
          this.pauseTimer = 0;
          this.nextPauseInterval = 200 + Math.random() * 300;
          if (Math.random() < 0.4) {
            this.direction *= -1;
          }
          this.render();
        }
        return;
      }

      if (this.frameCounter >= this.nextPauseInterval) {
        this.isPaused = true;
        this.pauseTimer = 0;
        this.pauseDuration = 90 + Math.random() * 120;
        this.frameCounter = 0;
        if (this.type === 'pinkSheep') {
          this.isGrazing = true;
        }
        this.render();
        return;
      }

      this.legCycle += 0.18;
      this.x += this.speed * this.direction;

      const mobWidth = this.type === 'creeper' ? 50 : 80;

      if (this.x <= 10) {
        this.x = 10;
        this.direction = 1;
      } else if (this.x >= viewportWidth - mobWidth - 10) {
        this.x = viewportWidth - mobWidth - 10;
        this.direction = -1;
      }

      this.render();
    }

    destroy() {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
  }

  class MineMobsManager {
    constructor() {
      this.container = null;
      this.entities = [];
      this.animationFrameId = null;
      this.isEnabled = true;
      this.isInitialized = false;
      this.boundLoop = this.loop.bind(this);
    }

    init(options = {}) {
      if (this.isInitialized) return;

      const rootAttr = document.documentElement.getAttribute('data-mobs') || document.body?.getAttribute('data-mobs');
      if (options.showMobs === false || rootAttr === 'false') {
        this.isEnabled = false;
      }

      this.container = document.createElement('div');
      this.container.id = 'mine-mobs-container';
      this.container.style.position = 'fixed';
      this.container.style.bottom = '0';
      this.container.style.left = '0';
      this.container.style.width = '100vw';
      this.container.style.height = '85px';
      this.container.style.pointerEvents = 'none';
      this.container.style.zIndex = '99999';
      this.container.style.overflow = 'hidden';
      this.container.style.display = this.isEnabled ? 'block' : 'none';
      document.body.appendChild(this.container);

      const viewWidth = window.innerWidth || 1200;
      this.entities = [
        new MobEntity('creeper', Math.max(30, viewWidth * 0.25), 0.9, this.container),
        new MobEntity('pinkSheep', Math.max(120, viewWidth * 0.65), 0.75, this.container)
      ];

      this.isInitialized = true;
      this.startLoop();
    }

    startLoop() {
      if (!this.animationFrameId && this.isEnabled) {
        this.animationFrameId = requestAnimationFrame(this.boundLoop);
      }
    }

    stopLoop() {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    }

    loop() {
      if (!this.isEnabled) return;
      const viewWidth = window.innerWidth || 1200;
      for (let i = 0; i < this.entities.length; i++) {
        this.entities[i].update(viewWidth);
      }
      this.animationFrameId = requestAnimationFrame(this.boundLoop);
    }

    toggle(forceState) {
      const newState = typeof forceState === 'boolean' ? forceState : !this.isEnabled;
      this.isEnabled = newState;
      if (this.container) {
        this.container.style.display = this.isEnabled ? 'block' : 'none';
      }
      if (this.isEnabled) {
        this.startLoop();
      } else {
        this.stopLoop();
      }
      return this.isEnabled;
    }

    setVisible(visible) {
      return this.toggle(visible);
    }

    isVisible() {
      return this.isEnabled;
    }

    destroy() {
      this.stopLoop();
      this.entities.forEach(entity => entity.destroy());
      this.entities = [];
      if (this.container && this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }
      this.container = null;
      this.isInitialized = false;
    }
  }

  const instance = new MineMobsManager();

  if (typeof document !== 'undefined') {
    const run = () => {
      const disabled = document.body?.dataset?.mobs === 'false' || document.documentElement?.dataset?.mobs === 'false';
      if (!disabled) {
        instance.init();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }

  return instance;
});
`;

export const MINE_TOGGLE_JS = `/**
 * mine-toggle.js - Floating Minecraft Theme Switcher
 * Persists theme state in localStorage, manages .mine-theme on document.body,
 * and broadcasts 'mine-theme-change' custom event.
 * Part of mine-skill.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MineToggle = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const STORAGE_KEY = 'mine-theme-enabled';
  const CLASS_NAME = 'mine-theme';

  class MineToggleManager {
    constructor() {
      this.button = null;
      this.position = 'bottom-right';
      this.isInitialized = false;
      this.isEnabled = false;
    }

    init(options = {}) {
      if (this.isInitialized) return;

      this.position = options.position || 'bottom-right';

      const saved = localStorage.getItem(STORAGE_KEY);
      this.isEnabled = saved !== null ? saved === 'true' : (options.defaultEnabled ?? true);

      this.applyTheme(this.isEnabled, false);
      this.createButton();

      this.isInitialized = true;
    }

    createButton() {
      if (document.getElementById('mine-theme-toggle-btn')) return;

      const btn = document.createElement('button');
      btn.id = 'mine-theme-toggle-btn';
      btn.setAttribute('aria-label', 'Alternar Tema Minecraft');
      btn.setAttribute('title', 'Alternar Tema Minecraft (mine-skill)');
      btn.className = 'mine-no-theme';

      btn.style.position = 'fixed';
      btn.style.zIndex = '99998';
      btn.style.cursor = 'pointer';
      btn.style.display = 'flex';
      btn.style.alignItems = 'center';
      btn.style.gap = '8px';
      btn.style.padding = '8px 12px';
      btn.style.borderRadius = '0px';
      btn.style.fontFamily = "'Press Start 2P', monospace, sans-serif";
      btn.style.fontSize = '11px';
      btn.style.color = '#ffffff';
      btn.style.backgroundColor = '#4e4e52';
      btn.style.border = '2px solid #000000';
      btn.style.boxShadow = 'inset 2px 2px 0px #82828a, inset -2px -2px 0px #242426, 0 4px 8px rgba(0,0,0,0.3)';
      btn.style.userSelect = 'none';
      btn.style.transition = 'transform 0.1s ease, filter 0.1s ease';

      switch (this.position) {
        case 'bottom-left':
          btn.style.bottom = '20px';
          btn.style.left = '20px';
          break;
        case 'top-right':
          btn.style.top = '20px';
          btn.style.right = '20px';
          break;
        case 'top-left':
          btn.style.top = '20px';
          btn.style.left = '20px';
          break;
        case 'bottom-right':
        default:
          btn.style.bottom = '20px';
          btn.style.right = '20px';
          break;
      }

      btn.innerHTML = this.getButtonContent();

      btn.addEventListener('mouseenter', () => {
        btn.style.filter = 'brightness(1.15)';
        btn.style.transform = 'translateY(-2px)';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.filter = 'none';
        btn.style.transform = 'translateY(0)';
      });

      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'translateY(1px)';
        btn.style.boxShadow = 'inset 2px 2px 0px #242426, inset -2px -2px 0px #82828a';
      });

      btn.addEventListener('mouseup', () => {
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = 'inset 2px 2px 0px #82828a, inset -2px -2px 0px #242426, 0 4px 8px rgba(0,0,0,0.3)';
      });

      btn.addEventListener('click', () => {
        this.toggle();
      });

      document.body.appendChild(btn);
      this.button = btn;
    }

    getButtonContent() {
      const icon = \`
      <svg width="18" height="18" viewBox="0 0 16 16" shape-rendering="crispEdges" style="display:inline-block; vertical-align:middle;">
        <rect width="16" height="16" fill="#866043"/>
        <rect x="2" y="8" width="2" height="2" fill="#573d26"/>
        <rect x="8" y="10" width="2" height="2" fill="#573d26"/>
        <rect x="12" y="7" width="2" height="2" fill="#573d26"/>
        <rect x="5" y="13" width="2" height="2" fill="#573d26"/>
        <rect x="4" y="6" width="3" height="2" fill="#a07452"/>
        <rect x="10" y="12" width="2" height="2" fill="#a07452"/>
        <rect x="0" y="0" width="16" height="5" fill="#5b8731"/>
        <rect x="1" y="5" width="2" height="3" fill="#5b8731"/>
        <rect x="5" y="5" width="3" height="2" fill="#5b8731"/>
        <rect x="10" y="5" width="2" height="4" fill="#5b8731"/>
        <rect x="13" y="5" width="2" height="2" fill="#5b8731"/>
        <rect x="0" y="0" width="16" height="1" fill="#7ebd3e"/>
        <rect x="3" y="1" width="4" height="1" fill="#7ebd3e"/>
        <rect x="11" y="1" width="3" height="1" fill="#7ebd3e"/>
        <rect x="1" y="7" width="2" height="1" fill="#446624"/>
        <rect x="10" y="8" width="2" height="1" fill="#446624"/>
      </svg>\`;

      const label = this.isEnabled ? 'MINE: ON' : 'MINE: OFF';
      const indicatorColor = this.isEnabled ? '#55ff55' : '#ff5555';

      return \`
        \${icon}
        <span style="letter-spacing: -0.5px;">\${label}</span>
        <span style="display:inline-block; width:6px; height:6px; background-color:\${indicatorColor}; border:1px solid #000;"></span>
      \`;
    }

    applyTheme(enabled, saveToStorage = true) {
      this.isEnabled = enabled;
      const root = document.documentElement;
      const body = document.body;

      if (enabled) {
        body?.classList.add(CLASS_NAME);
        root?.classList.add(CLASS_NAME);
      } else {
        body?.classList.remove(CLASS_NAME);
        root?.classList.remove(CLASS_NAME);
      }

      if (saveToStorage) {
        localStorage.setItem(STORAGE_KEY, enabled ? 'true' : 'false');
      }

      if (this.button) {
        this.button.innerHTML = this.getButtonContent();
      }

      window.dispatchEvent(
        new CustomEvent('mine-theme-change', {
          detail: { enabled: this.isEnabled }
        })
      );
    }

    toggle() {
      this.applyTheme(!this.isEnabled, true);
      return this.isEnabled;
    }

    destroy() {
      if (this.button && this.button.parentNode) {
        this.button.parentNode.removeChild(this.button);
      }
      this.button = null;
      this.isInitialized = false;
    }
  }

  const instance = new MineToggleManager();

  if (typeof document !== 'undefined') {
    const run = () => {
      const autoInit = document.currentScript?.getAttribute('data-auto-init') !== 'false';
      if (autoInit) {
        instance.init();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }

  return instance;
});
`;

export const MINE_README_MD = `# 🟩 mine-skill

Transforme qualquer site web (HTML puro, React, Next.js, Vue, Svelte, etc.) em uma experiência imersiva de Minecraft com estética autêntica de GUI, chanfros clássicos, tipografia 8-bit e mobs decorativos autônomos na base da tela (Creeper e Ovelha Rosa).

---

## 🎯 Filosofia de Design & Diretrizes de Negócio

1. **Parceria de Marcas (Brand Safe)**: A estética Minecraft atua em segundo plano colaborativo. As fotos reais dos produtos, dados analíticos e formulários conservam destaque absoluto e contraste legível.
2. **Zero Transparência (100% Sólido)**: Todos os cards, slots, botões e painéis são 100% opacos. Nenhum padrão de fundo ou ruído pode vazar ou transparecer através dos containers de conteúdo.
3. **Regra de Ouro de Contraste Automático**:
   - **Fundo Escuro** (Cards, slots profundos \`#121214\`): Letras e números forçados para **Branco Puro (\`#ffffff\`)** e detalhes em **Cinza Claro (\`#cbd5e1\`)**.
   - **Fundo Claro** (Painéis GUI \`#c6c6c6\`, caixas claras): Letras forçadas para **Preto Sólido (\`#111111\`)**.
4. **Zero Áudio**: Nenhum efeito sonoro de passos, cliques ou explosão para manter o ambiente corporativo e acessível.
5. **Mobs Decorativos Autônomos**: Exatamente 1 Creeper e 1 Ovelha Rosa caminhando na base da tela (\`position: fixed; bottom: 0; pointer-events: none;\`), com pausas naturais para pastar/observar.
6. **100% Autocontido**: Sprites em SVG inline de alta fidelidade e pixel art. Sem dependência de CDNs ou links externos de imagens.

---

## 📦 Estrutura do Pacote

\`\`\`
mine-skill/
├── mine-theme.css   # Estilos da GUI, chanfros clássicos, botões e fontes
├── mine-mobs.js     # Engine de patrulha e animação do Creeper e da Ovelha Rosa
├── mine-toggle.js   # Botão flutuante para ligar/desligar com localStorage
└── README.md        # Documentação completa de integração
\`\`\`

---

## 🚀 Como Instalar

### 1. Em Sites Estáticos (HTML Puro)
\`\`\`html
<link rel="stylesheet" href="mine-theme.css">
<body class="mine-theme">
  <!-- Conteúdo -->
  <script src="mine-mobs.js" defer></script>
  <script src="mine-toggle.js" defer></script>
</body>
\`\`\`

### 2. Em React / Next.js
\`\`\`tsx
import './mine-theme.css';
import { useEffect } from 'react';

export default function MinecraftLayout({ children }) {
  useEffect(() => {
    import('./mine-mobs.js').then(() => window.MineMobs?.init());
    import('./mine-toggle.js').then(() => window.MineToggle?.init());
    return () => {
      window.MineMobs?.destroy();
      window.MineToggle?.destroy();
    };
  }, []);

  return <div className="mine-theme">{children}</div>;
}
\`\`\`

---

## 🤖 Gatilhos de Ativação da Skill (Prompt Triggers)

- "aplica a mine-skill nessa landing page"
- "injeta mobs de minecraft nesse componente"
- "converte esse site pro tema minecraft mantendo meus produtos"
- "adiciona a mine-skill nesse projeto"
- "gera o pacote zip da mine-skill para esse layout"
`;
