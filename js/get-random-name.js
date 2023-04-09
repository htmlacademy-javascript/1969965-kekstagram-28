import { getRandomArrayElement } from './utils.js';
import { NAMES, SURNAMES } from './constants.js';

const getRandomName = () => `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`;

export { getRandomName };
