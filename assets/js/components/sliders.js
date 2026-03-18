// =========================================
// COMPONENT: SLIDERS
// Depends on Swiper loaded via CDN (global)
// =========================================

export function initHeroSlider() {
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

export function initCategorySlider() {
    const sliderContainer = document.querySelector('.categories__grid');
    if (!sliderContainer) return;

    if (typeof Swiper === 'undefined') {
        console.warn('Swiper not loaded. Category slider will not work.');
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

export function initProductSlider() {
    const sliderEl = document.querySelector('.product-slider');
    if (!sliderEl) return;

    if (typeof Swiper === 'undefined') return;

    new Swiper('.product-slider', {
        slidesPerView: 1.2,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            576: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
        },
    });
}
