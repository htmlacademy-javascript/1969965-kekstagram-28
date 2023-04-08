import { bigPictureModalElement, pictureCancelButtonElement } from './gallery.js';
import { isEscapeKey } from './helpers/is-escape-key.js';
import { uploadCancelButtonElement, imageUploadModalElement, uploadFileFieldElement } from './show-upload-modal.js';
import { resetScale } from './change-scale.js';
import { formElement } from './api/validation.js';
import { resetEffects } from './change-filters.js';
import { pristine } from './api/validation.js';
import { clearComments } from './render-comments.js';
import { onCommentsLoaderClick,commentsLoaderElement } from './render-comments.js';
import { unblockSubmitButton } from './api/blocking-button.js';
import { commentInputFieldElement } from './api/validation.js';

const closeBigPictureModal = () => {
  bigPictureModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureCancelButtonElement.removeEventListener('click', onBigPicEscapeButtonClick);
  document.removeEventListener('keydown', onBigPicModalKeydown);
  clearComments();
  commentsLoaderElement.removeEventListener('click', onCommentsLoaderClick);
};

function onBigPicModalKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
}

function onBigPicEscapeButtonClick (evt) {
  evt.preventDefault();
  closeBigPictureModal();
}

const closeUploadPictureModal = () => {
  imageUploadModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadCancelButtonElement.removeEventListener('click', onUploadEscapeButtonClick);
  uploadFileFieldElement.value = '';
  resetScale();
  resetEffects();
  formElement.reset();
  pristine.reset();
  unblockSubmitButton();
  document.removeEventListener('keydown', onUploadModalKeydown);
};

function onUploadModalKeydown (evt) {
  const isFocused = (document.activeElement === commentInputFieldElement);
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (isFocused) {
      evt.stopPropagation();
    } else {
      closeUploadPictureModal();
    }
  }
}

function onUploadEscapeButtonClick (evt) {
  evt.preventDefault();
  closeUploadPictureModal();
}

export { onBigPicModalKeydown, onBigPicEscapeButtonClick, onUploadEscapeButtonClick, onUploadModalKeydown, closeUploadPictureModal };
