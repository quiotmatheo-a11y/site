/* ============================================
   MATHÉO QUIOT - APPLICATION PRINCIPALE
   Gestion du thème, navigation, interactions
   ============================================ */

// ========== GESTION DU THÈME ==========
class ThemeManager {
  constructor() {
    this.storageKey = 'matheo-theme';
    this.themeToggle = document.querySelector('.theme-toggle');
    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    this.setTheme(theme);

    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }

  setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem(this.storageKey, 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem(this.storageKey, 'light');
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}

// ========== GESTION DE LA NAVIGATION MOBILE ==========
class MobileNavigation {
  constructor() {
    this.menuToggle = document.querySelector('.menu-toggle');
    this.navLinks = document.querySelector('.nav-links');
    this.navItems = document.querySelectorAll('.nav-links a');
    this.init();
  }

  init() {
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());
    }

    this.navItems.forEach(item => {
      item.addEventListener('click', () => this.closeMenu());
    });

    // Fermer le menu au resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.navLinks.classList.toggle('active');
    this.menuToggle.classList.toggle('active');
  }

  closeMenu() {
    this.navLinks.classList.remove('active');
    this.menuToggle.classList.remove('active');
  }
}

// ========== GESTION DE LA NAVIGATION ACTIVE ==========
class ActiveNavigation {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav-links a');
    this.updateActiveLink();

    window.addEventListener('hashchange', () => this.updateActiveLink());
  }

  updateActiveLink() {
    const currentPage = this.getCurrentPage();

    this.navLinks.forEach(link => {
      link.classList.remove('active');
      const linkPage = this.getPageFromHref(link.href);
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename || 'index.html';
  }

  getPageFromHref(href) {
    const url = new URL(href);
    return url.pathname.split('/').pop();
  }
}

// ========== GESTION DE LA PAGE PARCOURS (TRAJECTOIRE) ==========
class TrajectoryPage {
  constructor() {
    const container = document.querySelector('.trajectory-items');
    if (!container) return;

    this.container = container;
    this.items = document.querySelectorAll('.trajectory-item');
    this.init();
  }

  init() {
    this.items.forEach(item => {
      const node = item.querySelector('.trajectory-node');
      if (node) {
        node.addEventListener('click', () => this.toggleItem(item));
      }

      const content = item.querySelector('.item-content');
      if (content) {
        content.addEventListener('click', () => this.toggleItem(item));
      }
    });
  }

  toggleItem(item) {
    item.classList.toggle('active');
  }
}

// ========== GESTION DE LA PAGE ÉDUCATION (ACCORDÉON) ==========
class EducationPage {
  constructor() {
    this.weekCards = document.querySelectorAll('.week-card');
    this.init();
  }

  init() {
    this.weekCards.forEach(card => {
      const header = card.querySelector('.week-header');
      if (header) {
        header.addEventListener('click', () => this.toggleWeek(card));
      }
    });
  }

  toggleWeek(card) {
    card.classList.toggle('active');
  }
}

// ========== ANIMATIONS AU SCROLL ==========
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      this.observerOptions
    );

    this.observeElements();
  }

  observeElements() {
    const elements = document.querySelectorAll(
      '.slide-in-up, .fade-in, .trajectory-item, .week-card, .contact-card, .exploration-card'
    );

    elements.forEach(el => this.observer.observe(el));
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
      }
    });
  }
}

// ========== TRAÎNÉE DU CURSEUR DANS LA NAV ==========
class CursorTrail {
  constructor() {
    this.nav = document.querySelector('nav');
    if (!this.nav) return;

    this.particles = [];
    this.lastTime = 0;
    this.throttleMs = 30;

    this.nav.addEventListener('mousemove', (e) => this.createTrail(e));
    this.nav.addEventListener('mouseleave', () => this.clearTrail());
  }

  createTrail(e) {
    const now = Date.now();
    if (now - this.lastTime < this.throttleMs) return;
    this.lastTime = now;

    const particle = document.createElement('div');
    particle.className = 'cursor-trail-particle';

    const x = e.clientX;
    const y = e.clientY;

    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    this.nav.appendChild(particle);

    // Animation et suppression
    setTimeout(() => {
      particle.classList.add('fade-out');
      setTimeout(() => particle.remove(), 500);
    }, 100);
  }

  clearTrail() {
    const particles = this.nav.querySelectorAll('.cursor-trail-particle');
    particles.forEach(p => p.classList.add('fade-out'));
  }
}

// ========== INITIALISATION ========== 
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new MobileNavigation();
  new ActiveNavigation();
  new TrajectoryPage();
  new EducationPage();
  new ScrollAnimations();
  new CursorTrail();

  console.log('✨ Site de Mathéo Quiot chargé');
});
