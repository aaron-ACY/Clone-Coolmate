// =========================================
// UTILS: HELPER FUNCTIONS
// =========================================

export function switchTab(gender) {
    const tabNam = document.getElementById('tab-nam');
    const tabNu = document.getElementById('tab-nu');
    const contentNam = document.getElementById('content-nam');
    const contentNu = document.getElementById('content-nu');

    if (!tabNam || !tabNu || !contentNam || !contentNu) return;

    if (gender === 'nam') {
        tabNam.classList.add('active');
        tabNu.classList.remove('active');
        contentNam.classList.remove('d-none');
        contentNu.classList.add('d-none');
    } else {
        tabNu.classList.add('active');
        tabNam.classList.remove('active');
        contentNu.classList.remove('d-none');
        contentNam.classList.add('d-none');
    }
}
