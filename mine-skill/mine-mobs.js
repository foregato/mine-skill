/**
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

      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 38" width="48" height="76" shape-rendering="crispEdges" style="display:block; overflow:visible;">
        <ellipse cx="12" cy="36" rx="9" ry="2.5" fill="rgba(0,0,0,0.25)" />
        <g transform="translate(${4 + legOffset2}, 26)">
          <rect x="0" y="0" width="4" height="10" fill="#2d7729" />
          <rect x="0" y="7" width="4" height="3" fill="#1b4d18" />
        </g>
        <g transform="translate(${12 - legOffset2}, 26)">
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
        <g transform="translate(${3 + legOffset1}, 27)">
          <rect x="0" y="0" width="5" height="9" fill="#43a047" />
          <rect x="0" y="6" width="5" height="3" fill="#1b5e20" />
        </g>
        <g transform="translate(${12 - legOffset1}, 27)">
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
      </svg>`;
    },

    pinkSheep: function (legFrame, isGrazing) {
      const legOffset1 = legFrame * 3;
      const legOffset2 = -legFrame * 3;
      const headTransform = isGrazing 
        ? 'translate(0, 10) rotate(35, 4, 10)' 
        : 'translate(0, 0)';

      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 32" width="76" height="64" shape-rendering="crispEdges" style="display:block; overflow:visible;">
        <ellipse cx="20" cy="30" rx="15" ry="2.5" fill="rgba(0,0,0,0.25)" />
        <g transform="translate(${12 + legOffset2}, 18)">
          <rect x="0" y="0" width="3" height="12" fill="#d7a58a" />
          <rect x="0" y="9" width="3" height="3" fill="#4a3728" />
        </g>
        <g transform="translate(${26 - legOffset2}, 18)">
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
        <g transform="translate(${10 + legOffset1}, 19)">
          <rect x="0" y="0" width="3" height="11" fill="#e2b49c" />
          <rect x="0" y="8" width="3" height="3" fill="#3f2d22" />
        </g>
        <g transform="translate(${24 - legOffset1}, 19)">
          <rect x="0" y="0" width="3" height="11" fill="#d7a58a" />
          <rect x="0" y="8" width="3" height="3" fill="#3f2d22" />
        </g>
        <g class="sheep-head" style="transition: transform 0.3s ease-in-out;" transform="${headTransform}">
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
      </svg>`;
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
      this.element.className = `mine-mob mine-mob-${type}`;
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

      this.element.style.transform = `translateX(${this.x}px) scaleX(${scaleX})`;
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
      this.isEnabled = false;
      this.isInitialized = false;
      this.boundLoop = this.loop.bind(this);
    }

    init(options = {}) {
      if (this.isInitialized) return;

      const rootAttr = document.documentElement.getAttribute('data-mobs') || document.body?.getAttribute('data-mobs');
      if (options.showMobs === true || rootAttr === 'true') {
        this.isEnabled = true;
      } else {
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
      if (this.isEnabled) {
        this.startLoop();
      }
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
      const enabled = document.body?.dataset?.mobs === 'true' || document.documentElement?.dataset?.mobs === 'true';
      if (enabled) {
        instance.init({ showMobs: true });
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
