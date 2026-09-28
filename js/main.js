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

  // --- Services Dropdown Menu Accessibility & Interaction ---
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.classList.contains('is-open');
      dropdownMenu.classList.toggle('is-open');
      dropdownToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('is-open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close dropdown on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdownMenu.classList.contains('is-open')) {
        dropdownMenu.classList.remove('is-open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownToggle.focus();
      }
    });
  }

  // --- Dynamic Copyright Year ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
