let nameInput = document.querySelector('.nameInput');
let emailInput = document.querySelector('.emailInput');
let msgInput = document.querySelector('.msgInput');

let nameErr = document.querySelector('.nameErr');
let emailErr = document.querySelector('.emailErr');
let msgErr = document.querySelector('.msgErr');

let sendBtn = document.querySelector('.send');
let emailValidation = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ig;

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!nameInput.value) {
        nameErr.style.display = 'block';
        nameInput.style.borderColor = '#ff6f5c';
    } else {
        nameErr.style.display = 'none';
        nameInput.style.borderColor = 'white';
    }

    if (!emailInput.value) {
        emailErr.style.display = 'block';
        emailInput.style.borderColor = '#ff6f5c';
    } else if (!emailValidation.test(emailInput.value)) {
        emailErr.style.display = 'block';
        emailInput.style.borderColor = '#ff6f5c';
    } else {
        emailErr.style.display = 'none';
        emailInput.style.borderColor = 'white';
    }

    if (!msgInput.value) {
        msgErr.style.display = 'block';
        msgInput.style.borderColor = '#ff6f5c';
    } else {
        msgErr.style.display = 'none';
        msgInput.style.borderColor = 'white';
    }
});



nameInput.oninput = () => {
    validForm(nameInput, nameErr);
};
emailInput.oninput = () => {
    validForm(emailInput, emailErr);
};
msgInput.oninput = () => {
    validForm(msgInput, msgErr);
};

nameInput.onfocus = () => {
    inputFocus(nameInput);
};
emailInput.onfocus = () => {
    inputFocus(emailInput);
};
msgInput.onfocus = () => {
    inputFocus(msgInput);
};

nameInput.onblur = () => {
    inputOutFocus(nameInput);
};
emailInput.onblur = () => {
    inputOutFocus(emailInput);
};
msgInput.onblur = () => {
    inputOutFocus(msgInput);
};


const validForm = (theInput, err) => {
    if (!theInput.value) {
        err.style.display = 'block';
        theInput.style.borderColor = '#ff6f5c';
    } else {
        err.style.display = 'none';
        theInput.style.borderColor = 'white';
    }
}

const inputFocus = (theInput) => {
    theInput.style.borderColor = '#4de29e';
}

const inputOutFocus = (theInput) => {
    theInput.style.borderColor = 'white';
}