console.log('task-1.js');
alert('task-1.js, Смотрим в консоль');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]};`);
}
