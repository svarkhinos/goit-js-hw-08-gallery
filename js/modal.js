const galleryContainer = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeLightbox = document.querySelector('[data-action="close-lightbox"]');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

galleryContainer.addEventListener('click', onGalleryContainerClick);
closeLightbox.addEventListener('click', onCloseLightboxClick);
lightboxOverlay.addEventListener('click', onLightboxOverlayClick);

function onGalleryContainerClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    evt.preventDefault();

    window.addEventListener('keydown', onEscKeyPress);

    lightbox.classList.add('is-open');

    lightboxImage.setAttribute('src', `${evt.target.dataset.source}`);
    lightboxImage.setAttribute('alt', `${evt.target.alt}`);
}

function onCloseLightboxClick() {
    window.removeEventListener('keydown', onEscKeyPress);
    lightbox.classList.remove('is-open');
    lightboxImage.setAttribute('src', '');
    lightboxImage.setAttribute('alt', '');
}

function onLightboxOverlayClick(evt) {
    if (evt.currentTarget === evt.target) {
        onCloseLightboxClick();
    }
}

function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';

    if (evt.code === ESC_KEY_CODE) {
        onCloseLightboxClick();
    }
}
