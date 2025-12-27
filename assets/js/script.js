// --- announcement
(function main() {
    var index = 1;
    var promotionArray = document.querySelectorAll(".announcement__text");
    setInterval(function () {
        var prevPromotion = document.querySelector(".announcement__text.show");

        if (prevPromotion !== null) {
            prevPromotion.classList.remove("show");
        }

        promotionArray[index].classList.add("show");

        if (index >= promotionArray.length - 1) {
            promotionArray[index - 1].classList.remove("show");

            index = 0;
        }
        else index++;
    }, 2000);
})()
//  --- end announcement 

// --- Run slider
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero__slide');
    const dots = document.querySelectorAll('.hero__dot');
    const btnPrev = document.querySelector('.hero__control--prev');
    const btnNext = document.querySelector('.hero__control--next');
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = index;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
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

    btnNext.addEventListener('click', () => { goToSlide(currentSlide + 1); resetTimer(); });
    btnPrev.addEventListener('click', () => { goToSlide(currentSlide - 1); resetTimer(); });
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            goToSlide(index);
            resetTimer();
        });
    });

    startAutoSlide();
});
// --- end slider !

// --- Tabs 
function switchTab(gender) {
    const tabNam = document.getElementById('tab-nam');
    const tabNu = document.getElementById('tab-nu');
    const contentNam = document.getElementById('content-nam');
    const contentNu = document.getElementById('content-nu');

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
}
