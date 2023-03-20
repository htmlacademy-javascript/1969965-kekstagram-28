import { thumbnailsList } from './gallery.js';
import { showBigPicture } from './show-big-picture.js';
import { makeThumbnails } from './make-thumbnails.js';

const renderGallery = (thumbnails) => {
  thumbnailsList.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    const thumbnailId = Number(thumbnail.dataset.thumbnailId);
    const picture = thumbnails.find((item) => item.id === thumbnailId);
    showBigPicture(picture);
  });
  makeThumbnails();
};

export {renderGallery};
