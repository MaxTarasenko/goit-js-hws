const counter = document.querySelector('#controls input');
const btn = document.querySelectorAll('#controls button');
const boxes = document.querySelector('#boxes');
let sizeBox = 30;

// Create Boxes
const rgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const createBoxes = amount => {
  for (let index = 0; index < amount; index++) {
    const createBox = document.createElement('div');
    createBox.style.backgroundColor = rgb();
    createBox.style.width = `${sizeBox}px`;
    createBox.style.height = `${sizeBox}px`;
    boxes.appendChild(createBox);
    sizeBox += 10;
  }
};
btn[0].addEventListener('click', () => createBoxes(counter.value));

// Destroy Boxes
const destroyBoxes = () => {
  boxes.querySelectorAll('div').forEach(div => div.remove());
  sizeBox = 30;
};
btn[1].addEventListener('click', destroyBoxes);
