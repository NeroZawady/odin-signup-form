import normalize from './normalize.css';
import style from './style.css';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const submitButton = document.querySelector('.form__submit');
const passwords = document.querySelectorAll('input[type="password"]');

submitButton.addEventListener('click', () => {
  let allInputsValid = true;
  for (const input of inputs) {
    if (!input.validity.valid) {
      allInputsValid = false;
      input.classList.add('invalid');
    }
  }
  if (passwords[0].value !== passwords[1].value) {
    passwords[0].setCustomValidity('Passwords do not match.');
    passwords[1].setCustomValidity('Passwords do not match.');
    passwords[0].classList.add('invalid');
    passwords[1].classList.add('invalid');
  } else {
    passwords[0].setCustomValidity('');
    passwords[1].setCustomValidity('');
    passwords[0].classList.remove('invalid');
    passwords[1].classList.remove('invalid');
  }
});

for (const input of inputs) {
  input.addEventListener('input', () => {
    if (input.classList.contains('invalid')) input.classList.remove('invalid');
  });
}
