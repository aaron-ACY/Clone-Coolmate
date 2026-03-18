// =========================================
// COMPONENT: HEADER
// =========================================

import { EVENTS } from '../constants/constants.js';

const template = `
<header class="header">
        <div class="header__main fixed top-0 left-0 w-full z-[1000] bg-white p-[18px]">
            <div class="flex items-center h-full w-full max-w-full mx-0 px-[40px]">
            <div class="nav__bars-btn hidden w-[50px] h-[50px] text-[#1f1f1f] leading-[50px]">
                <i class="fa-solid fa-bars"></i>
            </div>

            <div class="nav-overlay hidden" id="nav-overlay"></div>

            <nav class="mobile-nav" id="mobile-nav">
                <div class="mobile-nav__header flex items-center justify-between py-[10px] px-[15px] bg-white border-b border-[#f1f1f1]">
                    <div>
                        <a href="index.html" class="mobile-logo">
                            <img src="./assets/img/logo-mobile.svg" alt="Coolmate" class="h-6 block">
                        </a>
                    </div>
                    <div class="close-btn text-2xl p-[5px] cursor-pointer text-[#333]" id="close-mobile-nav">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>

                <div class="p-[5px_15px_15px]">
                    <div class="relative w-full">
                        <input type="text" id="mobile-search-input" placeholder="Search..." class="w-full py-3 pr-[40px] pl-5 rounded-[99px] border border-[#ddd] bg-white text-sm outline-none text-[#333]">
                        <button class="search-btn absolute right-[15px] top-1/2 -translate-y-1/2 bg-transparent border-0 text-[#888] text-base"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>

                <div class="mobile-nav__tabs flex px-[15px] border-b border-[#ebebeb] mb-[15px]">
                    <div class="tab-item flex-1 text-center py-[10px] font-bold text-sm text-[#888] cursor-pointer border-b-2 border-transparent active" data-target="mobile-tab-nam">MALE</div>
                    <div class="tab-item flex-1 text-center py-[10px] font-bold text-sm text-[#888] cursor-pointer border-b-2 border-transparent" data-target="mobile-tab-nu">FEMALE</div>
                    <div class="tab-item flex-1 text-center py-[10px] font-bold text-sm text-[#888] cursor-pointer border-b-2 border-transparent" data-target="mobile-tab-thethao">SPORTS</div>
                </div>

                <div class="mobile-nav__content-wrapper flex-1 overflow-y-auto relative">

                <div id="mobile-tab-nam" class="tab-pane active">
                    <div class="mobile-nav__content flex-1 overflow-y-auto px-[15px] pb-[30px]">
                        <div class="relative rounded-lg overflow-hidden mb-[15px]">
                            <img src="./assets/img/DoThuDong.avif" alt="Nam" class="w-full h-auto block object-cover aspect-[2/1]">
                            <div class="absolute bottom-0 left-0 w-full p-[15px] bg-gradient-to-t from-black/40 to-transparent">
                                <span class="text-white font-bold text-base">Men's Autumn/Winter</span>
                            </div>
                        </div>
                        <a href="male.html" class="btn-explore block w-full bg-[#f3f3f3] py-[14px] text-center font-bold text-[13px] text-black no-underline rounded-[25px] uppercase">EXPLORE MEN'S</a>
                        <ul class="list-none p-0 m-0">
                            <li class="menu-item has-dropdown py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">
                                <div class="menu-link flex justify-between items-center text-black no-underline">New products <i class="fa-solid fa-chevron-down text-xs text-[#333] transition-transform duration-300"></i></div>
                                <ul class="sub-menu list-none pl-0 mt-[10px] pb-[5px]">
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">ECC Collection</a></li>
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Excool Collection</a></li>
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Seamless</a></li>
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Promax</a></li>
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Autumn/Winter clothing</a></li>
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Ghệ Nguyên</a></li>
                                </ul>
                            </li>
                            <li class="menu-item has-dropdown py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">
                                <div class="menu-link flex justify-between items-center text-black no-underline">MEN'S SHIRTS <i class="fa-solid fa-chevron-down text-xs text-[#333] transition-transform duration-300"></i></div>
                                <ul class="sub-menu list-none pl-0 mt-[10px] pb-[5px]">
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">T-Shirts</a></li>
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Polo Shirts</a></li>
                                </ul>
                            </li>
                            <li class="menu-item has-dropdown py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">
                                <div class="menu-link flex justify-between items-center text-black no-underline">MEN'S PANTS <i class="fa-solid fa-chevron-down text-xs text-[#333] transition-transform duration-300"></i></div>
                                <ul class="sub-menu list-none pl-0 mt-[10px] pb-[5px]">
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">T-Shirts</a></li>
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Polo Shirts</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="mobile-tab-nu" class="tab-pane">
                    <div class="mobile-nav__content flex-1 overflow-y-auto px-[15px] pb-[30px]">
                        <div class="relative rounded-lg overflow-hidden mb-[15px]">
                            <img src="./assets/img/DoThuDongN.avif" alt="Nữ" class="w-full h-auto block object-cover aspect-[2/1]">
                            <div class="absolute bottom-0 left-0 w-full p-[15px] bg-gradient-to-t from-black/40 to-transparent">
                                <span class="text-white font-bold text-base">Women's Winter Collection</span>
                            </div>
                        </div>
                        <a href="female.html" class="btn-explore block w-full bg-[#f3f3f3] py-[14px] text-center font-bold text-[13px] text-black no-underline rounded-[25px] uppercase">EXPLORE WOMEN'S</a>
                        <ul class="list-none p-0 m-0">
                            <li class="menu-item py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">NEW ARRIVALS</li>
                            <li class="menu-item has-dropdown py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">
                                <div class="menu-link flex justify-between items-center text-black no-underline">WOMEN'S SHIRTS <i class="fa-solid fa-chevron-down text-xs text-[#333] transition-transform duration-300"></i></div>
                                <ul class="sub-menu list-none pl-0 mt-[10px] pb-[5px]">
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Crop Tops</a></li>
                                    <li><a href="#" class="block py-2 text-[13px] font-normal text-[#444] no-underline">Women's T-Shirts</a></li>
                                </ul>
                            </li>
                            <li class="menu-item py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">LEGGINGS &amp; PANTS</li>
                        </ul>
                    </div>
                </div>

                <div id="mobile-tab-thethao" class="tab-pane">
                    <div class="mobile-nav__content flex-1 overflow-y-auto px-[15px] pb-[30px]">
                        <div class="relative rounded-lg overflow-hidden mb-[15px]">
                            <img src="./assets/img/pickleballTennis.avif" alt="Thể thao" class="w-full h-auto block object-cover aspect-[2/1]">
                            <div class="absolute bottom-0 left-0 w-full p-[15px] bg-gradient-to-t from-black/40 to-transparent">
                                <span class="text-white font-bold text-base">Pro Sportswear</span>
                            </div>
                        </div>
                        <a href="#" class="btn-explore block w-full bg-[#f3f3f3] py-[14px] text-center font-bold text-[13px] text-black no-underline rounded-[25px] uppercase">EXPLORE SPORTS</a>
                        <ul class="list-none p-0 m-0">
                            <li class="menu-item py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">RUNNING</li>
                            <li class="menu-item py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">GYM &amp; FITNESS</li>
                            <li class="menu-item py-[15px] text-[13px] font-bold uppercase text-black cursor-pointer border-b border-[#f9f9f9]">PICKLEBALL</li>
                        </ul>
                    </div>
                </div>

            </div>
            </nav>

                <a href="index.html" class="header__logo flex-1 flex justify-start items-center">
                    <img src="./assets/img/logo-mobile.svg" alt="Logo" class="h-8 w-auto">
                </a>

                <nav class="header__nav h-full">
                    <ul class="flex gap-6 items-center h-full mr-[18px]">

                        <li class="header__menu-item h-full flex items-center relative">
                            <a href="products.html?sort=new" id="sort-new"
                             class="header__menu-link text-[15px] font-bold uppercase text-black flex items-center tracking-[0.5px] transition-colors duration-200 h-full relative px-[5px]">NEW</a>
                        </li>

                        <li class="header__menu-item h-full flex items-center relative">
                            <a href="products.html?sort=best" id="sort-best"
                                class="header__menu-link header__menu-link--blue text-[15px] font-bold uppercase text-[#2f5acf] flex items-center tracking-[0.5px] transition-colors duration-200 h-full relative px-[5px]">Bestselling</a>
                        </li>

                        <li class="header__menu-item header__menu-item--has-mega static h-full flex items-center">
                            <a href="male.html" class="header__menu-link text-[15px] font-bold uppercase text-black flex items-center tracking-[0.5px] transition-colors duration-200 h-full relative px-[5px]">MALE</a>

                            <div class="mega-menu absolute top-[80px] left-0 right-0 w-full max-w-[1240px] mx-auto bg-white border-2 border-[#e5e5e5] border-t-0 rounded-b-lg opacity-0 invisible translate-y-[10px] transition-all duration-300 z-[999]">
                                <div class="mega-menu__content grid grid-cols-[1fr_1fr_1fr_1fr_350px] gap-[30px] min-h-[450px]">
                                    <div>
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">ALL PRODUCTS <i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf] transition-transform duration-300 hover:translate-x-[5px]"></i></a></h3>
                                        <ul class="list-none p-0 m-0">
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf] text-[#2f5acf] font-semibold">New products</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">ECC Collection</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Excool Collection</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Seamless</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Promax</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Autumn/Winter clothing</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">MEN'S SHIRTS <i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf] transition-transform duration-300"></i></a></h3>
                                        <ul class="list-none p-0 m-0">
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Tank top</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">T-shirt</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Sport shirt</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Polo</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Shirt</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Long sleeve</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Sweater</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Hoodie</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">Pants<i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf] transition-transform duration-300"></i></a></h3>
                                        <ul class="list-none p-0 m-0">
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Shorts</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Jogger</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Sports Pants</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Trousers</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Jeans</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Khaki</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">ACCESSORIES<i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf] transition-transform duration-300"></i></a></h3>
                                        <ul class="list-none p-0 m-0">
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Socks</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Hats</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Bags</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Belt</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">(towel, wallet,...)</a></li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-col gap-[15px] border-l border-[#e5e5e5] pl-[40px] -ml-[10px]">
                                        <div class="relative rounded-lg overflow-hidden h-[200px] cursor-pointer">
                                            <img src="./assets/img/DoThuDong.avif" alt="Autumn Winter" class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]">
                                            <span class="absolute bottom-[10px] left-[15px] text-white font-bold text-base z-[2]">Autumn/Winter clothing</span>
                                        </div>
                                        <div class="relative rounded-lg overflow-hidden h-[200px] cursor-pointer">
                                            <img src="./assets/img/pickleballNam.avif" alt="Pickleball" class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]">
                                            <span class="absolute bottom-[10px] left-[15px] text-white font-bold text-base z-[2]">Men's Pickleball</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-[#f5f5f5] border-t border-[#eee] w-full py-6">
                                    <div class="max-w-[1240px] w-full mx-auto px-[40px]">
                                        <div class="flex items-center gap-[40px]">
                                            <span class="text-[#888] text-[18px] uppercase font-bold tracking-[0.5px] border-r border-[#d0d0d0] pr-[30px] h-5 flex items-center -mr-[10px]">ACCORDING TO NEED</span>
                                            <a href="#" class="text-[15px] font-extrabold uppercase text-black hover:text-[#2f5acf]">SPORTSWEAR</a>
                                            <a href="#" class="text-[15px] font-extrabold uppercase text-black hover:text-[#2f5acf]">DAILY WEAR</a>
                                            <a href="#" class="text-[15px] font-extrabold uppercase text-black hover:text-[#2f5acf]">OFFICE WEAR</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="header__menu-item header__menu-item--has-mega static h-full flex items-center">
                            <a href="female.html" class="header__menu-link text-[15px] font-bold uppercase text-black flex items-center tracking-[0.5px] transition-colors duration-200 h-full relative px-[5px]">FEMALE</a>
                            <div class="mega-menu absolute top-[80px] left-0 right-0 w-full max-w-[1240px] mx-auto bg-white border-2 border-[#e5e5e5] border-t-0 rounded-b-lg opacity-0 invisible translate-y-[10px] transition-all duration-300 z-[999]">
                                <div class="mega-menu__content grid grid-cols-[1fr_1fr_1fr_1fr_350px] gap-[30px] min-h-[450px]">
                                    <div>
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">ALL PRODUCTS <i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf]"></i></a></h3>
                                        <ul class="list-none p-0 m-0">
                                            <li><a href="#" class="text-[15px] text-[#2f5acf] font-semibold transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">New products</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Cool mate Active</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Cool mate Basics</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Budget combo</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">Women's shirt<i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf]"></i></a></h3>
                                        <ul class="list-none p-0 m-0">
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">T-shirts</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Polo</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Sport shirts</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Sports Bra</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Jacket &amp; Hoodie</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">Pants <i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf]"></i></a></h3>
                                        <ul class="list-none p-0 m-0">
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Legging</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Short</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Jogger</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">ACCESSORIES<i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf]"></i></a></h3>
                                        <ul class="list-none p-0 m-0">
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Socks</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Hats</a></li>
                                            <li><a href="#" class="text-[15px] text-[#333] font-normal transition-colors duration-200 block mb-2 leading-relaxed hover:text-[#2f5acf]">Bags &amp; wallet</a></li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-col gap-[15px] border-l border-[#e5e5e5] pl-[40px] -ml-[10px]">
                                        <div class="relative rounded-lg overflow-hidden h-[200px] cursor-pointer">
                                            <img src="./assets/img/DoThuDongN.avif" alt="Female Autumn Winter" class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]">
                                            <span class="absolute bottom-[10px] left-[15px] text-white font-bold text-base z-[2]">Autumn/Winter clothing</span>
                                        </div>
                                        <div class="relative rounded-lg overflow-hidden h-[200px] cursor-pointer">
                                            <img src="./assets/img/pickleballNu.avif" alt="Female Pickle ball" class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]">
                                            <span class="absolute bottom-[10px] left-[15px] text-white font-bold text-base z-[2]">Women's Pickle ball</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-[#f5f5f5] border-t border-[#eee] w-full py-6">
                                    <div class="max-w-[1240px] w-full mx-auto px-[40px]">
                                        <div class="flex items-center gap-[40px]">
                                            <span class="text-[#888] text-[18px] uppercase font-bold tracking-[0.5px] border-r border-[#d0d0d0] pr-[30px] h-5 flex items-center -mr-[10px]">ACCORDING TO NEED</span>
                                            <a href="#" class="text-[15px] font-extrabold uppercase text-black hover:text-[#2f5acf]">RUNNING</a>
                                            <a href="#" class="text-[15px] font-extrabold uppercase text-black hover:text-[#2f5acf]">GYM &amp; YOGA</a>
                                            <a href="#" class="text-[15px] font-extrabold uppercase text-black hover:text-[#2f5acf]">DAILY WEAR</a>
                                            <a href="#" class="text-[15px] font-extrabold uppercase text-black hover:text-[#2f5acf]">HANGOUT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="header__menu-item header__menu-item--has-mega static h-full flex items-center">
                            <a href="#" class="header__menu-link text-[15px] font-bold uppercase text-black flex items-center tracking-[0.5px] transition-colors duration-200 h-full relative px-[5px]">SPORTS</a>

                            <div class="mega-menu absolute top-[80px] left-0 right-0 w-full max-w-[1240px] mx-auto bg-white border-2 border-[#e5e5e5] border-t-0 rounded-b-lg opacity-0 invisible translate-y-[10px] transition-all duration-300 z-[999]">
                                <div class="mega-menu__content grid grid-cols-[1fr_1fr_1fr_1fr_350px] gap-[30px] min-h-[450px]">

                                    <div class="col-span-2 border-r border-[#e5e5e5] pr-[40px] -mr-[20px]">
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">MALE SPORTS<i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf]"></i></a></h3>
                                        <div class="grid grid-cols-2 gap-[20px_10px]">
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/ttc.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Sports</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/pickleball.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Pickle ball</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/cb.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Running</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/gym.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Gym</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/bd.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Football</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/qb.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Swim trunks</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-span-2">
                                        <h3 class="text-sm font-extrabold mb-[15px] uppercase tracking-[0.5px]"><a href="#" class="text-black transition-colors duration-200 inline-flex items-center hover:text-[#2f5acf]">FEMALE SPORTS <i class="fa-solid fa-arrow-right text-base ml-2 text-[#2f5acf]"></i></a></h3>
                                        <div class="grid grid-cols-2 gap-[20px_10px]">
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/pickleballNu.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Pickle ball</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/abs.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium !text-[#ff6600] font-bold">#2 Amazon Best Seller</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/cbn.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Running</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 transition-all duration-200 hover:text-[#2f5acf]">
                                                <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#f5f5f5]"><img src="./assets/img/ttcn.avif" alt="" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"></div>
                                                <span class="text-sm font-medium">Sports</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="flex flex-col gap-[15px] border-l border-[#e5e5e5] pl-[40px] -ml-[10px]">
                                        <div class="relative rounded-lg overflow-hidden h-[200px] cursor-pointer">
                                            <img src="./assets/img/pickleballTennis.avif" alt="Pickle ball" class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]">
                                            <span class="absolute bottom-[10px] left-[15px] text-white font-bold text-base z-[2]">Pickle ball &amp; Tennis</span>
                                        </div>
                                        <div class="relative rounded-lg overflow-hidden h-[200px] cursor-pointer">
                                            <img src="./assets/img/amazonbestS.avif" alt="Amazon" class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.06]">
                                            <span class="absolute bottom-[10px] left-[15px] text-white font-bold text-base z-[2]">Amazon Best Seller</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-[#f5f5f5] border-t border-[#eee] w-full py-6">
                                    <div class="max-w-[1240px] w-full mx-auto px-[40px]">
                                        <div class="flex items-center gap-[40px]">
                                            <span class="text-[#888] text-[18px] uppercase font-bold tracking-[0.5px] border-r border-[#d0d0d0] pr-[30px] h-5 flex items-center -mr-[10px]">HIGHLIGHTED</span>
                                            <a href="#" class="text-[15px] font-extrabold uppercase text-black hover:text-[#2f5acf]">VITAL SEAMLESS</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="header__menu-item h-full flex items-center relative">
                            <a href="#footer" class="header__menu-link header__menu-link--red-group text-[15px] font-bold uppercase text-red-500 flex items-center tracking-[0.5px] transition-colors duration-200 h-full relative px-[5px]">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="flex-1 flex justify-end items-center gap-5">
                    <div class="header__search relative w-[280px]">
                        <input type="text" class="header__search-input w-[190px] py-[10px] pr-[40px] pl-[20px] rounded-[99px] border border-[#d9d9d9] outline-none text-sm ml-[90px] transition-colors focus:border-black" placeholder="Search...">
                        <button class="header__search-btn absolute right-[15px] top-1/2 -translate-y-1/2 border-0 bg-transparent cursor-pointer text-base text-black" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <a href="info.html" id="btn-open-login" class="text-2xl text-black flex items-center" aria-label="Account">
                        <i class="fa-solid fa-user"></i>
                    </a>

                    <div class="header__cart-wrapper relative flex items-center h-full cursor-pointer">
                        <a href="#" class="text-2xl text-black flex items-center" aria-label="Cart">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span class="header__cart-count absolute -bottom-[2px] -right-[5px] bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
                        </a>

                        <div class="header__cart-dropdown absolute top-[130%] -right-[35px] w-[360px] p-0 bg-white rounded-2xl overflow-hidden z-[1000] invisible translate-y-[15px] transition-all duration-300">
                            <div class="header__cart-content" id="cart-content">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
`;

export default function initHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.innerHTML = template;
        document.dispatchEvent(new Event(EVENTS.HEADER_LOADED));
    }
}
