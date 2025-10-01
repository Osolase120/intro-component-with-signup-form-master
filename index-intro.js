const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password =document.getElementById('password');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === '') {
        setError(firstName, 'First Name cannot be empty');
    } else {
        setSuccess(firstName);
    };


    if(lastNameValue === '') {
        setError(lastName, 'Last Name cannot be empty');
    } else {
        setSuccess(lastName);
    };

    if(emailValue === '') {
        setError(email, 'Email cannont be empty');
    } else if(!isEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    };

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    };

}

function setError(input, message) {
    const inputControl = input.parentElement;
    const small = inputControl.querySelector('small');

    small.innerText = message;
    inputControl.className = 'input-control error';
}

function setSuccess(input) {
    const inputControl = input.parentElement;
    inputControl.className = 'input-control success';
}

function isEmail(email) {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}