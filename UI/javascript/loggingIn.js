function logInLoad() {
    accounts = View.downloadAccounts();
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", logInLoad);

const loginButton = document.querySelector('#registration');
loginButton.onclick = () => {
    const inputLogin = document.querySelector('#login');
    const inputPassword = document.querySelector('#password');
    const login = inputLogin.value;
    const password = inputPassword.value;
    const error = document.querySelector('#errorText');
    const currentAccount = accounts.findAccountByLogin(login);
    if (currentAccount === undefined) {
        inputLogin.value = '';
        inputPassword.value = '';
        error.textContent = 'Ошибка! Такого аккаунта не существует!';
    } else if (currentAccount.Password !== password) {
        inputLogin.value = '';
        inputPassword.value = '';
        error.textContent = 'Ошибка! Неверный пароль!';
    } else {
        error.textContent = '';
        localStorage.setItem('currentAccount', currentAccount.stringify());
        window.open('index.html', '_self');
    }
}

