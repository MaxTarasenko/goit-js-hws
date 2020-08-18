console.log('task-4.js');
alert('task-4.js, Смотрим в консоль');

const countTotalSalary = function (employees) {
  let result = 0;
  for (const employee in employees) {
    result += employees[employee];
  }
  return result;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
