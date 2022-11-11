import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onSetData, 500));

onGetData()

function onSetData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(`email: ${feedbackForm.email.value}, message: ${feedbackForm.message.value}`);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onGetData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(savedData);
    if (parseData) {
        feedbackForm.email.value = parseData.email || ''
        feedbackForm.message.value = parseData.message || ''
    }
}



