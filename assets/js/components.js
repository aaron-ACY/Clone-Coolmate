const headerContent = `
<header class="header">
        <div class="header__main">
            <div class="container header__main-inner">
            <div class="nav__bars-btn">
                <i class="fa-regular fa-bars"></i>
            </div>

            <div class="nav-overlay" id="nav-overlay"></div>

            <nav class="mobile-nav" id="mobile-nav">
                <div class="mobile-nav__header">
                    <div class="header-left">
                        <a href="#" class="mobile-logo">
                            <img src="./assets/img/logo-mobile.svg" alt="Coolmate">
                        </a>
                    </div>
                    <div class="close-btn" id="close-mobile-nav">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>

                <div class="mobile-nav__search">
                    <div class="search-wrapper">
                        <input type="text" placeholder="Tìm kiếm...">
                        <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>

                <div class="mobile-nav__tabs">
                    <div class="tab-item active" data-target="mobile-tab-nam">NAM</div>
                    <div class="tab-item" data-target="mobile-tab-nu">NỮ</div>
                    <div class="tab-item" data-target="mobile-tab-thethao">THỂ THAO</div>
                </div>

                <div class="mobile-nav__content-wrapper">

                <div id="mobile-tab-nam" class="tab-pane active">
                    <div class="mobile-nav__content">
                        <div class="mobile-nav__banner">
                            <img src="./assets/img/DoThuDong.avif" alt="Nam">
                            <div class="banner-overlay"><span class="banner-text">Đồ Thu Đông Nam</span></div>
                        </div>
                        <a href="#" class="btn-explore">KHÁM PHÁ ĐỒ NAM</a>
                        <ul class="mobile-nav__list">
                            <li class="menu-item has-dropdown">
                                <div class="menu-link">New products <i class="fa-solid fa-chevron-down"></i></div>
                                <ul class="sub-menu">
                                    <li><a href="#">ECC Collection</a></li>
                                    <li><a href="#">Excool Collection</a></li>
                                    <li><a href="#">Seamless</a></li>
                                    <li><a href="#">Promax</a></li>
                                    <li><a href="#">Autumn/Winter clothing</a></li>
                                    <li><a href="#">Ghệ Nguyên</a></li>
                                </ul>
                            </li>
                            <li class="menu-item has-dropdown">
                                <div class="menu-link">ÁO NAM <i class="fa-solid fa-chevron-down"></i></div>
                                <ul class="sub-menu">
                                    <li><a href="#">Áo Thun</a></li>
                                    <li><a href="#">Áo Polo</a></li>
                                </ul>
                            </li>
                            <li class="menu-item has-dropdown">
                                <div class="menu-link">Quần NAM <i class="fa-solid fa-chevron-down"></i></div>
                                <ul class="sub-menu">
                                    <li><a href="#">Áo Thun</a></li>
                                    <li><a href="#">Áo Polo</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="mobile-tab-nu" class="tab-pane">
                    <div class="mobile-nav__content">
                        <div class="mobile-nav__banner">
                            <img src="./assets/img/DoNu.avif" alt="Nữ">
                            <div class="banner-overlay"><span class="banner-text">BST Mùa Đông Nữ</span></div>
                        </div>
                        <a href="#" class="btn-explore">KHÁM PHÁ ĐỒ NỮ</a>
                        <ul class="mobile-nav__list">
                            <li class="menu-item">HÀNG MỚI VỀ</li>
                            <li class="menu-item has-dropdown">
                                <div class="menu-link">ÁO NỮ <i class="fa-solid fa-chevron-down"></i></div>
                                <ul class="sub-menu">
                                    <li><a href="#">Áo Croptop</a></li>
                                    <li><a href="#">Áo Thun Nữ</a></li>
                                </ul>
                            </li>
                            <li class="menu-item">LEGGING & QUẦN</li>
                        </ul>
                    </div>
                </div>

                <div id="mobile-tab-thethao" class="tab-pane">
                    <div class="mobile-nav__content">
                        <div class="mobile-nav__banner">
                            <img src="./assets/img/TheThao.avif" alt="Thể thao">
                            <div class="banner-overlay"><span class="banner-text">Đồ Thể Thao Pro</span></div>
                        </div>
                        <a href="#" class="btn-explore">KHÁM PHÁ SPORT</a>
                        <ul class="mobile-nav__list">
                            <li class="menu-item">CHẠY BỘ</li>
                            <li class="menu-item">GYM & FITNESS</li>
                            <li class="menu-item">PICKLEBALL</li>
                        </ul>
                    </div>
                </div>

            </div>
            </nav>
                <a href="index.html" class="header__logo">
                    <img src="./assets/img/favicon.ico" alt="Logo">
                </a>
                
                <nav class="header__nav">
                    <ul class="header__menu">

                        <li class="header__menu-item">
                            <a href="products.html?sort=new" id="sort-new"
                                class="header__menu-link header__menu-link--bold">NEW</a>
                        </li>

                        <li class="header__menu-item">
                            <a href="products.html?sort=best" id="sort-best"
                                class="header__menu-link header__menu-link--blue">Bestselling</a>
                        </li>

                        <li class="header__menu-item header__menu-item--has-mega">
                            <a href="products.html" class="header__menu-link">MALE</a>

                            <div class="mega-menu">
                                <div class="mega-menu__content">
                                    <div class="mega-menu__col">
                                        <h3 class="mega-menu__title"><a href="#">ALL PRODUCTS <i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <ul class="mega-menu__list">
                                            <li><a href="#" class="mega-menu__link mega-menu__link--blue">New
                                                    products</a></li>
                                            <li><a href="#" class="mega-menu__link">ECC Collection</a></li>
                                            <li><a href="#" class="mega-menu__link">Excool Collection</a></li>
                                            <li><a href="#" class="mega-menu__link">Seamless</a></li>
                                            <li><a href="#" class="mega-menu__link">Promax</a></li>
                                            <li><a href="#" class="mega-menu__link">Autumn/Winter clothing</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__col">
                                        <h3 class="mega-menu__title"><a href="#">MEN'S SHIRTS <i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <ul class="mega-menu__list">
                                            <li><a href="#" class="mega-menu__link">Tank top</a></li>
                                            <li><a href="#" class="mega-menu__link">T-shirt</a></li>
                                            <li><a href="#" class="mega-menu__link">Sport shirt</a></li>
                                            <li><a href="#" class="mega-menu__link">Polo</a></li>
                                            <li><a href="#" class="mega-menu__link">Shirt</a></li>
                                            <li><a href="#" class="mega-menu__link">Long sleeve</a></li>
                                            <li><a href="#" class="mega-menu__link">Sweater</a></li>
                                            <li><a href="#" class="mega-menu__link">Hoodie</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__col">
                                        <h3 class="mega-menu__title"><a href="#">Pants<i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <ul class="mega-menu__list">
                                            <li><a href="#" class="mega-menu__link">Shorts</a></li>
                                            <li><a href="#" class="mega-menu__link">Jogger</a></li>
                                            <li><a href="#" class="mega-menu__link">Sports Pants</a></li>
                                            <li><a href="#" class="mega-menu__link">Trousers</a></li>
                                            <li><a href="#" class="mega-menu__link">Jeans</a></li>
                                            <li><a href="#" class="mega-menu__link">Khaki</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__col">
                                        <h3 class="mega-menu__title"><a href="#">ACCESSORIES<i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <ul class="mega-menu__list">
                                            <li><a href="#" class="mega-menu__link">Socks</a></li>
                                            <li><a href="#" class="mega-menu__link">Hats</a></li>
                                            <li><a href="#" class="mega-menu__link">Bags</a></li>
                                            <li><a href="#" class="mega-menu__link">Belt</a></li>
                                            <li><a href="#" class="mega-menu__link i-gray">(towel, wallet,...)</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__col mega-menu__col--images">
                                        <div class="mega-menu__img-wrapper">
                                            <img src="./assets/img/DoThuDong.avif" alt="Autumn Winter">
                                            <span class="mega-menu__img-tag">Autumn/Winter clothing</span>
                                        </div>
                                        <div class="mega-menu__img-wrapper">
                                            <img src="./assets/img/pickleballNam.avif" alt="Pickleball">
                                            <span class="mega-menu__img-tag">Men's Pickleball</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mega-menu__bottom-bar">
                                    <div class="container">
                                        <div class="mega-menu__bottom-content">
                                            <span class="mega-menu__bottom-label">ACCORDING TO NEED</span>
                                            <a href="#" class="mega-menu__bottom-link">SPORTSWEAR</a>
                                            <a href="#" class="mega-menu__bottom-link">DAILY WEAR</a>
                                            <a href="#" class="mega-menu__bottom-link">OFFICE WEAR</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="header__menu-item header__menu-item--has-mega">
                            <a href="products.html" class="header__menu-link">FEMALE</a>
                            <div class="mega-menu">
                                <div class="mega-menu__content">
                                    <div class="mega-menu__col">
                                        <h3 class="mega-menu__title"><a href="#">ALL PRODUCTS <i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <ul class="mega-menu__list">
                                            <li><a href="#" class="mega-menu__link mega-menu__link--blue">New
                                                    products</a></li>
                                            <li><a href="#" class="mega-menu__link">Cool mate Active</a></li>
                                            <li><a href="#" class="mega-menu__link">Cool mate Basics</a></li>
                                            <li><a href="#" class="mega-menu__link">Budget combo</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__col">
                                        <h3 class="mega-menu__title"><a href="#">Women's shirt<i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <ul class="mega-menu__list">
                                            <li><a href="#" class="mega-menu__link">T-shirts</a></li>
                                            <li><a href="#" class="mega-menu__link">Polo</a></li>
                                            <li><a href="#" class="mega-menu__link">Sport shirts</a></li>
                                            <li><a href="#" class="mega-menu__link">Sports Bra</a></li>
                                            <li><a href="#" class="mega-menu__link">Jacket & Hoodie</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__col">
                                        <h3 class="mega-menu__title"><a href="#">Pants <i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <ul class="mega-menu__list">
                                            <li><a href="#" class="mega-menu__link">Legging</a></li>
                                            <li><a href="#" class="mega-menu__link">Short</a></li>
                                            <li><a href="#" class="mega-menu__link">Jogger</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__col">
                                        <h3 class="mega-menu__title"><a href="#">ACCESSORIES<i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <ul class="mega-menu__list">
                                            <li><a href="#" class="mega-menu__link">Socks</a></li>
                                            <li><a href="#" class="mega-menu__link">Hats</a></li>
                                            <li><a href="#" class="mega-menu__link">Bags & wallet</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-menu__col mega-menu__col--images">
                                        <div class="mega-menu__img-wrapper">
                                            <img src="./assets/img/DoThuDongN.avif" alt="Female Autumn Winter">
                                            <span class="mega-menu__img-tag">Autumn/Winter clothing</span>
                                        </div>
                                        <div class="mega-menu__img-wrapper">
                                            <img src="./assets/img/pickleballNu.avif" alt="Female Pickle ball">
                                            <span class="mega-menu__img-tag">Women's Pickle ball</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mega-menu__bottom-bar">
                                    <div class="container">
                                        <div class="mega-menu__bottom-content">
                                            <span class="mega-menu__bottom-label">ACCORDING TO NEED</span>
                                            <a href="#" class="mega-menu__bottom-link">RUNNING</a>
                                            <a href="#" class="mega-menu__bottom-link">GYM & YOGA</a>
                                            <a href="#" class="mega-menu__bottom-link">DAILY WEAR</a>
                                            <a href="#" class="mega-menu__bottom-link">HANGOUT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="header__menu-item header__menu-item--has-mega">
                            <a href="#" class="header__menu-link">SPORTS</a>

                            <div class="mega-menu">
                                <div class="mega-menu__content">

                                    <div class="mega-menu__col mega-menu__col--span-2 mega-menu__col--border-right">
                                        <h3 class="mega-menu__title"><a href="#">MALE SPORTS<i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <div class="sports-grid">
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/ttc.avif" alt=""></div>
                                                <span class="sports-name">Sports</span>
                                            </a>
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/pickleball.avif"
                                                        alt=""></div><span class="sports-name">Pickle ball</span>
                                            </a>
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/cb.avif" alt=""></div>
                                                <span class="sports-name">Running</span>
                                            </a>
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/gym.avif" alt=""></div>
                                                <span class="sports-name">Gym</span>
                                            </a>
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/bd.avif" alt=""></div>
                                                <span class="sports-name">Football</span>
                                            </a>
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/qb.avif" alt=""></div>
                                                <span class="sports-name">Swim trunks</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mega-menu__col mega-menu__col--span-2">
                                        <h3 class="mega-menu__title"><a href="#">FEMALE SPORTS <i
                                                    class="fa-solid fa-arrow-right"></i></a></h3>
                                        <div class="sports-grid">
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/pickleballNu.avif"
                                                        alt=""></div><span class="sports-name">Pickle ball</span>
                                            </a>
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/abs.avif" alt=""></div>
                                                <span class="sports-name sports-name--orange">#2
                                                    Amazon Best Seller</span>
                                            </a>
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/cbn.avif" alt=""></div>
                                                <span class="sports-name">Running</span>
                                            </a>
                                            <a href="#" class="sports-item">
                                                <div class="sports-thumb"><img src="./assets/img/ttcn.avif" alt="">
                                                </div><span class="sports-name">Sports</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="mega-menu__col mega-menu__col--images">
                                        <div class="mega-menu__img-wrapper">
                                            <img src="./assets/img/pickleballTennis.avif" alt="Pickle ball">
                                            <span class="mega-menu__img-tag">Pickle ball & Tennis</span>
                                        </div>
                                        <div class="mega-menu__img-wrapper">
                                            <img src="./assets/img/amazonbestS.avif" alt="Amazon">
                                            <span class="mega-menu__img-tag">Amazon Best Seller</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="mega-menu__bottom-bar">
                                    <div class="container">
                                        <div class="mega-menu__bottom-content">
                                            <span class="mega-menu__bottom-label">HIGHLIGHTED</span>
                                            <a href="#" class="mega-menu__bottom-link">VITAL SEAMLESS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="header__menu-item">
                            <a href="#" class="header__menu-link header__menu-link--red-group">
                                SALE <span class="header__sub-badge">-50%</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="header__user-actions">
                    <div class="header__search">
                        <input type="text" class="header__search-input" placeholder="Search...">
                        <button class="header__search-btn" aria-label="Search"><i
                                class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <a href="info.html" id="btn-open-login" class="header__icon-link" aria-label="Account">
                        <i class="fa-solid fa-user"></i>
                    </a>

                    <div class="header__cart-wrapper">
                        <a href="#" class="header__icon-link" aria-label="Cart">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span class="header__cart-count">0</span>
                        </a>

                        <div class="header__cart-dropdown">
                            <div class="header__cart-content" id="cart-content">
                                <i class="fa-solid fa-bag-shopping cart-empty-icon"></i>
                                <p class="cart-empty-text">Người ta có đôi có cặp, còn giỏ hàng của bạn thì... trống
                                    trơn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
`;

