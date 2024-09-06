
const showPasswordLogin = document.getElementById('show-password-login');
const showPasswordSignup = document.getElementById('show-password-signup');

const loginPassword = document.getElementById('login-password');
const signupPassword = document.getElementById('signup-password');
const confirmPassword = document.getElementById('signup-confirm-password');

function togglePasswordVisibility(checkbox, passwordField) {
   if (checkbox.checked) {
       passwordField.type = 'text';
   } else {
       passwordField.type = 'password';
   }
}

showPasswordLogin.addEventListener('change', function() {
   togglePasswordVisibility(showPasswordLogin, loginPassword);
});

showPasswordSignup.addEventListener('change', function() {
   togglePasswordVisibility(showPasswordSignup, signupPassword);
   togglePasswordVisibility(showPasswordSignup, confirmPassword);
});

const closeButtons = document.querySelectorAll('.close-btn');

function closeForm(button) {
   const formBox = button.parentElement.parentElement;
   formBox.style.display = 'none';
}

closeButtons.forEach(button => {
   button.addEventListener('click', function() {
       closeForm(button);
   });
});