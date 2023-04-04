import { imgFilters } from './photo-philtering.js';
import { onFileUpload, fileChooser } from './user-preview.js';

const onLoad = () => {
  imgFilters.classList.remove('img-filters--inactive');
  fileChooser.addEventListener('change', onFileUpload);
};

export { onLoad };
