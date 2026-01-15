// Render auth => 
const authModals = `
    <div class="auth-modal" id="login-modal">
        <div class="auth-modal__overlay" onclick="closeAllModals()"></div>
        <div class="auth-modal__container">
            <button class="auth-modal__close" onclick="closeAllModals()" aria-label="Close window">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <header class="auth-modal__header">
                <div class="auth-modal__logo">
                    <span class="auth-modal__brand-cool">WELL</span><span class="auth-modal__brand-club">COME</span>
                </div>
            </header>
            <div class="auth-modal__login-methods">
                <p class="auth-modal__label">Login or Register</p>
                <div class="auth-modal__socials">
                    <button class="auth-modal__social-btn"><img src="./assets/img/google.avif" alt="Google"></button>
                    <button class="auth-modal__social-btn"><img src="./assets/img/facebook.avif" alt="Facebook"></button>
                </div>
            </div>
            <div class="auth-modal__separator"><span>Or</span></div>
            <form class="auth-modal__form" id="form-login">
                <div class="auth-modal__input-group">
                    <input type="text" id="login-email" class="auth-modal__input" placeholder="Your Email/Phone Number">
                </div>
                <div class="auth-modal__input-group">
                    <input type="password" id="login-password" class="auth-modal__input" placeholder="Password">
                    <i class="fa-regular fa-eye auth-modal__input-icon"></i>
                </div>
                <button type="submit" class="auth-modal__submit-btn">LOGIN</button>
            </form>
            <footer class="auth-modal__footer">
                <a href="#" class="auth-modal__link" onclick="switchToRegister(event)">Create new account</a>
                <a href="#" class="auth-modal__link">Forgot password</a>
            </footer>
        </div>
    </div>

    <div class="auth-modal" id="register-modal">
        <div class="auth-modal__overlay" onclick="closeAllModals()"></div>
        <div class="auth-modal__container">
            <button class="auth-modal__close" onclick="closeAllModals()" aria-label="Close window">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <header class="auth-modal__header">
                <div class="auth-modal__logo">
                    <span class="auth-modal__brand-cool">WELL</span><span class="auth-modal__brand-club">COME</span>
                </div>
            </header>
            <div class="auth-modal__login-methods">
                <p class="auth-modal__label">Login or Register</p>
                <div class="auth-modal__socials">
                    <button class="auth-modal__social-btn"><img src="./assets/img/google.avif" alt="Google"></button>
                    <button class="auth-modal__social-btn"><img src="./assets/img/facebook.avif" alt="Facebook"></button>
                </div>
            </div>
            <div class="auth-modal__separator"><span>Or</span></div>
            <form class="auth-modal__form" id="form-register">
                <div class="auth-modal__row">
                    <div class="auth-modal__input-group">
                        <input type="text" id="reg-fullname" class="auth-modal__input" placeholder="Full Name">
                    </div>
                    <div class="auth-modal__input-group">
                        <input type="text" id="reg-phone" class="auth-modal__input" placeholder="Phone Number">
                    </div>
                </div>
                <div class="auth-modal__input-group">
                    <input type="email" id="reg-email" class="auth-modal__input" placeholder="Email (e.g. name@gmail.com)">
                </div>
                <div class="auth-modal__input-group">
                    <input type="password" id="reg-password" class="auth-modal__input" placeholder="Password">
                </div>
                <button type="submit" class="auth-modal__submit-btn">REGISTER</button>
            </form>
            <footer class="auth-modal__footer">
                <a href="#" class="auth-modal__link" onclick="switchToLogin(event)">Login</a>
                <a href="#" class="auth-modal__link">Forgot password</a>
            </footer>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {

    if (!document.getElementById('login-modal')) {
        document.body.insertAdjacentHTML('beforeend', authModals);
    }

    let registeredAccount = JSON.parse(localStorage.getItem('user_account')) || null;
    let isLoggedIn = localStorage.getItem('is_logged_in') === 'true';

    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');

    document.addEventListener('click', function (e) {
        const clickedBtn = e.target.closest('#btn-open-login');

        if (clickedBtn) {
            e.preventDefault();

            if (isLoggedIn) {
                window.location.href = 'info.html';
            }
            else {
                openLoginModal();
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
            img.style.width = '32px';
            img.style.height = '32px';
            // img.style.borderRadius = '50%'; // Nếu muốn bo tròn
            btnOpenUser.appendChild(img);
        } else {
            btnOpenUser.innerHTML = '<i class="fa-solid fa-user"></i>';
        }
    }

    // ===  Callback HEADER ===
    if (document.getElementById('btn-open-login')) {
        updateUIState();
    }
    else {
        document.addEventListener('header-loaded', function () {
            updateUIState();
        });
    }

    window.closeAllModals = function () {
        if (loginModal) loginModal.classList.remove('open');
        if (registerModal) registerModal.classList.remove('open');
        document.body.style.overflow = '';
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        document.querySelectorAll('.form-message-error').forEach(el => el.remove());
    }

    window.openLoginModal = function (e) {
        if (e) e.preventDefault();
        closeAllModals();
        if (loginModal) loginModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    window.switchToRegister = function (e) {
        e.preventDefault();
        if (loginModal) loginModal.classList.remove('open');
        setTimeout(() => { if (registerModal) registerModal.classList.add('open'); }, 100);
    }

    window.switchToLogin = function (e) {
        e.preventDefault();
        if (registerModal) registerModal.classList.remove('open');
        setTimeout(() => { if (loginModal) loginModal.classList.add('open'); }, 100);
    }

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
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPhone(phone) {
        const re = /^[0-9]{10,11}$/;
        return re.test(phone);
    }

    document.addEventListener('input', function (e) {
        if (e.target.classList.contains('auth-modal__input')) {
            clearError(e.target);
        }
    });

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
                localStorage.setItem('user_account', JSON.stringify(registeredAccount));
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
                const storedUser = JSON.parse(localStorage.getItem('user_account'));
                if (!storedUser) {
                    showError(emailInput, 'Account does not exist. Please register first.');
                    return;
                }
                if (emailInput.value.trim() === storedUser.email &&
                    passwordInput.value.trim() === storedUser.password) {
                    alert(`🎉 Login successful! Welcome ${storedUser.name}.`);
                    registeredAccount = storedUser;
                    isLoggedIn = true;
                    localStorage.setItem('is_logged_in', 'true');
                    closeAllModals();
                    updateUIState();
                } else {
                    showError(passwordInput, 'Incorrect email or password!');
                }
            }
        }
    });
});