import { bigPictureModal, pictureCancelButton } from './gallery.js';
import { isEscapeKey } from './helpers/is-escape-key.js';
import { uploadCancelButton, imageUploadModal, uploadFileField } from './show-upload-modal.js';

const closeBigPictureModal = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureCancelButton.removeEventListener('click', onBigPicEscapeButtonClick);
  document.removeEventListener('keydown', onBigPicModalKeydown);
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
  document.removeEventListener('keydown', onUploadModalKeydown);
};

function onUploadModalKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPictureModal();
  }
}

function onUploadEscapeButtonClick (evt) {
  evt.preventDefault();
  closeUploadPictureModal();
}

export { onBigPicModalKeydown, onBigPicEscapeButtonClick, onUploadEscapeButtonClick, onUploadModalKeydown};