const footerContent = `
<footer class="site-footer">
        <div class="footer-top">
            <div class="container">
                <div class="footer-top__wrapper">
                    <div class="footer-feedback">
                        <h3 class="footer-heading-large">COOLMATE listens to you!</h3>
                        <p class="footer-desc">We always appreciate and look forward to receiving all feedback from
                            customers to upgrade our services and products even better.</p>
                        <a href="#" class="footer-btn-white">Send Feedback <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div class="footer-contact-group">
                        <div class="contact-row">
                            <div class="contact-item">
                                <i class="fa-solid fa-phone-volume"></i>
                                <div class="contact-info">
                                    <span>Hotline</span>
                                    <strong>1900.272737 - 028.7777.2737</strong>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fa-solid fa-envelope"></i>
                                <div class="contact-info">
                                    <span>Email</span>
                                    <strong>Cool@coolmate.me</strong>
                                </div>
                            </div>
                        </div>

                        <div class="social-icons">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-main">
            <div class="container">
                <div class="footer-grid">

                    <div class="footer-col">
                        <h4 class="footer-heading">COOLCLUB</h4>
                        <ul class="footer-links">
                            <li><a href="#">Member Registration</a></li>
                            <li><a href="#">Offers & Privileges</a></li>
                        </ul>

                        <h4 class="footer-heading mt-20">DOCUMENTS - RECRUITMENT</h4>
                        <ul class="footer-links">
                            <li><a href="#">Recruitment</a></li>
                            <li><a href="#">Copyright Registration</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4 class="footer-heading">POLICIES</h4>
                        <ul class="footer-links">
                            <li><a href="#">60-day Return Policy</a></li>
                            <li><a href="#">Promotion Policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                        </ul>

                        <h4 class="footer-heading mt-20">COOLMATE.ME</h4>
                        <ul class="footer-links">
                            <li><a href="#">Website Change Log</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4 class="footer-heading">CUSTOMER CARE</h4>
                        <ul class="footer-links">
                            <li><a href="#">100% Satisfaction Shopping Experience</a></li>
                            <li><a href="#">Q&A - FAQs</a></li>
                        </ul>

                        <h4 class="footer-heading mt-20">STYLE KNOWLEDGE</h4>
                        <ul class="footer-links">
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4 class="footer-heading">ABOUT COOLMATE</h4>
                        <ul class="footer-links">
                            <li><a href="#">Coolmate Code of Conduct</a></li>
                            <li><a href="#">Coolmate 101</a></li>
                            <li><a href="#">Excellent Customer Service</a></li>
                            <li><a href="#">Coolmate Story</a></li>
                            <li><a href="#">Factory</a></li>
                            <li><a href="#">Care & Share</a></li>
                        </ul>
                    </div>

                    <div class="footer-col address-col">
                        <h4 class="footer-heading">CONTACT ADDRESS</h4>
                        <p class="address-text">
                            <u>Hanoi Office:</u> 3rd-4th Floor, BMM Building, Km2, Phung Hung Street, Phuc La Ward, Ha
                            Dong District, Hanoi City
                        </p>
                        <p class="address-text">
                            <u>HCMC Office:</u> Lot C3, D2 Street, Cat Lai Industrial Park, Thanh My Loi, Thu Duc City,
                            Ho Chi Minh City
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom__wrapper">
                    <div class="company-info">
                        <p class="company-name">@ FASTECH ASIA COMPANY LIMITED</p>
                        <p>Business Registration Number: 0108617038. Business Registration Certificate issued by Hanoi
                            Department of Planning and Investment for the first time on February 20, 2019.</p>
                    </div>
                    <div class="cert-logos">
                        <img src="./assets/img/ncsc.avif" alt="NCSC">
                        <img src="./assets/img/dmca.avif" alt="DMCA">
                        <img src="./assets/img/icon-iso.png" alt="iso">
                        <img src="./assets/img/bocongthuong.png" alt="Bo Cong Thuong">
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;

// Render header => id="header-placeholder"
const headerPlaceholder = document.getElementById('header-placeholder');
if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerContent;

    // callback
    document.dispatchEvent(new Event('header-loaded'));
}

// Render footer => id="footer-placeholder"
const footerPlaceholder = document.getElementById('footer-placeholder');
if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerContent;
}