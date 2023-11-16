const password = document.getElementById('password');
const toggle = document.getElementById('togglePassword');

toggle.addEventListener('change', function () {
    if (this.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});
