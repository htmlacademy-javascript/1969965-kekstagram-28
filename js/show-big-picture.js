import { bigPicture, bigPictureModal, socialCommentCount, commentsLoader, pictureCancelButton, likesCount, commentsCount, socialCaption } from './gallery.js';
import { onModalKeydown, onEscapeButtonClick } from './close-modal.js';

const showBigPicture = (image) => {
  bigPicture.src = image.url;
  bigPicture.alt = image.description;
  console.log(image);
  likesCount.textContent = image.likes;
  commentsCount.textContent = image.comments.length;
  socialCaption.textContent = image.description;

  document.body.classList.add('modal-open');
  bigPictureModal.classList.remove('hidden');
  // socialCommentCount.classList.add('hidden');
  // commentsLoader.classList.add('hidden');
  pictureCancelButton.addEventListener('click', onEscapeButtonClick);
  document.addEventListener('keydown', onModalKeydown);
};

export {showBigPicture};
