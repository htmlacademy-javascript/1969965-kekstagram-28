import { dataFromServer } from './api/fetch.js';
import { renderGallery, onThumbnailsClick } from './render-gallery.js';
import { makeThumbnails } from './make-thumbnails.js';
import { thumbnailsList } from './gallery.js';
import { shuffle } from './helpers/shuffle-array.js';
import { debounce } from './helpers/debounce.js';
import { getNumberOfRandomPhotos } from './data.js';
import { getClonedData } from './helpers/get-cloned-data.js';
import { compareLikes } from './helpers/compare-data-by-likes.js';

const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = document.querySelector('.img-filters__form');
const imgFiltersButtons = Array.from(imgFiltersForm.querySelectorAll('.img-filters__button'));

const onLoad = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

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
  const shuffledData = shuffle(data).slice(0, getNumberOfRandomPhotos());
  renderGallery((makeThumbnails(shuffledData, thumbnailsList)));
};

const filterPhotoDiscussed = () => {
  const data = getClonedData(dataFromServer);
  const sortedDataByLikes = data.sort(compareLikes);
  renderGallery((makeThumbnails(sortedDataByLikes, thumbnailsList)));
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

  renderGallery(makeThumbnails(dataFromServer, thumbnailsList));
};

const debouncedFilterPhotos = debounce(filterPhotos);

const onImgFilterButtonClick = (evt) => {
  thumbnailsList.removeEventListener('click', onThumbnailsClick);
  toggleActiveButton(evt);
  debouncedFilterPhotos(evt);
};

imgFiltersForm.addEventListener('click', onImgFilterButtonClick);

export { onImgFilterButtonClick, onLoad };
