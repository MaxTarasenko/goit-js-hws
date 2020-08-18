const fontSizeControlById = document.querySelector('#font-size-control');
const textEditSize = () =>
  (document.querySelector(
    '#text',
  ).style.fontSize = `${fontSizeControlById.value}px`);
fontSizeControlById.addEventListener('input', textEditSize);
