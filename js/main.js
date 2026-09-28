/**
 * Huddle and Heal Counseling and Consulting, LLC
 * Starter JavaScript (Vanilla JS - Zero External Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
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

  // --- Dynamic Copyright Year ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
