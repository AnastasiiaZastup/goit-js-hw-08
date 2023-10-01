import throttle from 'lodash.throttle';

    const form = document.querySelector(".feedback-form");
    const emailInput = form.querySelector('input[name ="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const CONST_CURRENT_TIME = 'feedback-form-state';
    
form.addEventListener('input', throttle(saveForm, 500));
form.addEventListener('submit', onSubmit);

function saveForm() {
    const formData = {
        email: emailInput.value,
        massage: messageInput.value
    };
    localStorage.setItem(CONST_CURRENT_TIME, JSON.stringify(formData));
}

function onSubmit(event) {
    event.preventDefault();
    emailInput.value = '';
    messageInput.value = '';
    localStorage.removeItem(CONST_CURRENT_TIME);
}

function dataLocalStorage() {
    const savedData = localStorage.getItem(CONST_CURRENT_TIME);
    if (savedData) {
            const formData = JSON.parse(savedData);
            emailInput.value = formData.email;
            messageInput.value = formData.message;
        }
}
dataLocalStorage();




   