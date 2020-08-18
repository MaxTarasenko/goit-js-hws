const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const fragmentList = document.createDocumentFragment();
ingredients.forEach(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = el;
  fragmentList.appendChild(itemRef);
});
document.querySelector('#ingredients').appendChild(fragmentList);
