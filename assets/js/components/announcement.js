// =========================================
// COMPONENT: ANNOUNCEMENT BAR
// =========================================

export default function initAnnouncement() {
    const promotionArray = document.querySelectorAll('.announcement__text');
    if (promotionArray.length === 0) return;

    let index = 1;
    setInterval(function () {
        const prevPromotion = document.querySelector('.announcement__text.show');
        if (prevPromotion) {
            prevPromotion.classList.remove('show');
        }

        if (promotionArray[index]) {
            promotionArray[index].classList.add('show');
        }

        if (index >= promotionArray.length - 1) {
            if (index > 0) promotionArray[index - 1].classList.remove('show');
            index = 0;
        } else {
            index++;
        }
    }, 2000);
}
