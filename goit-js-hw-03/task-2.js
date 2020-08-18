console.log('task-2.js');
alert('task-2.js, Смотрим в консоль');

const countProps = function (obj) {
  return Object.values(obj).length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
