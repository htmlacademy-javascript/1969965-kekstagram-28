import { onUploadEscapeButtonClick, onUploadModalKeydown } from './close-modals.js';
import { formElement } from './api/validation.js';

const imageUploadModalElement = formElement.querySelector('.img-upload__overlay');
const uploadFileFieldElement = formElement.querySelector('#upload-file');
const uploadCancelButtonElement = imageUploadModalElement.querySelector('#upload-cancel');
const uploadedImageElement = imageUploadModalElement.querySelector('.img-upload__preview img');

uploadFileFieldElement.addEventListener('change', () => {
  imageUploadModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadCancelButtonElement.addEventListener('click', onUploadEscapeButtonClick);
  document.addEventListener('keydown', onUploadModalKeydown);
});

export { imageUploadModalElement, uploadCancelButtonElement, uploadFileFieldElement, uploadedImageElement };
