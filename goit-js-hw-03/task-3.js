console.log('task-3.js');
alert('task-3.js, Смотрим в консоль');

const findBestEmployee = function (employees) {
  let completedTasks = 0;
  let findEmployee;
  for (const employee in employees) {
    if (employees[employee] > completedTasks) {
      completedTasks = employees[employee];
      findEmployee = employee;
      continue;
    }
  }
  return findEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
