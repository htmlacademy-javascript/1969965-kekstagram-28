import { errorBlock } from './make-error-message.js';
import { renderGallery } from '../render-gallery.js';
import { makeThumbnails } from '../make-thumbnails.js';
import { showErrorMessage, showSuccessMessage } from '../error-success-message.js';

const getPhotosFromServer = () => {
  fetch('https://28.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status}`);
    })
    .then((response) => response.json())
    .then((photos) => {
      renderGallery(makeThumbnails(photos));
    })
    .catch((error) => {
      errorBlock(error);
    });
};

const postPhotoFromUser = (data) => {
  fetch('https://28.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: data
    })
    .then((response) => {
      if (!response.ok) {
        showErrorMessage();
      } else {
        showSuccessMessage();
      }
    })
    .catch(showErrorMessage);
};

export {getPhotosFromServer, postPhotoFromUser};
