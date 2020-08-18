document.querySelectorAll('.item').forEach(item => {
  const titleText = item.querySelector('h2').textContent;
  const itemLength = item.querySelectorAll('ul li').length;
  console.log(`Категория: ${titleText}`);
  console.log(`Количество элементов: ${itemLength}`);
});
