function infoLoad() {
    let post = JSON.parse(localStorage.getItem('post'));
    View.showInfo(post);
}
document.addEventListener("DOMContentLoaded", infoLoad);
