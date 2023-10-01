import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const myGallery = document.querySelector('.gallery');
const galleryMarkup = galleryChoice(galleryItems);
myGallery.insertAdjacentHTML('beforeend', galleryMarkup);

function galleryChoice(items) {
  return items.map((item) => {
    return `
      <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${items.description}" />
      </a>
    `;
  }).join('');
}

const newGalery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsPosition: 'bottom',
    captionsDelay: 250,
});


