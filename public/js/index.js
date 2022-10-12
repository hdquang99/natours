/* eslint-disable */
import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login, logout } from './login';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';
import { signup } from './signup';

// DOM elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logOutbtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');
const signupForm = document.querySelector('.form--signup');

// Values

// Delegation
if (mapBox) {
  console.log(bookBtn);
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (signupForm)
  signupForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name-signup').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
    const passwordConfirm = document.getElementById(
      'passwordConfirm-signup'
    ).value;
    signup(name, email, password, passwordConfirm);
  });

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (logOutbtn) logOutbtn.addEventListener('click', logout);

if (userDataForm)
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    updateSettings(form, 'data');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

if (bookBtn)
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    console.log('hellooooo');
    const tourId = e.target.dataset.tourId;
    bookTour(tourId);
  });
