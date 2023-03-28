import { bigPictureModal, pictureCancelButton } from './gallery.js';
import { isEscapeKey } from './helpers/is-escape-key.js';
import { uploadCancelButton, imageUploadModal, uploadFileField } from './show-upload-modal.js';
import { resetScale } from './change-scale.js';
import { form } from './validation.js';
import { pristine } from './validation.js';
import {clearComments} from './render-comments.js';
import { onCommentsLoaderClick,commentsLoader } from './render-comments.js';

const closeBigPictureModal = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureCancelButton.removeEventListener('click', onBigPicEscapeButtonClick);
  document.removeEventListener('keydown', onBigPicModalKeydown);
  clearComments();
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
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
  imageUploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadCancelButton.removeEventListener('click', onUploadEscapeButtonClick);
  uploadFileField.value = '';
  resetScale();
  form.reset();
  pristine.reset();
  document.removeEventListener('keydown', onUploadModalKeydown);
};

function onUploadModalKeydown (evt) {
  const activeElement = document.activeElement.attributes.type.value;
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (activeElement === 'text') {
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

export { onBigPicModalKeydown, onBigPicEscapeButtonClick, onUploadEscapeButtonClick, onUploadModalKeydown, closeUploadPictureModal};
