/**
 * MAIN JAVASCRIPT FILE
 * Structure:
 * 1. Global Utilities & Helpers
 * 2. Feature Modules (Functions)
 * 3. Initialization (DOMContentLoaded)
 */

// =========================================
// 1. MODULE: ANNOUNCEMENT BAR
// =========================================
function initAnnouncement() {
    const promotionArray = document.querySelectorAll(".announcement__text");
    if (promotionArray.length === 0) return;

    let index = 1;
    setInterval(function () {
        const prevPromotion = document.querySelector(".announcement__text.show");
        if (prevPromotion) {
            prevPromotion.classList.remove("show");
        }

        if (promotionArray[index]) {
            promotionArray[index].classList.add("show");
        }

        if (index >= promotionArray.length - 1) {
            if (index > 0) promotionArray[index - 1].classList.remove("show");
            index = 0;
        } else {
            index++;
        }
    }, 2000);
}

// =========================================
// 2. MODULE: HERO SLIDER
// =========================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero__slide');
    const dots = document.querySelectorAll('.hero__dot');
    const btnPrev = document.querySelector('.hero__control--prev');
    const btnNext = document.querySelector('.hero__control--next');

    if (slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

        currentSlide = index;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    if (btnNext) btnNext.addEventListener('click', () => { goToSlide(currentSlide + 1); resetTimer(); });
    if (btnPrev) btnPrev.addEventListener('click', () => { goToSlide(currentSlide - 1); resetTimer(); });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            goToSlide(index);
            resetTimer();
        });
    });

    startAutoSlide();
}

// =========================================
// 3. MODULE: TABS
// =========================================
window.switchTab = function (gender) {
    const tabNam = document.getElementById('tab-nam');
    const tabNu = document.getElementById('tab-nu');
    const contentNam = document.getElementById('content-nam');
    const contentNu = document.getElementById('content-nu');

    if (!tabNam || !tabNu || !contentNam || !contentNu) return;

    if (gender === 'nam') {
        tabNam.classList.add('active');
        tabNu.classList.remove('active');
        contentNam.classList.remove('d-none');
        contentNu.classList.add('d-none');
    } else {
        tabNu.classList.add('active');
        tabNam.classList.remove('active');
        contentNu.classList.remove('d-none');
        contentNam.classList.add('d-none');
    }
};

// =========================================
// 4. MODULE: CATEGORY SLIDER
// =========================================
function initCategorySlider() {
    const sliderContainer = document.querySelector('.categories__grid');
    if (!sliderContainer) return;

    if (typeof Swiper === 'undefined') {
        console.warn('Swiper chưa được tải. Slider danh mục sẽ không hoạt động.');
        return;
    }

    new Swiper('.categories__grid', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 }
        }
    });
}

// =========================================
// 5. MODULE: COLOR SWATCHES
// =========================================
function initSwatches() {
    const swatches = document.querySelectorAll('.swatch');

    swatches.forEach(swatch => {
        swatch.addEventListener('click', function () {
            const parent = this.closest('.product-card__swatches');
            if (!parent) return;

            const currentActive = parent.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        });
    });
}

