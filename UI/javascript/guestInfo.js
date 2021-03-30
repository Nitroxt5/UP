function infoLoad() {
    let post = JSON.parse(localStorage.getItem('infoPost'));
    View.showInfo(post);
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", infoLoad);

const backButton = document.querySelector('#back');

backButton.onclick = () => {
    window.close();
}