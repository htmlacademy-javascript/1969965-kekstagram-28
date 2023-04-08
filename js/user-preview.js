import { formElement } from './api/validation.js';
import { FILE_TYPES } from './constants.js';

const userPicPreviewElement = document.querySelector('.img-upload__preview img');
const fileChooserElement = formElement.querySelector('#upload-file');

const onFileUpload = () => {
  const file = fileChooserElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    userPicPreviewElement.src = URL.createObjectURL(file);
  }
};

export { onFileUpload, fileChooserElement };
