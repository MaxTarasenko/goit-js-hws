import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');

// Render gallery-items
galleryItems.forEach(obj =>
  gallery.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__item">

    <a href="${obj.original}" class="gallery__link">

    <img 
    class="gallery__image" 
    src="${obj.preview}" 
    alt="${obj.description}" 
    data-source="${obj.original}">

    </a>

    </li>`,
  ),
);

// Open image in the window
gallery.addEventListener('click', handleUlClick);
function handleUlClick(event) {
  event.preventDefault();
  const target = event.target;
  openModalWindow(target);
}

function openModalWindow(target) {
  document.querySelector('div.lightbox').classList.add('is-open');
  document
    .querySelector('img.lightbox__image')
    .setAttribute('src', target.dataset.source);
}

// Close image in the open window
document
  .querySelector('button[data-action="close-lightbox"]')
  .addEventListener('click', closeOpenModalWindow);

document
  .querySelector('.lightbox__overlay')
  .addEventListener('click', closeOpenModalWindow);

// Key pressed
document.onkeydown = evt => {
  if (evt.keyCode == 27) {
    // Esc key
    closeOpenModalWindow();
  }
  // --------Switching images key--------
  // Left key
  else if (evt.keyCode == 37) {
    changeImage('left');
  }
  // Right key
  else if (evt.keyCode == 39) {
    changeImage('right');
  }
};

function closeOpenModalWindow() {
  document.querySelector('img.lightbox__image').setAttribute('src', '');
  document.querySelector('div.lightbox').classList.remove('is-open');
}

// --------Switching images function--------
let currentIndexArray = 0;
const searchIndex = currentImage => {
  galleryItems.forEach((obj, index) => {
    if (obj.original == currentImage.src) {
      currentIndexArray = index;
    }
  });
};

function changeImage(arrow) {
  const imageSrc = document.querySelector('img.lightbox__image');
  searchIndex(imageSrc);
  if (arrow == 'left') {
    if (currentIndexArray == 0) {
      currentIndexArray = galleryItems.length - 1;
      imageSrc.setAttribute('src', galleryItems[currentIndexArray].original);
    } else {
      currentIndexArray -= 1;
      imageSrc.setAttribute('src', galleryItems[currentIndexArray].original);
    }
  } else if (arrow == 'right') {
    if (currentIndexArray == galleryItems.length - 1) {
      currentIndexArray = 0;
      imageSrc.setAttribute('src', galleryItems[currentIndexArray].original);
    } else {
      currentIndexArray += 1;
      imageSrc.setAttribute('src', galleryItems[currentIndexArray].original);
    }
  }
}
