// =========================================
// SERVICE: SHOPPING CART
// =========================================

import { STORAGE_KEYS, EVENTS } from '../constants/constants.js';

export function getDynCartKey() {
    if (localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN) === 'true') {
        const uStr = localStorage.getItem(STORAGE_KEYS.USER_ACCOUNT);
        if (uStr) {
            try {
                const u = JSON.parse(uStr);
                if (u && u.email) return STORAGE_KEYS.CART + '_' + u.email;
            } catch (err) { }
        }
    }
    return STORAGE_KEYS.CART;
}

export default function initCart() {
    let dynKey = getDynCartKey();
    let cart = JSON.parse(localStorage.getItem(dynKey)) || [];
    const sizeButtons = document.querySelectorAll('.size-btn');
    const toastContainer = document.getElementById('toast-container');

    function saveCart() {
        localStorage.setItem(dynKey, JSON.stringify(cart));
        updateCartUI();
    }

    window.addEventListener('storage', function (e) {
        if (e.key === dynKey || e.key === STORAGE_KEYS.IS_LOGGED_IN || e.key === STORAGE_KEYS.USER_ACCOUNT || e.key === null) {
            dynKey = getDynCartKey();
            cart = JSON.parse(localStorage.getItem(dynKey)) || [];
            updateCartUI();
        }
    });

    window.addEventListener(EVENTS.AUTH_LOGIN, function () {
        dynKey = getDynCartKey();
        cart = JSON.parse(localStorage.getItem(dynKey)) || [];
        updateCartUI();
    });

    function addToCart(btn) {
        if (localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN) !== 'true') {
            if (typeof window.openLoginModal === 'function') window.openLoginModal();
            return;
        }

        const card = btn.closest('.product-card');
        if (!card) return;

        let selectedColor = 'Default';
        const activeSwatch = card.querySelector('.swatch.active');
        if (activeSwatch) {
            const bgClass = [...activeSwatch.classList].find(
                cls => cls.startsWith('bg-') && !cls.includes('/') && !cls.includes('[')
            );
            if (bgClass) selectedColor = bgClass;
        }

        const name     = card.querySelector('.product-card__title a')?.innerText || 'Product';
        const size     = btn.innerText.trim();
        const price    = parseInt(card.querySelector('.price-current')?.innerText.replace(/\D/g, '') || 0);
        const priceStr = card.querySelector('.price-current')?.innerText || '0đ';
        const img      = card.querySelector('.product-card__img-front')?.src || '';

        const existing = cart.find(i => i.name === name && i.size === size && i.color === selectedColor);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id: Date.now(), img, name, priceStr, price, size, color: selectedColor, qty: 1 });
        }

        saveCart();
        showToast({ img, name, priceStr, size });
    }

    function colorBadge(color) {
        if (!color || color === 'Default') return '';
        const border = (color === 'bg-white') ? 'border border-gray-300' : 'border border-black/10';
        return `<span class="inline-block w-[14px] h-[14px] rounded-full ${color} ${border} ml-1 align-middle flex-shrink-0"></span>`;
    }

    function updateCartUI() {
        const cartCountBadge = document.querySelector('.header__cart-count');
        const cartContent    = document.getElementById('cart-content');

        const totalQty = cart.reduce((s, i) => s + (i.qty || 1), 0);
        if (cartCountBadge) {
            cartCountBadge.innerText = totalQty;
            totalQty > 0
                ? cartCountBadge.classList.add('active')
                : cartCountBadge.classList.remove('active');
        }

        if (!cartContent) return;

        if (cart.length === 0) {
            cartContent.innerHTML = `
                <div style="padding:32px 20px;text-align:center">
                    <div style="width:56px;height:56px;background:#f5f5f5;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px">
                        <i class="fa-solid fa-bag-shopping" style="font-size:22px;color:#ccc"></i>
                    </div>
                    <p style="font-size:14px;font-weight:600;color:#222;margin:0 0 4px">Your cart is empty</p>
                    <p style="font-size:12px;color:#aaa;margin:0">Add some products to get started</p>
                </div>`;
            return;
        }

        const total          = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);
        const totalFormatted = total.toLocaleString('vi-VN') + 'đ';

        const itemsHTML = cart.map((item, idx) => {
            const qty      = item.qty || 1;
            const itemTotal = (item.price * qty).toLocaleString('vi-VN') + 'đ';
            return `
            <div style="display:flex;gap:12px;padding:12px 16px;border-bottom:1px solid #f5f5f5;align-items:flex-start">
                <div style="position:relative;flex-shrink:0">
                    <img src="${item.img}" alt="${item.name}"
                         style="width:64px;height:64px;object-fit:cover;border-radius:10px;display:block;border:1px solid #f0f0f0">
                    <button onclick="removeFromCart(${idx})"
                            style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;border-radius:50%;background:#111;color:#fff;border:none;cursor:pointer;font-size:12px;display:flex;align-items:center;justify-content:center;line-height:1">&times;</button>
                </div>
                <div style="flex:1;min-width:0">
                    <p class="cart-item__name"
                       style="font-size:13px;font-weight:600;color:#111;margin:0 0 6px;line-height:1.4;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">${item.name}</p>
                    <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
                        <span style="font-size:11px;background:#f0f0f0;color:#555;padding:2px 8px;border-radius:6px;font-weight:500">Size ${item.size}</span>
                        ${colorBadge(item.color)}
                    </div>
                    <div style="display:flex;align-items:center;justify-content:space-between">
                        <div style="display:flex;align-items:center;gap:0;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden">
                            <button onclick="changeCartQty(${idx},-1)"
                                    style="width:28px;height:28px;border:none;background:#f5f5f5;color:#111;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;font-weight:600">−</button>
                            <span style="min-width:28px;text-align:center;font-size:13px;font-weight:700;color:#111">${qty}</span>
                            <button onclick="changeCartQty(${idx},1)"
                                    style="width:28px;height:28px;border:none;background:#f5f5f5;color:#111;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;font-weight:600">+</button>
                        </div>
                        <span style="font-size:14px;font-weight:700;color:#111">${itemTotal}</span>
                    </div>
                </div>
            </div>`;
        }).join('');

        cartContent.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px 10px;border-bottom:1px solid #f0f0f0;background:#fafafa">
                <div style="display:flex;align-items:center;gap:8px">
                    <span style="font-size:14px;font-weight:700;color:#111">Cart</span>
                    <span style="background:#111;color:#fff;font-size:10px;font-weight:700;width:18px;height:18px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center">${cart.length}</span>
                </div>
                <span style="font-size:12px;color:#777">Subtotal: <strong style="color:#111">${totalFormatted}</strong></span>
            </div>
            <div class="cart-list" style="max-height:260px;overflow-y:auto">
                ${itemsHTML}
            </div>
            <div style="padding:12px">
                <a href="#" id="btn-checkout"
                   style="display:flex;align-items:center;justify-content:center;gap:8px;background:#2f5acf;color:#fff;padding:13px 16px;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;transition:background .2s">
                    <i class="fa-solid fa-bag-shopping" style="font-size:13px"></i>
                    Checkout &nbsp;·&nbsp; ${totalFormatted}
                </a>
            </div>`;

        document.getElementById('btn-checkout').addEventListener('click', function (e) {
            e.preventDefault();
            showCheckoutToast(totalFormatted);
            cart = [];
            saveCart();
        });
    }

    function showCheckoutToast(total) {
        if (!toastContainer) return;
        const el = document.createElement('div');
        el.style.cssText = 'background:#fff;border-radius:16px;width:300px;overflow:hidden;margin-bottom:12px;box-shadow:0 8px 30px rgba(0,0,0,0.15)';
        el.innerHTML = `
            <div style="height:3px;background:linear-gradient(90deg,#22c55e,#16a34a)"></div>
            <div style="padding:20px;text-align:center">
                <div style="width:48px;height:48px;background:#f0fdf4;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px">
                    <i class="fa-solid fa-check" style="color:#22c55e;font-size:20px"></i>
                </div>
                <p style="font-size:15px;font-weight:700;color:#111;margin:0 0 4px">Payment Successful!</p>
                <p style="font-size:12px;color:#999;margin:0 0 14px">Your order has been placed</p>
                <div style="background:#f8f8f8;border-radius:10px;padding:8px 16px;font-size:13px;color:#555">
                    Total paid: <strong style="color:#111">${total}</strong>
                </div>
            </div>`;
        toastContainer.appendChild(el);
        setTimeout(() => { if (el.parentNode) el.remove(); }, 4000);
    }

    function showToast(product) {
        if (!toastContainer) return;
        const el = document.createElement('div');
        el.style.cssText = 'background:#fff;border-radius:16px;width:310px;overflow:hidden;margin-bottom:12px;box-shadow:0 8px 30px rgba(0,0,0,0.15);animation:slideInLeft .4s cubic-bezier(.175,.885,.32,1.275)';
        el.innerHTML = `
            <div style="height:3px;background:linear-gradient(90deg,#2f5acf,#60a5fa)"></div>
            <div style="padding:14px 14px 0">
                <div style="display:flex;gap:12px;align-items:flex-start">
                    <img src="${product.img}" alt="${product.name}"
                         style="width:58px;height:58px;object-fit:cover;border-radius:10px;flex-shrink:0;border:1px solid #f0f0f0">
                    <div style="flex:1;min-width:0">
                        <div style="display:flex;align-items:center;gap:5px;margin-bottom:5px">
                            <i class="fa-solid fa-circle-check" style="color:#22c55e;font-size:12px"></i>
                            <span style="font-size:11px;font-weight:700;color:#16a34a;text-transform:uppercase;letter-spacing:.05em">Added to Cart</span>
                        </div>
                        <p style="font-size:13px;font-weight:600;color:#111;margin:0 0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${product.name}</p>
                        <p style="font-size:11px;color:#999;margin:0">Size: <strong style="color:#555">${product.size}</strong></p>
                    </div>
                    <button onclick="this.closest('div[style]').remove()"
                            style="background:none;border:none;cursor:pointer;color:#ccc;font-size:18px;line-height:1;padding:0;flex-shrink:0">&times;</button>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin:10px 0">
                    <span style="font-size:11px;color:#aaa">Price</span>
                    <span style="font-size:15px;font-weight:700;color:#111">${product.priceStr}</span>
                </div>
            </div>
            <a href="#" style="display:flex;align-items:center;justify-content:center;gap:8px;background:#2f5acf;color:#fff;padding:11px;font-size:13px;font-weight:600;text-decoration:none;margin:0">
                View Cart &nbsp;<i class="fa-solid fa-arrow-right" style="font-size:11px"></i>
            </a>`;
        toastContainer.appendChild(el);
        setTimeout(() => { if (el.parentNode) el.remove(); }, 3500);
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        saveCart();
    };

    window.changeCartQty = function (index, delta) {
        if (!cart[index]) return;
        cart[index].qty = (cart[index].qty || 1) + delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
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
