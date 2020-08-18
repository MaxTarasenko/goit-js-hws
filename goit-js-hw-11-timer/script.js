// --------------V2--------------

class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 21, 2022'),
});

function makeTimer() {
  // time - разница между targetDate и текущей датой.
  const time = timer.targetDate.getTime() - Date.now();
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  renderNumTimer('days', days);

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  renderNumTimer('hours', hours);

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  renderNumTimer('mins', mins);

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  renderNumTimer('secs', secs);
}
makeTimer();

//   Рендер таймера
function renderNumTimer(typeDate, numberDate) {
  const typeTime = document.querySelector(
    `#timer-1 span[data-value="${typeDate}"]`,
  );
  const arr = String(numberDate).split('');
  if (arr.length == 1) {
    typeTime.querySelector('.value1').textContent = 0;
    typeTime.querySelector('.value2').textContent = arr[0];
  }

  if (arr.length == 2) {
    typeTime.querySelector('.value1').textContent = arr[0];
    typeTime.querySelector('.value2').textContent = arr[1];
  }

  if (arr.length == 3) {
    document.querySelector('#timer-1').setAttribute('style', 'width: 700px;');
    typeTime.querySelector('.value3').setAttribute('style', 'display: block');
    typeTime.setAttribute('style', 'width: 185px;');
    typeTime.querySelector('.value1').textContent = arr[0];
    typeTime.querySelector('.value2').textContent = arr[1];
    typeTime.querySelector('.value3').textContent = arr[1];
  }
}

const timerId = setInterval(makeTimer, 1000);

// --------------V1--------------

// class CountdownTimer {
//   constructor(obj) {
//     this.selector = obj.selector;
//     this.targetDate = obj.targetDate;
//   }
// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Apr 21, 2020'),
// });

// function makeTimer() {
//   // time - разница между targetDate и текущей датой.
//   const time = timer.targetDate.getTime() - Date.now();
//   /*
//    * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//    * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//    */
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));

//   /*
//    * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//    * остатка % и делим его на количество миллисекунд в одном часе
//    * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//    */
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//   /*
//    * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//    * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//    */
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

//   /*
//    * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//    * миллисекунд в одной секунде (1000)
//    */
//   const secs = Math.floor((time % (1000 * 60)) / 1000);

//   //   Доступ к текущей дате
//   const timerDays = document.querySelector('#timer-1 span[data-value="days"]');
//   const timerHours = document.querySelector(
//     '#timer-1 span[data-value="hours"]',
//   );
//   const timerMins = document.querySelector('#timer-1 span[data-value="mins"]');
//   const timerSecs = document.querySelector('#timer-1 span[data-value="secs"]');

//   //   Рендер таймера
//   timerDays.textContent = days;
//   timerHours.textContent = hours;
//   timerMins.textContent = mins;
//   timerSecs.textContent = secs;
// }
// makeTimer();

// const timerId = setInterval(makeTimer, 1000);
