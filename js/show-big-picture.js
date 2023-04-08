import { bigPictureElement, bigPictureModalElement, commentsLoaderElement, pictureCancelButtonElement, likesCountElement, commentsCountElement, socialCaptionElement } from './gallery.js';
import { onBigPicModalKeydown, onBigPicEscapeButtonClick } from './close-modals.js';
import { onCommentsLoaderClick } from './render-comments.js';

const showBigPicture = (image) => {
  bigPictureElement.src = image.url;
  bigPictureElement.alt = image.description;
  likesCountElement.textContent = image.likes;
  commentsCountElement.textContent = image.comments.length;
  socialCaptionElement.textContent = image.description;
  document.body.classList.add('modal-open');
  bigPictureModalElement.classList.remove('hidden');
  pictureCancelButtonElement.addEventListener('click', onBigPicEscapeButtonClick);
  document.addEventListener('keydown', onBigPicModalKeydown);
  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);
};

export { showBigPicture };
