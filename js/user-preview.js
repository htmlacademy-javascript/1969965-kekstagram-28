import { form } from './api/validation.js';
import { FILE_TYPES } from './constants.js';

const userPicPreview = document.querySelector('.img-upload__preview img');
const fileChooser = form.querySelector('#upload-file');

const onFileUpload = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    userPicPreview.src = URL.createObjectURL(file);
  }
};

export { onFileUpload, fileChooser };
