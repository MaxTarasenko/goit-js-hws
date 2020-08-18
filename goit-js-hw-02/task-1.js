console.log('task-1.js');
alert('task-1, Смотрим в консоль');
const logItems = function (array) {
  let num = 1;
  for (const item of array) {
    console.log(`${num} - ${item}`);
    num++;
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
