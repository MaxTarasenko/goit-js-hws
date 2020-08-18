import galleryTemplate from './templates/gallery.hbs';
import modalImageTemplate from './templates/modal.hbs';
import * as basicLightbox from 'basiclightbox';
const form = document.querySelector('#search-form');
const galleryBox = document.querySelector('.container');
let searchName = '';
let pageNumber = 1;

const button = document.querySelector('.load-more-button');
button.addEventListener('click', () => {
  pageNumber += 1;
  getImages();
  setTimeout(
    () =>
      window.scrollTo({
        top: document.documentElement.scrollHeight, // could be negative value
        left: 0,
        behavior: 'smooth',
      }),
    1500,
  );
});

const getImages = async () =>
  await fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchName}&page=${pageNumber}&per_page=12&key=16154049-920613fe8ac8115ece0f8eaf1`,
  )
    .then(response => response.json())
    .then(images => renderGallery(images))
    .catch(error => console.log(error));

const renderGallery = images => {
  images.alt = searchName;
  const ul = document.createElement('ul');
  const hr = document.createElement('hr');
  ul.className = 'gallery';
  ul.innerHTML += galleryTemplate(images);
  galleryBox.appendChild(ul);
  galleryBox.appendChild(hr);
  if (button.dataset.display == 'false') {
    button.dataset.display = 'true';
    button.style.display = 'inline-block';
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  const gallery = document.querySelectorAll('.gallery');
  if (gallery) {
    gallery.forEach(el => el.remove());
    document.querySelectorAll('hr').forEach(el => el.remove());
  }

  if (searchName == formData.get('query')) {
    pageNumber += 1;
    getImages();
  } else {
    pageNumber = 1;
    searchName = formData.get('query');
    getImages();
  }
});

galleryBox.addEventListener('click', handleImgClick);

function handleImgClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName == 'IMG') {
    createModalImage(target);
  }
}

function createModalImage(target) {
  const obj = {};
  obj.src = target.dataset.bigimage;
  obj.likes = target.dataset.likes;
  obj.views = target.dataset.views;
  obj.comments = target.dataset.comments;
  obj.downloads = target.dataset.downloads;
  basicLightbox.create(modalImageTemplate(obj)).show();
}
