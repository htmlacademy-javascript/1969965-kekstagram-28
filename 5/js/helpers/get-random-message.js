import { getRandomArrayElement } from './get-random-array-element.js';
import { MESSAGES } from '../constants.js';

const getRandomMessage = () => `${getRandomArrayElement(MESSAGES)}`;

export { getRandomMessage };
