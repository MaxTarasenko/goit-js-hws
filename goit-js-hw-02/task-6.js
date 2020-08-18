console.log('task-6.js');
alert(
  'task-6.js, Добавление чисел в массив, а затем подсчет общего числа в консоль',
);

let input;
const numbers = [];
let total = 0;
while (true) {
  input = prompt('Введите число:', '');
  if (input === null) {
    break;
  }
  if (isNaN(parseInt(input))) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
}
if (numbers.length != 0) {
  for (const number of numbers) {
    total += +number;
  }
  console.log(total);
}
