function aboutLoad() {
    View.downloadCurrentAccount();
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", aboutLoad);