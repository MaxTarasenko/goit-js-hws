const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// --V1--
// const toggleUserState = (allUsers, userName) =>
//   new Promise(resolve => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
//     resolve(updatedUsers);
//   });

// --V2--
const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  return Promise.resolve(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
