// =========================================
// MAIN.JS — Central Application Entry Point
//
// Import order is intentional:
//   1. components  → injects header/footer into DOM
//   2. auth        → sets up auth UI (header already exists)
//   3. cart        → sets up cart UI (header already exists)
//   4. feature modules → independent UI enhancements
//
// ES6 modules are deferred by default, so the DOM is fully
// parsed before any code here runs. No DOMContentLoaded
// wrapper is needed.
// =========================================

import initHeader from './components/header.js';
import initFooter from './components/footer.js';
import initAuth from './services/auth.js';
import initCart from './services/cart.js';
import { initHeroSlider, initCategorySlider, initProductSlider } from './components/sliders.js';
import initHomeProducts from './components/products.js';
import initAnnouncement from './components/announcement.js';
import initMobileMenu from './components/menu.js';
import { switchTab } from './utils/helpers.js';
import initSwatches from './services/filter/swatches.js';
import initFilter from './services/filter/filter.js';
import initProfile from './services/profile.js';
import initSearch from './services/search.js';

// ---- Expose global helpers for inline HTML onclick attributes ----
// These functions are assigned to window inside their respective
// init functions (auth.js → closeAllModals, openLoginModal, etc.;
// cart.js → removeFromCart). switchTab is the exception — it has
// no closure state so we assign it directly here.
window.switchTab = switchTab;

// ---- Initialization sequence ----

// Step 1: inject header & footer templates into the page
initHeader();
initFooter();

// Step 2: set up auth (modals, login state, user icon)
initAuth();

// Step 3: set up cart (depends on auth for openLoginModal)
initCart();

// Step 4: independent feature modules
initMobileMenu();
initAnnouncement();
initHeroSlider();
initCategorySlider();
initHomeProducts();
initProductSlider();
initSwatches();
initFilter();
initProfile();
initSearch();

// Mobile catalog filter drawer
(function initMobileFilterDrawer() {
    const toggleBtn  = document.getElementById('filter-toggle-btn');
    const closeBtn   = document.getElementById('filter-close-btn');
    const backdrop   = document.getElementById('filter-backdrop');
    const sidebar    = document.querySelector('.catalog__sidebar');
    if (!toggleBtn || !sidebar) return;

    const open  = () => { sidebar.classList.add('open');  backdrop.classList.add('show');  document.body.style.overflow = 'hidden'; };
    const close = () => { sidebar.classList.remove('open'); backdrop.classList.remove('show'); document.body.style.overflow = ''; };

    toggleBtn.addEventListener('click', open);
    if (closeBtn)  closeBtn.addEventListener('click', close);
    if (backdrop)  backdrop.addEventListener('click', close);
})();

// Prevent default navigation for placeholder # links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
});

// =========================================
// Re-exports — consumers can import from
// main.js as a single source of truth
// =========================================
export { switchTab };
export { initHeader, initFooter, initAuth, initCart };
export { initHeroSlider, initCategorySlider, initProductSlider, initHomeProducts };
export { initAnnouncement, initMobileMenu, initSwatches, initFilter, initProfile, initSearch };
