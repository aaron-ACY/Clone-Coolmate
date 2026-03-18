// =========================================
// SERVICE: PROFILE / ACCOUNT PAGE
// =========================================

import { STORAGE_KEYS } from '../constants/constants.js';

export default function initProfile() {
    const storedUser = localStorage.getItem(STORAGE_KEYS.USER_ACCOUNT);
    if (storedUser) {
        const userData = JSON.parse(storedUser);
        const nameEl  = document.getElementById('info-name');
        const phoneEl = document.getElementById('info-phone');
        const emailEl = document.getElementById('info-email');

        if (nameEl  && userData.name)  nameEl.textContent  = userData.name;
        if (phoneEl && userData.phone) phoneEl.textContent = userData.phone;
        if (emailEl && userData.email) emailEl.textContent = userData.email;
    }

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
            window.location.href = 'index.html';
        });
    }

    const links      = document.querySelectorAll('.sidebar__link');
    const container  = document.querySelector('.account-layout__container');
    const backBtn    = document.getElementById('mobile-back-btn');
    const profileMain = document.querySelector('.profile-info');
    const sections   = document.querySelectorAll('.profile-info__section');

    const placeholder = document.createElement('div');
    placeholder.id = 'feature-placeholder';
    placeholder.style.display = 'none';
    placeholder.style.textAlign = 'center';
    placeholder.style.marginTop = '50px';
    placeholder.style.color = '#666';
    placeholder.style.fontSize = '16px';
    placeholder.innerHTML = '<i class="fa-solid fa-person-digging" style="font-size: 40px; margin-bottom: 15px; display:block;"></i>This function was developed';

    if (profileMain) profileMain.appendChild(placeholder);

    if (container && links.length > 0) {
        links.forEach((link, index) => {
            link.addEventListener('click', function (e) {
                if (link.id === 'btn-logout') return;
                e.preventDefault();

                if (index === 0) {
                    sections.forEach(s => s.style.display = 'block');
                    placeholder.style.display = 'none';
                } else {
                    sections.forEach(s => s.style.display = 'none');
                    placeholder.style.display = 'block';
                }

                if (window.innerWidth < 740) {
                    document.querySelectorAll('.sidebar__item--active').forEach(el => el.classList.remove('sidebar__item--active'));
                    link.parentElement.classList.add('sidebar__item--active');
                    container.classList.add('show-content');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });

        if (backBtn) {
            backBtn.addEventListener('click', function () {
                container.classList.remove('show-content');
            });
        }
    }
}
