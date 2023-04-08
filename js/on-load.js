import { imgFiltersElement } from './photo-philtering.js';
import { onFileUpload, fileChooserElement } from './user-preview.js';

const onLoad = () => {
  imgFiltersElement.classList.remove('img-filters--inactive');
  fileChooserElement.addEventListener('change', onFileUpload);
};

export { onLoad };
