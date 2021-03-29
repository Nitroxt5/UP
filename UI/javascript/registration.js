function registrationLoad() {
    accounts = View.downloadAccounts();
    const footer = document.querySelector('.footerText');
    footer.textContent = footerText;
}
document.addEventListener("DOMContentLoaded", registrationLoad);

const regButton = document.querySelector('#registration');
regButton.onclick = () => {
    const inputEmail = document.querySelector('#email');
    const inputLogin = document.querySelector('#login');
    const inputPassword = document.querySelector('#password');
    const email = inputEmail.value;
    const login = inputLogin.value;
    const password = inputPassword.value;
    const newAcc = new Account(login, password, email);
    const isValid = accounts.createAccount(newAcc);
    const error = document.querySelector('#errorText');
    if (!isValid) {
        inputEmail.value = '';
        inputLogin.value = '';
        inputPassword.value = '';
        error.textContent = 'Ошибка! Одно из полей пусто или пользователь с таким именем уже существует';
    } else {
        error.textContent = '';
        localStorage.setItem('currentAccount', newAcc.stringify());
        View.uploadAccounts(accounts);
        window.open('index.html', '_self');
    }
}

