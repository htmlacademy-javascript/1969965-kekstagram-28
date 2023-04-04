import { dataFromServer } from './api/fetch.js';
import { renderGallery } from './render-gallery.js';
import { makeThumbnails } from './make-thumbnails.js';
import { thumbnailsList } from './gallery.js';

renderGallery(makeThumbnails(dataFromServer, thumbnailsList));

export { renderGallery };
