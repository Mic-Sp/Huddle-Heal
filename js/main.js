/**
 * Huddle and Heal Counseling and Consulting, LLC
 * Starter JavaScript (Vanilla JS - Zero External Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Header Elevation on Scroll ---
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --- Mobile Navigation Toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.classList.toggle('is-active');
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (event) => {
      if (!navToggle.contains(event.target) && !primaryNav.contains(event.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-active');
      }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && primaryNav.classList.contains('is-active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-active');
        navToggle.focus();
      }
    });
  }

  // --- Dropdown Menus (Services & CTA Dropdowns) ---
  const dropdownContainers = document.querySelectorAll('.nav-item-dropdown');

  dropdownContainers.forEach((container) => {
    const toggle = container.querySelector('.dropdown-toggle, .cta-dropdown-toggle');
    const menu = container.querySelector('.dropdown-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.contains('is-open');

        // Close any other open dropdowns first
        dropdownContainers.forEach((otherContainer) => {
          if (otherContainer !== container) {
            const otherMenu = otherContainer.querySelector('.dropdown-menu');
            const otherToggle = otherContainer.querySelector('.dropdown-toggle, .cta-dropdown-toggle');
            if (otherMenu) otherMenu.classList.remove('is-open');
            if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
          }
        });

        menu.classList.toggle('is-open', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
      });
    }
  });

  // Close all open dropdowns on click outside
  document.addEventListener('click', (e) => {
    dropdownContainers.forEach((container) => {
      const menu = container.querySelector('.dropdown-menu');
      const toggle = container.querySelector('.dropdown-toggle, .cta-dropdown-toggle');
      if (menu && !container.contains(e.target)) {
        menu.classList.remove('is-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close all open dropdowns on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownContainers.forEach((container) => {
        const menu = container.querySelector('.dropdown-menu');
        const toggle = container.querySelector('.dropdown-toggle, .cta-dropdown-toggle');
        if (menu && menu.classList.contains('is-open')) {
          menu.classList.remove('is-open');
          if (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
          }
        }
      });
    }
  });

  // --- Dynamic Copyright Year ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
