import PNotify from 'pnotify/dist/es/PNotify';
const debounce = require('lodash.debounce');
const searchInput = document.querySelector('#js-search');
const intro = document.querySelector('.intro');

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .catch(err => {
      console.error('Error: ', err);
    });
}

function renderCountries(countriesArray) {
  if (intro.querySelector('.js-countries')) {
    intro.querySelector('.js-countries').remove();
  }
  const div = document.createElement('div');
  div.setAttribute('class', 'js-countries');
  intro.appendChild(div);
  const countries = document.querySelector('.js-countries');
  if (countriesArray.length > 1) {
    countries.innerHTML = '<ul>';
    const listCountries = countries.querySelector('ul');
    countriesArray.forEach(
      element => (listCountries.innerHTML += `<li>${element.name}</li>`),
    );
  } else {
    countries.insertAdjacentHTML(
      'afterbegin',
      `
    <h1>${countriesArray[0].name}</h1>
    <div class='box'>
    <div class='info'>
    <p>Capital: <span>${countriesArray[0].capital}</span></p>
    <p>Population: <span>${countriesArray[0].population}</span></p>
    <p>Languages:</p>
    <ul></ul>
    </div>
    <div class='flag'>
    <img src="${countriesArray[0].flag}" alt="flag">
    </div>
    </div>
    `,
    );
    countriesArray[0].languages.forEach(
      element =>
        (document.querySelector(
          '.info ul',
        ).innerHTML += `<li>${element.name}</li>`),
    );
  }
}

function updateView(countriesArray) {
  if (intro.querySelector('.js-countries')) {
    intro.querySelector('.js-countries').remove();
  }
  if (countriesArray == undefined) {
    PNotify.info({
      text: 'Please enter the name of the country!',
    });
  } else if (countriesArray.length <= 10) {
    renderCountries(countriesArray);
    console.log(countriesArray);
  } else {
    PNotify.error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  }
}

searchInput.addEventListener(
  'input',
  debounce(() => fetchCountries(searchInput.value).then(updateView), 500),
);
