const body = document.body;
body.style.textAlign = 'center';
body.style.paddingTop = '300px';
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
btnStop.setAttribute('disabled', 'disabled');
let timerId = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const changeColorBody = () => {
  const randomNum = randomIntegerFromInterval(0, colors.length - 1);
  body.style.backgroundColor = colors[randomNum];
  console.log(`change color: body.color = ${colors[randomNum]}`);
};

const disabledBtn = action => {
  if (action == 'start') {
    btnStart.setAttribute('disabled', 'disabled');
    btnStop.removeAttribute('disabled');
  } else {
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', 'disabled');
  }
};

btnStart.addEventListener('click', () => {
  timerId = setInterval(changeColorBody, 1000);
  disabledBtn('start');
});

btnStop.addEventListener('click', () => {
  clearTimeout(timerId);
  console.log('setInterval stopped!');
  disabledBtn();
});
