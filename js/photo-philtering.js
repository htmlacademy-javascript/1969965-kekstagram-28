import { dataFromServer } from './api/fetch.js';
import { renderGallery, onThumbnailsClick } from './render-gallery.js';
import { makeThumbnails } from './make-thumbnails.js';
import { thumbnailsListElement } from './gallery.js';
import { shuffleArray } from './helpers/shuffle-array.js';
import { debounceFunction } from './helpers/debounce-function.js';
import { getNumberOfRandomPhotos } from './data.js';
import { getClonedData } from './helpers/get-cloned-data.js';
import { compareComments } from './helpers/compare-data-by-comments.js';

const imgFiltersElement = document.querySelector('.img-filters');
const imgFiltersFormElement = document.querySelector('.img-filters__form');
const imgFiltersButtons = Array.from(imgFiltersFormElement.querySelectorAll('.img-filters__button'));

const toggleActiveButton = (evt) => {
  for (const button of imgFiltersButtons) {
    if (button.classList.contains('img-filters__button--active')) {
      button.classList.remove('img-filters__button--active');
    }
  }
  evt.target.classList.add('img-filters__button--active');
};

const filterPhotoRandom = () => {
  const data = getClonedData(dataFromServer);
  const shuffledData = shuffleArray(data).slice(0, getNumberOfRandomPhotos());
  renderGallery((makeThumbnails(shuffledData, thumbnailsListElement)));
};

const filterPhotoDiscussed = () => {
  const data = getClonedData(dataFromServer);
  const sortedDataByComments = data.sort(compareComments);
  renderGallery((makeThumbnails(sortedDataByComments, thumbnailsListElement)));
};

const filterPhotos = (evt) => {
  if (evt.target.id.endsWith('-random')) {
    filterPhotoRandom();
    return;
  }

  if (evt.target.id.endsWith('-discussed')) {
    filterPhotoDiscussed();
    return;
  }

  renderGallery(makeThumbnails(dataFromServer, thumbnailsListElement));
};

const debouncedFilterPhotos = debounceFunction(filterPhotos);

const onImgFilterButtonClick = (evt) => {
  thumbnailsListElement.removeEventListener('click', onThumbnailsClick);
  toggleActiveButton(evt);
  debouncedFilterPhotos(evt);
};

imgFiltersFormElement.addEventListener('click', onImgFilterButtonClick);

export { onImgFilterButtonClick, imgFiltersElement };
