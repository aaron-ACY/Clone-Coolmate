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

document.addEventListener('DOMContentLoaded', function () {
    const filterHeaders = document.querySelectorAll('.filter-group__header');

    filterHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const parentGroup = this.parentElement;
            parentGroup.classList.toggle('active');
        });
    });
    const grid = document.querySelector('.product-grid');
    const btnSortNew = document.getElementById('sort-new');
    const btnSortBest = document.getElementById('sort-best');

    function sortProducts(priorityTag) {
        if (!grid) return;

        const productArray = Array.from(grid.children);

        productArray.sort((a, b) => {
            const tagA = a.getAttribute('data-tag');
            const tagB = b.getAttribute('data-tag');

            if (tagA === priorityTag && tagB !== priorityTag) return -1;
            if (tagA !== priorityTag && tagB === priorityTag) return 1;
            return 0;
        });

        grid.innerHTML = '';
        productArray.forEach(product => {
            product.style.animation = 'none';
            product.offsetHeight;
            product.style.animation = 'fadeIn 0.5s ease';
            grid.appendChild(product);
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const sortType = urlParams.get('sort');

    if (sortType === 'new') {
        sortProducts('new');
        if (btnSortNew) btnSortNew.classList.add('active-menu');
    } else if (sortType === 'best') {
        sortProducts('best');
        if (btnSortBest) btnSortBest.classList.add('active-menu');
    }

    const isProductPage = window.location.pathname.includes('products.html') || document.querySelector('.product-grid');

    function handleSortClick(e, type) {
        if (isProductPage) {
            e.preventDefault();
            sortProducts(type);

            const newUrl = `products.html?sort=${type}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
        }
    }

    if (btnSortNew) {
        btnSortNew.addEventListener('click', (e) => handleSortClick(e, 'new'));
    }

    if (btnSortBest) {
        btnSortBest.addEventListener('click', (e) => handleSortClick(e, 'best'));
    }
});