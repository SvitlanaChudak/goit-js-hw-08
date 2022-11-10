import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox)
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`).join('');
gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionSelector: "img",
    captionType: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});
console.log(galleryItems);
