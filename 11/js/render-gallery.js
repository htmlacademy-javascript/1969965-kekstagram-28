import { thumbnailsList } from './gallery.js';
import { renderComments } from './render-comments.js';
import { showBigPicture } from './show-big-picture.js';

let onThumbnailsClick = null;

const onThumbClick = (evt, thumbnails) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }
  const thumbnailId = Number(thumbnail.dataset.thumbnailId);
  const picture = thumbnails.find((item) => item.id === thumbnailId);
  showBigPicture(picture);
  renderComments(picture);
};

const renderGallery = (thumbnails) => {
  onThumbnailsClick = (evt) => onThumbClick(evt, thumbnails);
  thumbnailsList.addEventListener('click', onThumbnailsClick);
};

export { renderGallery, onThumbnailsClick };
