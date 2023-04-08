import { createSerialNumberGenerator } from './serial-generator.js';

import { PHOTO_DESCRIPTIONS } from '../constants.js';
const generateDescriptionIndex = createSerialNumberGenerator();
const getPhotoDescription = () => PHOTO_DESCRIPTIONS[generateDescriptionIndex() - 1];

export { getPhotoDescription };
