import { bigPicture, bigPictureModal, socialCommentCount, commentsLoader, pictureCancelButton, likesCount, commentsCount, socialCaption } from './gallery.js';
import { onBigPicModalKeydown, onBigPicEscapeButtonClick } from './close-modals.js';

const showBigPicture = (image) => {
  bigPicture.src = image.url;
  bigPicture.alt = image.description;
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  socialCaption.textContent = image.description;

  document.body.classList.add('modal-open');
  bigPictureModal.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  pictureCancelButton.addEventListener('click', onBigPicEscapeButtonClick);
  document.addEventListener('keydown', onBigPicModalKeydown);
};

export {showBigPicture};
