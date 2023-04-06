import { getRandomArrayElement } from './get-random-array-element.js';
import { NAMES, SURNAMES } from '../constants.js';

const getRandomName = () => `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`;

export { getRandomName };
