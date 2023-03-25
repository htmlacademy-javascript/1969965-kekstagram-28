import { onUploadEscapeButtonClick, onUploadModalKeydown } from './close-modals.js';
import { uploadForm } from './validation.js';

const imageUploadModal = uploadForm.querySelector('.img-upload__overlay');
const uploadFileField = uploadForm.querySelector('#upload-file');
const uploadCancelButton = imageUploadModal.querySelector('#upload-cancel');
const uploadedImage = imageUploadModal.querySelector('.img-upload__preview img');

uploadFileField.addEventListener('change', () => {
  imageUploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadCancelButton.addEventListener('click', onUploadEscapeButtonClick);
  document.addEventListener('keydown', onUploadModalKeydown);
});

export { imageUploadModal, uploadCancelButton, uploadFileField, uploadedImage };
