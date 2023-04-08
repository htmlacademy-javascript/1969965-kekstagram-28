import { dataFromServer } from './api/fetch.js';
import { renderGallery } from './render-gallery.js';
import { makeThumbnails } from './make-thumbnails.js';
import { thumbnailsListElement } from './gallery.js';
import { makeErrorBlock } from './api/make-error-message.js';

try {
  renderGallery(makeThumbnails(dataFromServer, thumbnailsListElement));
} catch(error) {
  makeErrorBlock(error);
}

export { renderGallery };
