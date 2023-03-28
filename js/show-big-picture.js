import { bigPicture, bigPictureModal, commentsLoader, pictureCancelButton, likesCount, commentsCount, socialCaption } from './gallery.js';
import { onBigPicModalKeydown, onBigPicEscapeButtonClick } from './close-modals.js';
import { onCommentsLoaderClick } from './render-comments.js';

const showBigPicture = (image) => {
  bigPicture.src = image.url;
  bigPicture.alt = image.description;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  socialCaption.textContent = image.description;
  document.body.classList.add('modal-open');
  bigPictureModal.classList.remove('hidden');
  pictureCancelButton.addEventListener('click', onBigPicEscapeButtonClick);
  document.addEventListener('keydown', onBigPicModalKeydown);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
};

export {showBigPicture};