// =========================================
// 6. MODULE: CART (ĐỒNG BỘ LOCALSTORAGE)
// =========================================
function initCart() {
    let cart = JSON.parse(localStorage.getItem('shopping_cart')) || [];

    const sizeButtons = document.querySelectorAll('.size-btn');

    const toastContainer = document.getElementById('toast-container');


    function saveCart() {
        localStorage.setItem('shopping_cart', JSON.stringify(cart));
        updateCartUI();
    }

    function addToCart(btn) {
        const card = btn.closest('.product-card');
        if (!card) return;

        let selectedColor = 'Mặc định';
        const activeSwatch = card.querySelector('.swatch.active');
        if (activeSwatch) {
            selectedColor = activeSwatch.className.replace('swatch', '').replace('active', '').trim();
        }

        const product = {
            id: Date.now(),
            img: card.querySelector('.product-card__img-front')?.src || '',
            name: card.querySelector('.product-card__title a')?.innerText || 'Sản phẩm',
            priceStr: card.querySelector('.price-current')?.innerText || '0đ',
            price: parseInt(card.querySelector('.price-current')?.innerText.replace(/\D/g, '') || 0),
            size: btn.innerText,
            color: selectedColor
        };

        cart.push(product);
        saveCart();
        showToast(product);
    }

    function updateCartUI() {
        const cartCountBadge = document.querySelector('.header__cart-count');
        const cartContent = document.getElementById('cart-content');

        if (cartCountBadge) {
            cartCountBadge.innerText = cart.length;
            cart.length > 0 ? cartCountBadge.classList.add('active') : cartCountBadge.classList.remove('active');
        }

        if (!cartContent) return;

        if (cart.length === 0) {
            cartContent.innerHTML = `
                <i class="fa-solid fa-bag-shopping cart-empty-icon"></i>
                <p class="cart-empty-text">Giỏ hàng của bạn đang trống</p>
            `;
        } else {
            let total = cart.reduce((sum, item) => sum + item.price, 0);
            let totalFormatted = total.toLocaleString('vi-VN') + 'đ';

            let listHTML = '<ul class="cart-list">';
            cart.forEach((item, index) => {
                listHTML += `
                    <li class="cart-item">
                        <img src="${item.img}" class="cart-item__img" alt="${item.name}">
                        <div class="cart-item__info">
                            <a href="#" class="cart-item__name">${item.name}</a>
                            <div class="cart-item__variant">
                                <span>Size: ${item.size}</span>
                                ${item.color !== 'Mặc định' ? `<span> | Màu: <span class="cart-color-dot ${item.color}"></span></span>` : ''}
                            </div>
                            <span class="cart-item__price">${item.priceStr}</span>
                        </div>
                        <button class="cart-item__remove" onclick="removeFromCart(${index})">&times;</button>
                    </li>
                `;
            });
            listHTML += '</ul>';

            cartContent.innerHTML = `
                <div class="cart-header">
                    <span>Tạm tính: <strong>${totalFormatted}</strong></span>
                    <a href="#" class="cart-view-all">Xem giỏ hàng</a>
                </div>
                ${listHTML}
                <div style="padding: 10px;">
                    <a href="#" class="toast__btn" style="background:#000; color:#fff; text-align:center; display:block;">Thanh toán ngay</a>
                </div>
            `;
        }
    }

    function showToast(product) {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.classList.add('toast');

        toast.innerHTML = `
            <div class="toast__header">
                <span class="toast__title"><i class="fa-solid fa-check-circle"></i> Thêm vào giỏ thành công</span>
                <button class="toast__close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="toast__body">
                <img src="${product.img}" class="toast__img">
                <div class="toast__info">
                    <p class="toast__name">${product.name}</p>
                    <p style="font-size:12px; color:#666;">Size: ${product.size}</p>
                    <p class="toast__price">${product.priceStr}</p>
                </div>
            </div>
            <a href="#" class="toast__btn">Xem giỏ hàng →</a>
        `;

        toastContainer.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 3000);
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        saveCart();
    };

    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            addToCart(this);
        });
    });

    updateCartUI();
}

// =========================================
// 7. MODULE: PRODUCT CARD SLIDER
// =========================================
function initProductSlider() {
    const sliderEl = document.querySelector(".product-slider");
    if (!sliderEl) return;

    if (typeof Swiper === 'undefined') return;

    new Swiper(".product-slider", {
        slidesPerView: 1.2,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            576: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
        },
    });
}

// =========================================
// 8. INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', function () {
    initAnnouncement();
    initHeroSlider();
    initCategorySlider();
    initSwatches();
    initCart();
    initProductSlider();
});

document.addEventListener('header-loaded', function () {
    let cart = JSON.parse(localStorage.getItem('shopping_cart')) || [];
    const cartCountBadge = document.querySelector('.header__cart-count');
    if (cartCountBadge) {
        cartCountBadge.innerText = cart.length;
        cart.length > 0 ? cartCountBadge.classList.add('active') : cartCountBadge.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const barsBtn = document.querySelector(".nav__bars-btn");
    const mobileNav = document.getElementById("mobile-nav");
    const closeBtn = document.getElementById("close-mobile-nav");
    const dropdownItems = document.querySelectorAll(".has-dropdown");

    const tabs = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (barsBtn) {
        barsBtn.addEventListener("click", () => {
            mobileNav.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    dropdownItems.forEach(item => {
        const link = item.querySelector(".menu-link");
        if (link) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                item.classList.toggle("open");
            });
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));

            this.classList.add('active');

            tabPanes.forEach(pane => pane.classList.remove('active'));

            const targetId = this.getAttribute('data-target');

            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});