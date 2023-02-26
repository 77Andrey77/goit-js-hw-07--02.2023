import { galleryItems } from './gallery-items.js';
// Change code below this line


// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с 
// документацией и примерами.
// 5. Замена значения атрибута src элемента <img> в модальном окне перед открытием.
//  Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// создаем разметки по массиву данных
const gallereyItemsMarkup = galleryItems.map(({ preview, original, description }) => 
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');


const galleryEl = document.querySelector('.gallery');
//рендер разметки
galleryEl.insertAdjacentHTML('beforeend', gallereyItemsMarkup);

//делегирования на div.gallery и получение url большого изображения

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();

  // const isImg = document.querySelector('.gallery__image');
  // console.log(event.target.dataset.source);
  if (event.target.nodeName !== "IMG") { 
    return;
  };
  
  // открытие модалки с помощью библиотеки
  const instance = basicLightbox.create(`
     <div class="modal">
        <img src="${event.target.dataset.source}" />
    </div>
`)
instance.show();
  
  //слушатель события для закрытия модалки по esc
  window.addEventListener('keydown', onClickEscape);

  function onClickEscape({code}) {
   
    if (code === 'Escape') {
      instance.close();
  window.removeEventListener('keydown', onClickEscape);
    }
    
}
}


