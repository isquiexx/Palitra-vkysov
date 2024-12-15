function toggleModal() {
    const modal = document.getElementById('modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('register-toggle').classList.remove('active');
}

function showRegister() {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

function forgotPassword() {
    alert('Функция восстановления пароля пока не реализована.');
}
