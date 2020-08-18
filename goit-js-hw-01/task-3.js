console.log('task-3.js');
alert(
  'task-3.js, Даем ответ на всплывающее окно(пароль: admin, либо ошибаемся)',
);
const ADMIN_PASSWORD = 'admin';
let message;

const answer = prompt('Введите ваш пароль администратора: ');

if (answer === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (answer === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
