console.log('task-4.js');
alert('task-4.js, Покупка дроидов (кредитов: 23580, цена дроида: 3000)');

const credits = 23580;
const pricePerDroid = 3000;

const answer = prompt('Какое количество дроидов, вы хотите купить?');

if (answer === null) {
  alert('Отменено пользователем!');
} else if (answer == '' || answer == 0) {
  alert('Вы не покупаете наших дроидов?');
} else {
  const totalPrice = answer * pricePerDroid;
  if (totalPrice <= credits) {
    alert(
      `Вы купили ${answer} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  } else {
    alert('Недостаточно средств на счету!');
  }
}
