const accountName = document.querySelector('.account');

function aboutLoad() {
    currentAccount = View.downloadCurrentAccount();
    accountName.textContent = currentAccount.login;
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", aboutLoad);