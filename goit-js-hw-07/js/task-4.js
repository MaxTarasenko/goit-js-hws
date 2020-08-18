const counterValue = document.querySelector('#value');

const increment = () =>
  (counterValue.textContent = +counterValue.textContent + 1);

const decrement = () => (counterValue.textContent -= 1);

const btn = document.querySelectorAll('#counter button');

btn[0].addEventListener('click', decrement);
btn[1].addEventListener('click', increment);
