// =========================================
// SERVICE: AUTHENTICATION
// =========================================

import { STORAGE_KEYS, EVENTS } from '../constants/constants.js';

const authModals = `
    <div class="auth-modal fixed top-0 left-0 w-full h-full flex justify-center items-center z-[2000] invisible transition-all duration-300" id="login-modal">
        <div class="auth-modal__overlay absolute w-full h-full bg-black/50 backdrop-blur-sm" onclick="closeAllModals()"></div>
        <div class="auth-modal__container relative bg-white w-[550px] max-w-[90%] rounded-2xl py-5 px-[35px] z-[2001] scale-95 transition-transform duration-300">
            <button class="auth-modal__close absolute -top-[15px] -right-[15px] bg-black text-white border-2 border-white rounded-full w-8 h-8 cursor-pointer text-base flex items-center justify-center" onclick="closeAllModals()" aria-label="Close window">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <header class="auth-modal__header text-left mb-[10px]">
                <div class="auth-modal__logo text-2xl ml-[180px]">
                    <span class="auth-modal__brand-cool text-[#2b5aa5] font-black">WELL</span><span class="auth-modal__brand-club bg-[#2b5aa5] text-white px-[4px] rounded font-black">COME</span>
                </div>
            </header>
            <div class="auth-modal__login-methods">
                <p class="auth-modal__label text-[13px] font-bold mb-[10px] text-black">Login or Register</p>
                <div class="auth-modal__socials flex gap-3 mb-[10px]">
                    <button class="auth-modal__social-btn w-10 h-10 border border-[#2b5aa5] rounded-lg bg-white cursor-pointer flex items-center justify-center" aria-label="Login with Google">
                        <img src="./assets/img/google.avif" alt="Google" class="w-6 h-6">
                    </button>
                    <button class="auth-modal__social-btn w-10 h-10 border border-[#2b5aa5] rounded-lg bg-white cursor-pointer flex items-center justify-center" aria-label="Login with Facebook">
                        <img src="./assets/img/facebook.avif" alt="Facebook" class="w-6 h-6">
                    </button>
                </div>
            </div>
            <div class="auth-modal__separator flex items-center text-black text-[13px] font-medium mb-[15px]">
                <span class="px-[10px] bg-white">Or</span>
            </div>
            <form class="auth-modal__form flex flex-col gap-[15px] mb-5" id="form-login">
                <div class="auth-modal__input-group relative w-full">
                    <input type="text" id="login-email" autocomplete="username" class="auth-modal__input w-full py-[14px] px-5 border border-[#ddd] rounded-[30px] outline-none text-[15px] text-[#333] transition-colors duration-200 focus:border-[#999]" placeholder="Your Email/Phone Number">
                </div>
                <div class="auth-modal__input-group has-icon relative w-full">
                    <input type="password" id="login-password" autocomplete="current-password" class="auth-modal__input w-full py-[14px] px-5 border border-[#ddd] rounded-[30px] outline-none text-[15px] text-[#333] transition-colors duration-200 focus:border-[#999]" placeholder="Password">
                    <i class="fa-regular fa-eye auth-modal__input-icon absolute right-4 top-[14px] text-[#aaa] cursor-pointer select-none text-[15px] hover:text-[#555]"></i>
                </div>
                <button type="submit" class="auth-modal__submit-btn w-full py-[14px] bg-black text-white border-0 rounded-[30px] text-base font-bold uppercase cursor-pointer mt-[5px] transition-colors hover:bg-[#333]">LOGIN</button>
            </form>
            <footer class="auth-modal__footer flex justify-between text-sm font-semibold">
                <a href="#" class="auth-modal__link text-[#1a237e] text-[13px] font-bold hover:underline" onclick="switchToRegister(event)">Create new account</a>
                <a href="#" class="auth-modal__link text-[#1a237e] text-[13px] font-bold hover:underline">Forgot password</a>
            </footer>
        </div>
    </div>

    <div class="auth-modal fixed top-0 left-0 w-full h-full flex justify-center items-center z-[2000] invisible transition-all duration-300" id="register-modal">
        <div class="auth-modal__overlay absolute w-full h-full bg-black/50 backdrop-blur-sm" onclick="closeAllModals()"></div>
        <div class="auth-modal__container relative bg-white w-[550px] max-w-[90%] rounded-2xl py-5 px-[35px] z-[2001] scale-95 transition-transform duration-300">
            <button class="auth-modal__close absolute -top-[15px] -right-[15px] bg-black text-white border-2 border-white rounded-full w-8 h-8 cursor-pointer text-base flex items-center justify-center" onclick="closeAllModals()" aria-label="Close window">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <header class="auth-modal__header text-left mb-[10px]">
                <div class="auth-modal__logo text-2xl ml-[180px]">
                    <span class="auth-modal__brand-cool text-[#2b5aa5] font-black">WELL</span><span class="auth-modal__brand-club bg-[#2b5aa5] text-white px-[4px] rounded font-black">COME</span>
                </div>
            </header>
            <div class="auth-modal__login-methods">
                <p class="auth-modal__label text-[13px] font-bold mb-[10px] text-black">Login or Register</p>
                <div class="auth-modal__socials flex gap-3 mb-[10px]">
                    <button class="auth-modal__social-btn w-10 h-10 border border-[#2b5aa5] rounded-lg bg-white cursor-pointer flex items-center justify-center" aria-label="Login with Google">
                        <img src="./assets/img/google.avif" alt="Google" class="w-6 h-6">
                    </button>
                    <button class="auth-modal__social-btn w-10 h-10 border border-[#2b5aa5] rounded-lg bg-white cursor-pointer flex items-center justify-center" aria-label="Login with Facebook">
                        <img src="./assets/img/facebook.avif" alt="Facebook" class="w-6 h-6">
                    </button>
                </div>
            </div>
            <div class="auth-modal__separator flex items-center text-black text-[13px] font-medium mb-[15px]">
                <span class="px-[10px] bg-white">Or</span>
            </div>
            <form class="auth-modal__form flex flex-col gap-[15px] mb-5" id="form-register">
                <div class="auth-modal__row flex gap-[10px] w-full">
                    <div class="auth-modal__input-group flex-1 relative w-full">
                        <input type="text" id="reg-fullname" class="auth-modal__input w-full py-[14px] px-5 border border-[#ddd] rounded-[30px] outline-none text-[15px] text-[#333] transition-colors duration-200 focus:border-[#999]" placeholder="Full Name">
                    </div>
                    <div class="auth-modal__input-group flex-1 relative w-full">
                        <input type="text" id="reg-phone" class="auth-modal__input w-full py-[14px] px-5 border border-[#ddd] rounded-[30px] outline-none text-[15px] text-[#333] transition-colors duration-200 focus:border-[#999]" placeholder="Phone Number">
                    </div>
                </div>
                <div class="auth-modal__input-group relative w-full">
                    <input type="email" id="reg-email" autocomplete="email" class="auth-modal__input w-full py-[14px] px-5 border border-[#ddd] rounded-[30px] outline-none text-[15px] text-[#333] transition-colors duration-200 focus:border-[#999]" placeholder="Email (e.g. name@gmail.com)">
                </div>
                <div class="auth-modal__input-group has-icon relative w-full">
                    <input type="password" id="reg-password" autocomplete="new-password" class="auth-modal__input w-full py-[14px] px-5 border border-[#ddd] rounded-[30px] outline-none text-[15px] text-[#333] transition-colors duration-200 focus:border-[#999]" placeholder="Password">
                    <i class="fa-regular fa-eye auth-modal__input-icon absolute right-4 top-[14px] text-[#aaa] cursor-pointer select-none text-[15px] hover:text-[#555]"></i>
                </div>
                <button type="submit" class="auth-modal__submit-btn w-full py-[14px] bg-black text-white border-0 rounded-[30px] text-base font-bold uppercase cursor-pointer mt-[5px] transition-colors hover:bg-[#333]">REGISTER</button>
            </form>
            <footer class="auth-modal__footer flex justify-between text-sm font-semibold">
                <a href="#" class="auth-modal__link text-[#1a237e] text-[13px] font-bold hover:underline" onclick="switchToLogin(event)">Login</a>
                <a href="#" class="auth-modal__link text-[#1a237e] text-[13px] font-bold hover:underline">Forgot password</a>
            </footer>
        </div>
    </div>
`;

