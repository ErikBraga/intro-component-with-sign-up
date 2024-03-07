const form = document.querySelector('#form');
const first_name = document.querySelector('.fname-input');
const last_name = document.querySelector('.lname-input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const iconError = [...document.querySelectorAll('.icon-error')];
const invalidMsg = [...document.querySelectorAll('.invalid')];

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // Verifica se o nome está vazio
    if(first_name.value === ''){
        iconError[0].classList.remove('hidden');
        invalidMsg[0].classList.remove('hidden');
        first_name.classList.add('border-error');
        return;
    }

    // Verifica se o sobrenome está vazio
    if(last_name.value === ''){
        iconError[1].classList.remove('hidden');
        invalidMsg[1].classList.remove('hidden');
        last_name.classList.add('border-error');
        return;
    }

    // Verifica se o email está vazio
    if(email.value === ''){
        iconError[2].classList.remove('hidden');
        invalidMsg[2].classList.add('hidden');
        invalidMsg[3].classList.remove('hidden');
        email.classList.add('border-error');
        return;
    // Verifica se o email é válido
    } else if(!isEmailValid(email.value)){
        iconError[2].classList.remove('hidden');
        invalidMsg[3].classList.add('hidden');
        invalidMsg[2].classList.remove('hidden');
        email.classList.add('border-error');
        return;
    }

    // Verifica se a senha está vazia
    if(password.value === ''){
        iconError[3].classList.remove('hidden');
        invalidMsg[5].classList.add('hidden');
        invalidMsg[4].classList.remove('hidden');
        password.classList.add('border-error');
        return;
    // Verifica se a senha tem ao menos 5 dígitos
    } else if(password.value.length < 5){
        iconError[3].classList.remove('hidden');
        invalidMsg[4].classList.add('hidden');
        invalidMsg[5].classList.remove('hidden');
        password.classList.add('border-error');
        return;
    }

    // Se passar por todas as verificações faça o submit
    form.submit();
});

// Função que valida email
function isEmailValid(email){
    // regex para validar o email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}