console.log('task-6.js');
alert('task-6.js, Подсчет общей суммы чисел');

let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число:');
  if (input == null) {
    break;
  } else if (isNaN(parseInt(input))) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  total += +input;
}
alert(`Общая сумма чисел равна ${total}`);
