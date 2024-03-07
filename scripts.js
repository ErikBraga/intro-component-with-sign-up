const form = document.querySelector('#form');
const first_name = document.querySelector('.fname-input');
const last_name = document.querySelector('.lname-input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const iconError = [...document.querySelectorAll('.icon-error')];
const invalidMsg = [...document.querySelectorAll('.invalid')];

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(first_name.value === ''){
        iconError[0].classList.remove('hidden');
        invalidMsg[0].classList.remove('hidden');
        first_name.classList.add('border-error');
        return;
    }
});