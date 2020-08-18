import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Set localStorage theme
const updateTheme = () => {
  if (localStorage.getItem('theme')) {
    body.classList.add(localStorage.getItem('theme'));
  }
  if (body.classList == Theme.DARK) {
    document
      .querySelector('#theme-switch-control')
      .setAttribute('checked', 'true');
  }
};

// Switching the global theme color
const body = document.body;
const changeGlobalTheme = () => {
  body.classList == Theme.DARK
    ? localStorage.setItem('theme', Theme.LIGHT) ||
      body.classList.remove(Theme.DARK)
    : localStorage.setItem('theme', Theme.DARK) ||
      body.classList.remove(Theme.LIGHT);
  updateTheme();
};

updateTheme();

document
  .querySelector('input.js-switch-input')
  .addEventListener('change', changeGlobalTheme);

// Render menu Template
import menuTemplate from './tempalte/menu.hbs';
import menuArray from './menu.json';

menuArray.forEach(obj => {
  const markup = menuTemplate(obj);
  const container = document.querySelector('ul.js-menu');
  container.innerHTML += markup;
});
