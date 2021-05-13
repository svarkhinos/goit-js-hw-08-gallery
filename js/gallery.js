import items from '/gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const GalleryItems = createGalleryItems(items);

galleryContainer.insertAdjacentHTML('beforeend', GalleryItems);

function createGalleryItems(item) {
    return items
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="${preview}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `;
        })
        .join('');
}
