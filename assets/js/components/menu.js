// =========================================
// COMPONENT: MOBILE MENU & NAVIGATION
// =========================================

export default function initMobileMenu() {
    const barsBtn = document.querySelector('.nav__bars-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('close-mobile-nav');
    const navOverlay = document.getElementById('nav-overlay');
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    const tabs = document.querySelectorAll('.mobile-nav__tabs .tab-item');
    const tabPanes = document.querySelectorAll('.mobile-nav__content-wrapper .tab-pane');

    if (!barsBtn) return;

    // Guard: skip if already initialized
    if (barsBtn.dataset.menuInitialized === 'true') return;
    barsBtn.dataset.menuInitialized = 'true';

    barsBtn.addEventListener('click', () => {
        if (mobileNav) {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        if (navOverlay) navOverlay.classList.add('active');
    });

    function closeMenu() {
        if (mobileNav) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
        if (navOverlay) navOverlay.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (navOverlay) navOverlay.addEventListener('click', closeMenu);

    dropdownItems.forEach(item => {
        const link = item.querySelector('.menu-link');
        if (link) {
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);

            newLink.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.toggle('open');
            });
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}
