const accountName = document.querySelector('.account');

function profileLoad() {
    currentAccount = View.downloadCurrentAccount();
    accounts = View.downloadAccounts();
    if (currentAccount.hasOwnProperty('avatarLink')) {
        if (currentAccount.avatarLink !== '') {
            const profileAvatar = document.querySelector('.profile_avatar');
            profileAvatar.src = currentAccount.avatarLink;
        }
    }
    const nickname = document.querySelector('.nickname');
    const email = document.querySelector('.accEmail');
    nickname.textContent = currentAccount.login;
    email.textContent = currentAccount.email;
    accountName.textContent = currentAccount.login;
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", profileLoad);

const logOutButton = document.querySelector('.logOutButton');
logOutButton.onclick = () => {
    localStorage.removeItem('currentAccount');
    window.open('authReg2.html', '_self');
}

const uploadAvatar = document.querySelector('.inputProfileAvatar');
uploadAvatar.onchange = () => {
    let path = uploadAvatar.value;
    path = transformURI(path);
    currentAccount.avatarLink = path;
    accounts.findAccountByLogin(currentAccount.login).changeAvatar(path);
    View.uploadAccounts(accounts);
    localStorage.setItem('currentAccount', accounts.findAccountByLogin(currentAccount.login).stringify());
    window.open('profile.html', '_self');
}
