import { BASE_URL, Route, Method } from './constants-for-api.js';
import { errorBlock } from './make-error-message.js';
import { showErrorMessage, showSuccessMessage } from './error-success-message.js';
import { onLoad } from '../photo-philtering.js';

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body});

const getPhotosFromServer = () =>
  load(Route.GET_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status}`);
    })
    .catch((error) => {
      errorBlock(error);
    });

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

const dataFromServer = await getPhotosFromServer();

export { postPhotoFromUser, dataFromServer };
