import { createSerialNumberGenerator } from './utils.js';

import { PHOTO_DESCRIPTIONS } from '../constants.js';
const generateDescriptionIndex = createSerialNumberGenerator();
const getPhotoDescription = () => PHOTO_DESCRIPTIONS[generateDescriptionIndex() - 1];

export { getPhotoDescription };
