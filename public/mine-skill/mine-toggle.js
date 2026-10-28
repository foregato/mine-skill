/**
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

      // Load saved state (default to active if user hasn't explicitly set, or check options)
      const saved = localStorage.getItem(STORAGE_KEY);
      this.isEnabled = saved !== null ? saved === 'true' : (options.defaultEnabled ?? true);

      // Apply initial theme state
      this.applyTheme(this.isEnabled, false);

      // Create floating button
      this.createButton();

      this.isInitialized = true;
    }

    createButton() {
      if (document.getElementById('mine-theme-toggle-btn')) return;

      const btn = document.createElement('button');
      btn.id = 'mine-theme-toggle-btn';
      btn.setAttribute('aria-label', 'Alternar Tema Minecraft');
      btn.setAttribute('title', 'Alternar Tema Minecraft (mine-skill)');
      btn.className = 'mine-no-theme'; // Prevent inner styling conflict

      // Base button styles
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

      // Position logic
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
      // Grass block pixel art icon
      const icon = `
      <svg width="18" height="18" viewBox="0 0 16 16" shape-rendering="crispEdges" style="display:inline-block; vertical-align:middle;">
        <!-- Dirt Base -->
        <rect width="16" height="16" fill="#866043"/>
        <rect x="2" y="8" width="2" height="2" fill="#573d26"/>
        <rect x="8" y="10" width="2" height="2" fill="#573d26"/>
        <rect x="12" y="7" width="2" height="2" fill="#573d26"/>
        <rect x="5" y="13" width="2" height="2" fill="#573d26"/>
        <rect x="4" y="6" width="3" height="2" fill="#a07452"/>
        <rect x="10" y="12" width="2" height="2" fill="#a07452"/>
        
        <!-- Top Grass -->
        <rect x="0" y="0" width="16" height="5" fill="#5b8731"/>
        <!-- Grass drips -->
        <rect x="1" y="5" width="2" height="3" fill="#5b8731"/>
        <rect x="5" y="5" width="3" height="2" fill="#5b8731"/>
        <rect x="10" y="5" width="2" height="4" fill="#5b8731"/>
        <rect x="13" y="5" width="2" height="2" fill="#5b8731"/>
        <!-- Grass Highlights -->
        <rect x="0" y="0" width="16" height="1" fill="#7ebd3e"/>
        <rect x="3" y="1" width="4" height="1" fill="#7ebd3e"/>
        <rect x="11" y="1" width="3" height="1" fill="#7ebd3e"/>
        <rect x="1" y="7" width="2" height="1" fill="#446624"/>
        <rect x="10" y="8" width="2" height="1" fill="#446624"/>
      </svg>`;

      const label = this.isEnabled ? 'MINE: ON' : 'MINE: OFF';
      const indicatorColor = this.isEnabled ? '#55ff55' : '#ff5555';

      return `
        ${icon}
        <span style="letter-spacing: -0.5px;">${label}</span>
        <span style="display:inline-block; width:6px; height:6px; background-color:${indicatorColor}; border:1px solid #000;"></span>
      `;
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

      // Dispatch event for other scripts or frameworks
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
