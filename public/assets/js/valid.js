const firstName = document.querySelector('#firstname');
const secondName = document.querySelector('#secondname');
const inputState = document.querySelector('#inputState');
const phoneEl = document.querySelector('#phone');
const form = document.querySelector('#signup');
const emailEl = document.querySelector('#email');
const passwordFirst = document.querySelector('#password');
const configPassword = document.querySelector('#configpassword');
const checkboxCheckbox = document.querySelector('input[type=checkbox]');
const check = document.querySelector('#exampleCheck1');




const checkFirstName = () => {
    let valid = false;
    const name = firstName.value.trim();
    if (!isRequired(name)) {
        let dNew = document.createElement('div');
        dNew.innerHTML = "The name must be more than 2 characters"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('firstname').after(dNew);
        showError(firstName);
        validateForm()
    } else {
        showSuccess(firstName);
        valid = true;
    }
    return valid;
};
const checkSecondName = () => {
    let valid = false;
    const username = secondName.value.trim();
    if (!isRequired(username)) {
        let dNew = document.createElement('div');
        dNew.setAttribute("class", "timedrpact");
        dNew.innerHTML = "The name must be more than 2 characters"
        document.getElementById('secondname').after(dNew);
        showError(secondName);
        validateForm()
    } else {
        showSuccess(secondName);
        valid = true;
    }
    return valid;
};

const checkCountry = () => {
    let valid = false;
    const country = inputState.value.trim();
    if (country === "Country") {
        let dNew = document.createElement('div');
        dNew.innerHTML = "Fill in the field"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('inputState').after(dNew);
        showError(inputState);
    } else {
        showSuccess(inputState);
        valid = true;
    }
    return valid;
};
const checkPhone = () => {
    let valid = false;
    const phone = phoneEl.value.trim();
    if (!isRequired(phone)) {
        let dNew = document.createElement('div');
        dNew.innerHTML = "Fill in the field"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('phone').after(dNew);
        showError(phoneEl);
        setTimeout(function () {
            let elems = document.getElementsByClassName('timedrpact')
            for (let i = 0; i < elems.length; i++) elems[i].style.display = 'none';

        }, 3000);
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = passwordFirst.value.trim();
    if (!isRequired(password)) {
        let dNew = document.createElement('div');
        dNew.innerHTML = "Password must have 1 letter, 1 number and one symbol"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('password').after(dNew);
        passwordChe()
        showError(passwordFirst);
    } else if (!isPasswordValid(password)) {
        let dNew = document.createElement('div');
        dNew.innerHTML = "Password must have 1 letter, 1 number and one symbol"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('password').after(dNew);
        showError(passwordFirst)
        setTimeout(function () {
            let elems = document.getElementsByClassName('timedrpact')
            for (let i = 0; i < elems.length; i++) elems[i].style.display = 'none';
        }, 3000);
    } else {
        showSuccess(passwordFirst);
        valid = true;
    }
    return valid;
};
const checkPasswordConfig = () => {
    let valid = false;
    const password = configPassword.value.trim();
    if (!isRequired(password)) {
        let dNew = document.createElement('div');
        dNew.innerHTML = "Password does not match"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('configpassword').after(dNew);
        passwordChe()
        showError(configPassword);
    } else if (!isPasswordValid(password)) {
        let dNew = document.createElement('div');
        dNew.innerHTML = "Password must have 1 letter, 1 number and one symbol"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('password').after(dNew);
        showError(passwordFirst)
        setTimeout(function () {
            let elems = document.getElementsByClassName('timedrpact')
            for (let i = 0; i < elems.length; i++) elems[i].style.display = 'none';

        }, 3000);
    } else {
        showSuccess(configPassword);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        let dNew = document.createElement('div');
        dNew.innerHTML = "Email is not correct"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('email').after(dNew);
        showError(emailEl);
    } else if (!isEmailValid(email)) {
        let dNew = document.createElement('div');
        dNew.innerHTML = "Email is not correct"
        dNew.setAttribute("class", "timedrpact");
        document.getElementById('email').after(dNew);
        showError(emailEl)
        setTimeout(function () {
            let elems = document.getElementsByClassName('timedrpact')
            for (let i = 0; i < elems.length; i++) elems[i].style.display = 'none';
        }, 3000);
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};
const checkCheckBox = () => {
    const checkboxChange = document.querySelector(".checkboxChange");
    let valid = false;
    const che = checkboxCheckbox.checked;
    if (che === false) {
        checkboxChange.style.background = "#DA5050";
        checkboxChange.style.border = "1px solid #DA5050";
        setTimeout(function () {
            checkboxChange.style.background = "#e2e2e200";
            checkboxChange.style.border = "1px solid #67D9B7";
        }, 3000);
    } else {
        checkboxChange.style.background = "#e2e2e200";
        checkboxChange.style.border = "1px solid #67D9B7";
        showError(checkboxCheckbox)
        valid = true;
    }
    return valid;
}
const validateForm = () => {
    let x = document.forms["RegForm"]["Name"].value;
    if (x.length < 2) {
        return false;
    }
}
const passwordChe = () => {
    var fir = document.forms["RegForm"]["password"].value;
    var con = document.forms["RegForm"]["configpassword"].value;
    if (fir !== con) {
        return false
    } else {
        return true
    }
}
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordValid = (password) => {
    const wnc = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{16,+}$/;
    return wnc.test(password);
};

const isRequired = value => value === '' ? false : true;

const showError = (input) => {
    const formField = input;
    const a = document.querySelector('#regist_button');
    formField.style.border = "none";
    formField.style.border = "1px solid #F6333C";
    setTimeout(function () {
        formField.style.border = "1px solid #67D9B7";
    }, 4000);
};

const showSuccess = (input) => {
    const formField = input;
    formField.style.border = "1px solid #F6333C";
    formField.style.border = " 1px solid #00C874";
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkFirstName(),
        checkSecondName(),
        checkCountry(),
        checkPhone(),
        checkPassword(),
        checkPasswordConfig(),
        checkEmail(),
        checkCheckBox()

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

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'firstname':
            checkFirstName();
            break;
        case  "secondname":
            checkSecondName()
            break;
        case 'country':
            checkCountry()
            break;
        case 'phone':
            checkPhone();
            break;
        case "password":
            checkPassword()
            break;
        case "configpassword":
            checkPasswordConfig()
            break
        case 'email':
            checkEmail();
            break;
        case 'check':
            checkCheckBox();
            break;
    }
}));

