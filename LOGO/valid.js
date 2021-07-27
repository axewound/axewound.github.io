const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const phoneEl = document.querySelector('#phone');
const form = document.querySelector('#signup');
const inputState = document.querySelector('#inputState');

const checkPhone = () => { 
    let valid = false;
    const phone = phoneEl.value.trim();
    if (!isRequired(phone)) {
        showError(phoneEl);
    }  else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};

const checkState = () => { 
    let valid = false;
    const opt = inputState.value.trim();

    if (opt == "Choose country") {
        showError(inputState);
    }  else {
        showSuccess(inputState);
        valid = true;
    }
    return valid;
};

const checkUsername = () => {
    let valid = false;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl);
    }  else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl);
    } else if (!isEmailValid(email)) {
        showError(emailEl)
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input) => {
    const formField = input;

    const a = document.querySelector('#regist_button');

    formField.style.border = "none";
    formField.style.border = "1px solid #F6333C";
};

const showSuccess = (input, select) => {
    const formField = input;

    formField.style.border = "1px solid #F6333C";
    formField.style.border = " 1px solid #00C874";
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPhoneValid = checkPhone()
    isCheckState = checkState()

    let isFormValid = isUsernameValid &&
    isEmailValid &&
    isPhoneValid &&
    isCheckState

    const a = document.querySelector('.modal-open');
    const b = document.querySelector('.modal-dialog');
    const show = document.querySelector('.show');

    if (isFormValid) {   
        show.style.opacity = "0.5" ;
        a.style.overflow = "hidden"
        b.style.display = "block";
        
    }else{
        a.style.overflow = "inherit"
        b.style.display = "none";
        show.style.opacity = "0" ;
    }
});
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input' , debounce(function (e) {
    switch (e.target.id) {
        case 'username':
        checkUsername();
        break;
        case 'email':
        checkEmail();
        break;
        case 'password':
        checkPhone();
        case 'inputState':
        checkState()
        break;
    } 
}));


