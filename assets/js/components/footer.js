// =========================================
// COMPONENT: FOOTER
// =========================================

const template = `
<footer class="bg-[#1a1a1a] text-white" id="footer">

    <!-- FOOTER TOP -->
    <div class="footer-top py-[50px]">
        <div class="max-w-[1240px] w-full mx-auto px-[15px]">
            <div class="footer-top__wrapper flex items-start gap-[60px]">

                <div class="footer-feedback flex-1 pr-[40px] border-r border-[#333]">
                    <h3 class="text-[26px] font-bold text-white mb-[15px]">XuanDan listens to you!</h3>
                    <p class="footer-desc text-[#b0b0b0] text-base leading-relaxed mb-[25px]">We always appreciate and look forward to receiving all feedback from
                        customers to upgrade our services and products even better.</p>
                    <a href="#" class="inline-block py-3 px-[30px] bg-white text-black rounded-[50px] font-semibold text-sm uppercase hover:bg-[#e0e0e0] transition-all duration-200">Send Feedback <i class="fa-solid fa-arrow-right ml-2"></i></a>
                </div>

                <div class="footer-contact-group flex-1 pl-[20px]">
                    <div class="contact-row flex gap-[40px] mb-[25px]">
                        <div class="contact-item flex items-center gap-[15px]">
                            <i class="fa-solid fa-phone-volume text-[22px] text-white"></i>
                            <div class="contact-info">
                                <span class="block text-[#b0b0b0] text-xs mb-1">Hotline</span>
                                <strong class="text-white text-sm font-semibold">1900.272737 - 028.7777.2737</strong>
                            </div>
                        </div>
                        <div class="contact-item flex items-center gap-[15px]">
                            <i class="fa-solid fa-envelope text-[22px] text-white"></i>
                            <div class="contact-info">
                                <span class="block text-[#b0b0b0] text-xs mb-1">Email</span>
                                <strong class="text-white text-sm font-semibold">taplamdev@gmail.com</strong>
                            </div>
                        </div>
                    </div>

                    <div class="social-icons flex gap-[12px]">
                        <a href="https://fb.com" target="_blank" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-white text-base hover:bg-[#2f5acf] transition-all duration-200"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://instagram.com" target="_blank" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-white text-base hover:bg-[#e1306c] transition-all duration-200"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://tiktok.com" target="_blank" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-white text-base hover:bg-black transition-all duration-200"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://youtube.com" target="_blank" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-white text-base hover:bg-[#ff0000] transition-all duration-200"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- FOOTER MAIN -->
    <div class="footer-main py-[50px] border-t border-[#333]">
        <div class="max-w-[1240px] w-full mx-auto px-[15px]">
            <div class="footer-grid grid grid-cols-5 gap-[30px]">

                <div class="footer-col">
                    <h4 class="footer-heading text-xs font-bold text-white uppercase tracking-[1px] mb-[15px]">ITCLUB</h4>
                    <ul class="footer-links">
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Member Registration</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Offers &amp; Privileges</a></li>
                    </ul>

                    <h4 class="footer-heading text-xs font-bold text-white uppercase tracking-[1px] mb-[15px] mt-[30px]">DOCUMENTS - RECRUITMENT</h4>
                    <ul class="footer-links">
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Recruitment</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Copyright Registration</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-heading text-xs font-bold text-white uppercase tracking-[1px] mb-[15px]">POLICIES</h4>
                    <ul class="footer-links">
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">60-day Return Policy</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Promotion Policy</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Shipping Policy</a></li>
                    </ul>

                    <h4 class="footer-heading text-xs font-bold text-white uppercase tracking-[1px] mb-[15px] mt-[30px]">Taplamdev.io.vn</h4>
                    <ul class="footer-links">
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Website Change Log</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-heading text-xs font-bold text-white uppercase tracking-[1px] mb-[15px]">CUSTOMER CARE</h4>
                    <ul class="footer-links">
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">100% Satisfaction Shopping Experience</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Q&amp;A - FAQs</a></li>
                    </ul>

                    <h4 class="footer-heading text-xs font-bold text-white uppercase tracking-[1px] mb-[15px] mt-[30px]">STYLE KNOWLEDGE</h4>
                    <ul class="footer-links">
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Size Guide</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Blog</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-heading text-xs font-bold text-white uppercase tracking-[1px] mb-[15px]">ABOUT XUANDAN</h4>
                    <ul class="footer-links">
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Excellent Customer Service</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Factory</a></li>
                        <li class="mb-[10px]"><a href="#" class="text-[#b0b0b0] text-sm hover:text-white transition-colors duration-200">Care &amp; Share</a></li>
                    </ul>
                </div>

                <div class="footer-col address-col">
                    <h4 class="footer-heading text-xs font-bold text-white uppercase tracking-[1px] mb-[15px]">CONTACT ADDRESS</h4>
                    <p class="address-text text-[#b0b0b0] text-sm leading-relaxed mb-[15px]">
                        <u>Hanoi Office:</u> 6 Ngô Quyền, Vĩnh Ninh, Huế, Thành phố Huế, Vietnam
                    </p>
                    <p class="address-text text-[#b0b0b0] text-sm leading-relaxed mb-[15px]">
                        <u>DaNang Office:</u> 6 Ngô Quyền, Vĩnh Ninh, Huế, Thành phố Huế, Vietnam
                    </p>
                    <p class="address-text text-[#b0b0b0] text-sm leading-relaxed mb-[15px]">
                        <u>HCM Office:</u> 6 Ngô Quyền, Vĩnh Ninh, Huế, Thành phố Huế, Vietnam
                    </p>
                </div>

            </div>
        </div>
    </div>

    <!-- FOOTER BOTTOM -->
    <div class="footer-bottom py-[25px] border-t border-[#333] bg-[#111]">
        <div class="max-w-[1240px] w-full mx-auto px-[15px]">
            <div class="footer-bottom__wrapper flex items-center justify-between gap-[30px]">
                <div class="company-info flex-1">
                    <p class="company-name text-xs font-semibold text-[#b0b0b0] mb-[5px]">@ FASTECH ASIA COMPANY LIMITED</p>
                    <p class="text-[11px] text-[#888] leading-relaxed">Business Registration Number: 0108617038. Business Registration Certificate issued by Hanoi
                        Department of Planning and Investment for the first time on February 20, 2019.</p>
                </div>
                <div class="cert-logos flex items-center gap-[15px]">
                    <img src="./assets/img/ncsc.avif" alt="NCSC" class="h-[30px] object-contain opacity-80 hover:opacity-100 transition-opacity">
                    <img src="./assets/img/dmca.avif" alt="DMCA" class="h-[30px] object-contain opacity-80 hover:opacity-100 transition-opacity">
                    <img src="./assets/img/icon-iso.png" alt="iso" class="h-[30px] object-contain opacity-80 hover:opacity-100 transition-opacity">
                    <img src="./assets/img/bocongthuong.png" alt="Bo Cong Thuong" class="h-[30px] object-contain opacity-80 hover:opacity-100 transition-opacity">
                </div>
            </div>
        </div>
    </div>

</footer>
`;

export default function initFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = template;
    }
}
