import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onSetData, 500));
refs.message.addEventListener('input', throttle(onSetData, 500));

onGetData()

function onSetData(evt) {
    const data = { email: '', message: '' };
    data.email = refs.email.value;
    data.message = refs.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(`email: ${refs.email.value}, message: ${refs.message.value}`);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onGetData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parseData = JSON.parse(savedData);
    if (parseData) {
        refs.email.value = parseData.email || ''
        refs.message.value = parseData.message || ''
    }
}



