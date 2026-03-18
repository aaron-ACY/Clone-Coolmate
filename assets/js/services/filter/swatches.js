// =========================================
// MODULE: COLOR SWATCHES
// =========================================

export default function initSwatches() {
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
