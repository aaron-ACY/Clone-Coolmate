import PRODUCTS from '../data/products.js';

// =========================================
// HOME PAGE PRODUCT SLIDERS
// "AUTUMN/WINTER PRODUCTS" → tag === 'best'
// "RUNNING PRODUCTS"       → group === 'sports'
// =========================================

function parsePrice(str) {
    return parseInt(str.replace(/\./g, '').replace('đ', ''), 10);
}

function renderCard(product) {
    const tagLabel = product.tag === 'best' ? 'BEST SELLER' : 'NEW';

    let priceBlock = `<span class="price-current font-bold text-base text-black">${product.price}</span>`;
    if (product.originalPrice) {
        const discount = Math.round((1 - parsePrice(product.price) / parsePrice(product.originalPrice)) * 100);
        priceBlock += `
            <span class="price-discount bg-[#2f5acf] text-white text-[11px] font-bold py-[2px] px-1 rounded-[3px]">-${discount}%</span>
            <span class="price-original text-[13px] text-[#999] line-through">${product.originalPrice}</span>`;
    }

    return `
        <div class="swiper-slide flex flex-col">
            <div class="product-card__image-wrapper relative rounded-[15px] overflow-hidden bg-[#e5e5e5] mb-3 aspect-[4/5]">
                <a href="${product.url}" class="block w-full h-full">
                    <img src="${product.img}" alt="front" class="product-card__img-front w-full h-full object-cover block transition-opacity duration-[400ms] opacity-100">
                    <img src="${product.img}" alt="back" class="product-card__img-back w-full h-full object-cover block transition-opacity duration-[400ms] absolute inset-0 opacity-0 z-[1]">
                </a>
                <span class="absolute top-[15px] right-[15px] bg-black text-white text-[11px] font-extrabold py-[6px] px-3 rounded-[20px] z-[5] uppercase tracking-[0.5px]">${tagLabel}</span>
            </div>
            <div class="flex flex-col gap-1 pt-2">
                <h3 class="text-base font-medium text-[#333] mb-1 leading-[1.4] whitespace-nowrap overflow-hidden text-ellipsis">
                    <a href="${product.url}" class="no-underline text-inherit transition-colors duration-200 hover:text-[#2f5acf]">${product.name}</a>
                </h3>
                <div class="flex items-center gap-2 mt-[2px]">
                    ${priceBlock}
                </div>
            </div>
        </div>`;
}

export default function initHomeProducts() {
    const autumnWrapper = document.getElementById('autumn-winter-wrapper');
    if (autumnWrapper) {
        const bestSellers = PRODUCTS.filter(p => p.tag === 'best');
        autumnWrapper.innerHTML = bestSellers.map(renderCard).join('');
    }

    const runningWrapper = document.getElementById('running-wrapper');
    if (runningWrapper) {
        const sportProducts = PRODUCTS.filter(p => p.group === 'sports');
        runningWrapper.innerHTML = sportProducts.map(renderCard).join('');
    }
}
