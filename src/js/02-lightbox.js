import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);


const gallereyMarkup = galleryItems.map(({original, preview, description}) => `
<a class="gallery__item" href="${original}" title="${description}" >
  <img class="gallery__image" src="${preview}" alt="${description}" captionPosition />
</a>
`).join('');

const galleryEl = document.querySelector('.gallery');
//рендер разметки
galleryEl.insertAdjacentHTML('beforeend', gallereyMarkup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 1000,captionPosition: "bottom" });

