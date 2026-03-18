// =========================================
// SEARCH — Product search functionality
//   • Desktop: live dropdown in header
//   • Mobile: results list in mobile nav
//   • Catalog pages: filter grid via ?q= URL param
// =========================================

import PRODUCTS from '../data/products.js';

// ---- Helpers ----

function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

function filterProducts(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(q));
}

function buildResultItem(product, query) {
    const li = document.createElement('li');
    li.className = 'search-result-item';
    li.innerHTML = `
        <a href="${product.url}?q=${encodeURIComponent(product.name)}" class="search-result-link">
            <img src="${product.img}" alt="${product.name}" class="search-result-img">
            <div class="search-result-info">
                <span class="search-result-name">${highlight(product.name, query)}</span>
                <span class="search-result-price">${product.price}</span>
            </div>
        </a>`;
    return li;
}

// ---- Desktop search ----

function initDesktopSearch() {
    const input = document.querySelector('.header__search-input');
    if (!input) return;

    // Create dropdown
    const dropdown = document.createElement('ul');
    dropdown.className = 'search-dropdown';
    input.parentElement.appendChild(dropdown);

    function showDropdown(query) {
        const results = filterProducts(query).slice(0, 5);
        dropdown.innerHTML = '';

        if (!results.length) {
            dropdown.classList.remove('search-dropdown--visible');
            return;
        }

        results.forEach(p => dropdown.appendChild(buildResultItem(p, query)));

        // "View all" link
        const li = document.createElement('li');
        li.className = 'search-result-all';
        li.innerHTML = `<a href="products.html?q=${encodeURIComponent(query)}">See all results for "<strong>${query}</strong>"</a>`;
        dropdown.appendChild(li);

        dropdown.classList.add('search-dropdown--visible');
    }

    input.addEventListener('input', () => showDropdown(input.value));

    input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && input.value.trim()) {
            window.location.href = `products.html?q=${encodeURIComponent(input.value.trim())}`;
        }
        if (e.key === 'Escape') {
            dropdown.classList.remove('search-dropdown--visible');
        }
    });

    document.addEventListener('click', e => {
        if (!input.parentElement.contains(e.target)) {
            dropdown.classList.remove('search-dropdown--visible');
        }
    });
}

// ---- Mobile search ----

function initMobileSearch() {
    const input = document.getElementById('mobile-search-input');
    if (!input) return;

    const resultsContainer = document.createElement('ul');
    resultsContainer.className = 'mobile-search-results';
    input.parentElement.parentElement.appendChild(resultsContainer);

    function showResults(query) {
        const results = filterProducts(query).slice(0, 6);
        resultsContainer.innerHTML = '';

        if (!results.length) {
            resultsContainer.classList.remove('mobile-search-results--visible');
            return;
        }

        results.forEach(p => resultsContainer.appendChild(buildResultItem(p, query)));
        resultsContainer.classList.add('mobile-search-results--visible');
    }

    input.addEventListener('input', () => showResults(input.value));

    input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && input.value.trim()) {
            window.location.href = `products.html?q=${encodeURIComponent(input.value.trim())}`;
        }
    });
}

// ---- Catalog page filter ----

function initCatalogFilter() {
    const grid = document.querySelector('.product-grid');
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    if (!query) return;

    const q = query.trim().toLowerCase();
    const cards = grid.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const titleEl = card.querySelector('.product-card__title');
        const title = titleEl ? titleEl.textContent.toLowerCase() : '';
        if (title.includes(q)) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Update results count
    const countEl = document.getElementById('results-count');
    if (countEl) {
        countEl.textContent = `${visibleCount} result${visibleCount !== 1 ? 's' : ''}`;
    }

    // Update page heading to reflect search
    const heading = document.querySelector('.catalog-heading');
    if (heading) {
        heading.textContent = `Search: "${query}"`;
    }
}

// ---- Main export ----

export default function initSearch() {
    // Header is already injected synchronously by initComponents()
    // before initSearch() is called, so we can query DOM directly.
    initDesktopSearch();
    initMobileSearch();
    initCatalogFilter();
}
