import { thumbnailsListElement } from './gallery.js';
import { renderComments } from './render-comments.js';
import { showBigPicture } from './show-big-picture.js';

let onThumbnailsClick = null;

const onThumbClick = (evt, thumbnails) => {
  const thumbnailElement = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnailElement) {
    return;
  }
  const thumbnailId = Number(thumbnailElement.dataset.thumbnailId);
  const picture = thumbnails.find((item) => item.id === thumbnailId);
  showBigPicture(picture);
  renderComments(picture);
};

const renderGallery = (thumbnails) => {
  onThumbnailsClick = (evt) => onThumbClick(evt, thumbnails);
  thumbnailsListElement.addEventListener('click', onThumbnailsClick);
};

export { renderGallery, onThumbnailsClick };
