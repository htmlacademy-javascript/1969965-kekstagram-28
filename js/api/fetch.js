import { errorBlock } from './make-error-message.js';
import { renderGallery } from '../render-gallery.js';
import { makeThumbnails } from '../make-thumbnails.js';
import { showErrorMessage, showSuccessMessage } from './error-success-message.js';
import { BASE_URL, Route, Method } from './constants-for-api.js';

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body});

const getPhotosFromServer = () => {
  load(Route.GET_DATA)
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
  load(Route.SEND_DATA, Method.POST, data)
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