function showError(input, message) {
    const parent = input.parentElement;
    const oldError = parent.querySelector('.form-message-error');
    if (oldError) oldError.remove();
    input.classList.add('input-error');
    const errorSpan = document.createElement('span');
    errorSpan.className = 'form-message-error';
    errorSpan.innerText = message;
    parent.appendChild(errorSpan);
}

function clearError(input) {
    input.classList.remove('input-error');
    const parent = input.parentElement;
    const errorMsg = parent.querySelector('.form-message-error');
    if (errorMsg) errorMsg.remove();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[0-9]{10,11}$/.test(phone);
}

export default function initAuth() {
    if (!document.getElementById('login-modal')) {
        document.body.insertAdjacentHTML('beforeend', authModals);
    }

    let registeredAccount = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_ACCOUNT)) || null;
    let isLoggedIn = localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN) === 'true';

    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');

    // Redirect unauthenticated users away from info.html
    if (!isLoggedIn && window.location.pathname.includes('info.html')) {
        window.location.href = 'index.html';
        return;
    }

    window.addEventListener('storage', function (e) {
        if (e.key === STORAGE_KEYS.IS_LOGGED_IN || e.key === STORAGE_KEYS.USER_ACCOUNT || e.key === null) {
            isLoggedIn = localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN) === 'true';
            registeredAccount = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_ACCOUNT)) || null;
            updateUIState();
            if (isLoggedIn) {
                window.closeAllModals();
            } else if (!isLoggedIn && window.location.pathname.includes('info.html')) {
                window.location.href = 'index.html';
            }
        }
    });

    document.addEventListener('click', function (e) {
        const clickedBtn = e.target.closest('#btn-open-login');
        if (clickedBtn) {
            e.preventDefault();
            if (isLoggedIn) {
                window.location.href = 'info.html';
            } else {
                window.openLoginModal();
            }
        }
    });

    function updateUIState() {
        const btnOpenUser = document.getElementById('btn-open-login');
        if (!btnOpenUser) return;

        if (isLoggedIn && registeredAccount) {
            btnOpenUser.innerHTML = '';
            const img = document.createElement('img');
            img.src = './assets/img/avatar-login.png';
            img.alt = registeredAccount.name;
            img.className = 'w-8 h-8 rounded-full object-cover';
            btnOpenUser.appendChild(img);
        } else {
            btnOpenUser.innerHTML = '<i class="fa-solid fa-user"></i>';
        }
    }

    updateUIState();

    // ---- Modal functions exposed to window for inline onclick handlers ----

    window.closeAllModals = function () {
        if (loginModal) loginModal.classList.remove('open');
        if (registerModal) registerModal.classList.remove('open');
        document.body.style.overflow = '';
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        document.querySelectorAll('.form-message-error').forEach(el => el.remove());
    };

    window.openLoginModal = function (e) {
        if (e) e.preventDefault();
        window.closeAllModals();
        if (loginModal) loginModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.switchToRegister = function (e) {
        e.preventDefault();
        if (loginModal) loginModal.classList.remove('open');
        setTimeout(() => { if (registerModal) registerModal.classList.add('open'); }, 100);
    };

    window.switchToLogin = function (e) {
        e.preventDefault();
        if (registerModal) registerModal.classList.remove('open');
        setTimeout(() => { if (loginModal) loginModal.classList.add('open'); }, 100);
    };

    // ---- Input events ----

    document.addEventListener('input', function (e) {
        if (e.target.classList.contains('auth-modal__input')) {
            clearError(e.target);
        }
    });

    document.addEventListener('click', function (e) {
        const icon = e.target.closest('.auth-modal__input-icon');
        if (!icon) return;
        const input = icon.previousElementSibling;
        if (!input) return;
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        icon.classList.toggle('fa-eye', !isHidden);
        icon.classList.toggle('fa-eye-slash', isHidden);
    });

    // ---- Form submit handlers ----

    document.addEventListener('submit', function (e) {

        if (e.target && e.target.id === 'form-register') {
            e.preventDefault();
            let isValid = true;
            const form = e.target;

            const name = form.querySelector('#reg-fullname');
            const phone = form.querySelector('#reg-phone');
            const email = form.querySelector('#reg-email');
            const password = form.querySelector('#reg-password');

            if (name.value.trim() === '') { showError(name, 'Please enter your full name'); isValid = false; }

            if (phone.value.trim() === '') { showError(phone, 'Please enter phone number'); isValid = false; }
            else if (!isValidPhone(phone.value.trim())) { showError(phone, 'Invalid phone number'); isValid = false; }

            if (email.value.trim() === '') { showError(email, 'Please enter email'); isValid = false; }
            else if (!isValidEmail(email.value.trim())) { showError(email, 'Invalid email format'); isValid = false; }

            if (password.value.trim() === '') { showError(password, 'Please enter password'); isValid = false; }
            else if (password.value.length < 6) { showError(password, 'Password must be at least 6 characters'); isValid = false; }

            if (isValid) {
                registeredAccount = {
                    name: name.value.trim(),
                    phone: phone.value.trim(),
                    email: email.value.trim(),
                    password: password.value.trim()
                };
                const usersDb = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS_DB)) || {};
                usersDb[registeredAccount.email] = registeredAccount;
                localStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(usersDb));
                alert('Registration successful! Please log in.');

                if (loginModal) loginModal.classList.remove('open');
                if (registerModal) registerModal.classList.remove('open');
                setTimeout(() => { if (loginModal) loginModal.classList.add('open'); }, 100);

                setTimeout(() => {
                    const loginEmailInput = document.getElementById('login-email');
                    if (loginEmailInput) loginEmailInput.value = registeredAccount.email;
                }, 200);
            }
        }

        if (e.target && e.target.id === 'form-login') {
            e.preventDefault();
            let isValid = true;
            const form = e.target;

            const emailInput = form.querySelector('#login-email');
            const passwordInput = form.querySelector('#login-password');

            if (emailInput.value.trim() === '') { showError(emailInput, 'Please enter your email address.'); isValid = false; }
            if (passwordInput.value.trim() === '') { showError(passwordInput, 'Please enter the password.'); isValid = false; }

            if (isValid) {
                const usersDb = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS_DB)) || {};
                const inputVal = emailInput.value.trim();
                const storedUser = Object.values(usersDb).find(u =>
                    u.email === inputVal || u.phone === inputVal
                );
                if (!storedUser) {
                    showError(emailInput, 'Account does not exist. Please register first.');
                    return;
                }
                if (passwordInput.value.trim() === storedUser.password) {
                    alert(`🎉 Login successful! Welcome ${storedUser.name}.`);
                    registeredAccount = storedUser;
                    isLoggedIn = true;
                    localStorage.setItem(STORAGE_KEYS.USER_ACCOUNT, JSON.stringify(storedUser));
                    localStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, 'true');
                    window.dispatchEvent(new Event(EVENTS.AUTH_LOGIN));
                    window.closeAllModals();
                    updateUIState();
                } else {
                    showError(passwordInput, 'Incorrect email or password!');
                }
            }
        }
    });
}
