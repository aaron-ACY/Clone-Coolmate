// =========================================
// MODULE: PRODUCT FILTER & SORT
// =========================================

import PRODUCTS from '../../data/products.js';

export default function initFilter() {
    // ---- Accordion toggle ----
    document.querySelectorAll('.filter-group__header').forEach(header => {
        header.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        });
    });

    // ---- Sort logic ----
    const grid        = document.querySelector('.product-grid');
    const btnSortNew  = document.getElementById('sort-new');
    const btnSortBest = document.getElementById('sort-best');

    function sortProducts(priorityTag) {
        if (!grid) return;
        const cards = Array.from(grid.children);
        cards.sort((a, b) => {
            const ta = a.getAttribute('data-tag');
            const tb = b.getAttribute('data-tag');
            if (ta === priorityTag && tb !== priorityTag) return -1;
            if (ta !== priorityTag && tb === priorityTag) return  1;
            return 0;
        });
        grid.innerHTML = '';
        cards.forEach(c => {
            c.style.animation = 'none';
            c.offsetHeight;
            c.style.animation = 'fadeIn 0.5s ease';
            grid.appendChild(c);
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const sortType  = urlParams.get('sort');
    if (sortType === 'new')  { sortProducts('new');  if (btnSortNew)  btnSortNew.classList.add('active-menu'); }
    if (sortType === 'best') { sortProducts('best'); if (btnSortBest) btnSortBest.classList.add('active-menu'); }

    const isProductPage = !!grid;

    function handleSortClick(e, type) {
        if (!isProductPage) return;
        e.preventDefault();
        sortProducts(type);
        window.history.pushState({}, '', `?sort=${type}`);
    }

    if (btnSortNew)  btnSortNew.addEventListener('click',  e => handleSortClick(e, 'new'));
    if (btnSortBest) btnSortBest.addEventListener('click', e => handleSortClick(e, 'best'));

    // ---- Filter logic (catalog pages only) ----
    if (!grid) return;

    // Build lookup: product name → product data
    const productMap = Object.fromEntries(PRODUCTS.map(p => [p.name.trim(), p]));

    // Map sidebar category label → {category, gender}
    const CATEGORY_LABEL_MAP = {
        "men's shirts":          { category: 'shirts',      gender: 'male'   },
        "men's pants":           { category: 'pants',       gender: 'male'   },
        "women's shirts":        { category: 'shirts',      gender: 'female' },
        "women's sports skirts": { category: 'skirts',      gender: 'female' },
        "women's pants":         { category: 'pants',       gender: 'female' },
        "men's accessories":     { category: 'accessories', gender: 'male'   },
        "women's accessories":   { category: 'accessories', gender: 'female' },
    };

    const GROUP_LABEL_MAP = {
        "daily wear": 'daily',
        "sportswear": 'sports',
    };

    const COLOR_LABEL_MAP = {
        "black":     'black',
        "white":     'white',
        "navy blue": 'navy',
    };

    const PRICE_RANGE_MAP = {
        "under 100k":  p => p < 100000,
        "100k – 300k": p => p >= 100000 && p <= 300000,
        "over 300k":   p => p > 300000,
    };

    // ---- Helpers to read card data from DOM ----

    function getCardData(card) {
        const titleEl = card.querySelector('.product-card__title a') || card.querySelector('.product-card__title');
        const name = titleEl?.textContent.trim() || '';
        const product = productMap[name] || {};

        // Price from .price-current text e.g. "299.000đ" → 299000
        const priceText = card.querySelector('.price-current')?.textContent.trim() || '0';
        const price = parseInt(priceText.replace(/[^0-9]/g, '')) || 0;

        // Colors from swatch classes
        const colors = Array.from(card.querySelectorAll('.swatch')).map(sw => {
            if (sw.classList.contains('bg-black')) return 'black';
            if (sw.classList.contains('bg-navy'))  return 'navy';
            if (sw.classList.contains('bg-white') || sw.classList.contains('border-gray')) return 'white';
            if (sw.classList.contains('bg-gray'))  return 'gray';
            return null;
        }).filter(Boolean);

        // Sizes from quick-add size buttons
        const sizes = Array.from(card.querySelectorAll('.size-btn')).map(btn =>
            btn.textContent.trim().toLowerCase()
        );

        return {
            category: product.category || '',
            gender:   product.gender   || '',
            group:    product.group    || '',
            price,
            colors,
            sizes,
        };
    }

    // ---- Read sidebar filter state ----

    function getActiveFilters() {
        const state = {
            categories: [],  // [{category, gender, label}]
            groups:     [],  // [{value, label}]
            gender:     null, // {value, label}
            sizes:      [],  // [{value, label}]
            colors:     [],  // [{value, label}]
            prices:     [],  // [{checker, label}]
        };

        document.querySelectorAll('.filter-group').forEach(group => {
            const title = group.querySelector('.filter-group__title')?.textContent.trim().toLowerCase();

            if (title === 'category') {
                group.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    const label = cb.closest('label')?.querySelector('span')?.textContent.trim() || '';
                    const mapped = CATEGORY_LABEL_MAP[label.toLowerCase()];
                    if (mapped) state.categories.push({ ...mapped, label });
                });

            } else if (title === 'product groups') {
                group.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    const label = cb.closest('label')?.querySelector('span')?.textContent.trim() || '';
                    const value = GROUP_LABEL_MAP[label.toLowerCase()];
                    if (value) state.groups.push({ value, label });
                });

            } else if (title === 'gender') {
                const checked = group.querySelector('input[type="radio"]:checked');
                if (checked) {
                    const label = checked.closest('label')?.querySelector('span')?.textContent.trim() || '';
                    state.gender = { value: label.toLowerCase(), label };
                }

            } else if (title === 'size') {
                group.querySelectorAll('.filter-size-grid button.filter-active').forEach(btn => {
                    const label = btn.textContent.trim();
                    state.sizes.push({ value: label.toLowerCase(), label });
                });

            } else if (title === 'color') {
                group.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    const label = cb.closest('label')?.querySelector('span')?.textContent.trim() || '';
                    const value = COLOR_LABEL_MAP[label.toLowerCase()];
                    if (value) state.colors.push({ value, label });
                });

            } else if (title === 'price') {
                group.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    const label = cb.closest('label')?.querySelector('span')?.textContent.trim() || '';
                    const checker = PRICE_RANGE_MAP[label.toLowerCase()];
                    if (checker) state.prices.push({ checker, label });
                });
            }
        });

        return state;
    }

    // ---- Apply filters ----

    function applyFilters() {
        const filters = getActiveFilters();
        const cards   = grid.querySelectorAll('.product-card');
        let visible   = 0;

        cards.forEach(card => {
            const d = getCardData(card);
            let pass = true;

            // Category (OR within group, AND across groups)
            if (filters.categories.length > 0) {
                const match = filters.categories.some(f =>
                    f.category === d.category &&
                    (f.gender === d.gender || d.gender === 'unisex')
                );
                if (!match) pass = false;
            }

            // Product group
            if (pass && filters.groups.length > 0) {
                if (!filters.groups.some(f => f.value === d.group)) pass = false;
            }

            // Gender (radio — single selection)
            if (pass && filters.gender) {
                const fg = filters.gender.value;
                const ok = d.gender === fg || d.gender === 'unisex' || fg === 'unisex';
                if (!ok) pass = false;
            }

            // Size
            if (pass && filters.sizes.length > 0) {
                if (!filters.sizes.some(f => d.sizes.includes(f.value))) pass = false;
            }

            // Color
            if (pass && filters.colors.length > 0) {
                if (!filters.colors.some(f => d.colors.includes(f.value))) pass = false;
            }

            // Price
            if (pass && filters.prices.length > 0) {
                if (!filters.prices.some(f => f.checker(d.price))) pass = false;
            }

            card.style.display = pass ? '' : 'none';
            if (pass) visible++;
        });

        updateResultsCount(visible);
        updateActiveChips(filters);
    }

    // ---- Update results count ----
    function updateResultsCount(count) {
        const el = document.getElementById('results-count');
        if (el) el.textContent = `${count} result${count !== 1 ? 's' : ''}`;
    }

    // ---- Render active filter chips ----
    function updateActiveChips(filters) {
        const container = document.getElementById('active-filters');
        if (!container) return;

        const chips = [];
        filters.categories.forEach(f => chips.push({ label: f.label, type: 'category' }));
        filters.groups.forEach(f    => chips.push({ label: f.label, type: 'group'    }));
        if (filters.gender)          chips.push({ label: filters.gender.label, type: 'gender' });
        filters.sizes.forEach(f     => chips.push({ label: f.label, type: 'size'     }));
        filters.colors.forEach(f    => chips.push({ label: f.label, type: 'color'    }));
        filters.prices.forEach(f    => chips.push({ label: f.label, type: 'price'    }));

        container.innerHTML = '';

        chips.forEach(chip => {
            const span = document.createElement('span');
            span.className = 'filter-chip';
            span.innerHTML = `${chip.label} <i class="fa-solid fa-xmark"></i>`;
            span.addEventListener('click', () => removeFilter(chip.label, chip.type));
            container.appendChild(span);
        });

        if (chips.length > 0) {
            const a = document.createElement('a');
            a.href = '#';
            a.className = 'text-[13px] text-[#2f5acf] font-semibold';
            a.textContent = 'Clear Filters';
            a.addEventListener('click', e => { e.preventDefault(); clearAllFilters(); });
            container.appendChild(a);
        }
    }

    // ---- Remove one filter by clicking its chip ----
    function removeFilter(label, type) {
        document.querySelectorAll('.filter-group').forEach(group => {
            const title = group.querySelector('.filter-group__title')?.textContent.trim().toLowerCase();

            if (type === 'category' && title === 'category') {
                group.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    if (cb.closest('label')?.querySelector('span')?.textContent.trim() === label) cb.checked = false;
                });
            } else if (type === 'group' && title === 'product groups') {
                group.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    if (cb.closest('label')?.querySelector('span')?.textContent.trim() === label) cb.checked = false;
                });
            } else if (type === 'gender' && title === 'gender') {
                group.querySelectorAll('input[type="radio"]:checked').forEach(r => r.checked = false);
            } else if (type === 'size' && title === 'size') {
                group.querySelectorAll('.filter-size-grid button.filter-active').forEach(btn => {
                    if (btn.textContent.trim() === label) btn.classList.remove('filter-active');
                });
            } else if (type === 'color' && title === 'color') {
                group.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    if (cb.closest('label')?.querySelector('span')?.textContent.trim() === label) cb.checked = false;
                });
            } else if (type === 'price' && title === 'price') {
                group.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    if (cb.closest('label')?.querySelector('span')?.textContent.trim() === label) cb.checked = false;
                });
            }
        });
        applyFilters();
    }

    // ---- Clear all filters ----
    function clearAllFilters() {
        document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(cb => cb.checked = false);
        document.querySelectorAll('.filter-group input[type="radio"]').forEach(r  => r.checked  = false);
        document.querySelectorAll('.filter-size-grid button').forEach(btn => btn.classList.remove('filter-active'));
        applyFilters();
    }

    // ---- Size button toggle ----
    document.querySelectorAll('.filter-size-grid button').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('filter-active');
            applyFilters();
        });
    });

    // ---- Checkbox / radio change ----
    document.querySelectorAll('.filter-group input[type="checkbox"], .filter-group input[type="radio"]').forEach(input => {
        input.addEventListener('change', applyFilters);
    });

    // Initial run to show correct count
    applyFilters();
}
