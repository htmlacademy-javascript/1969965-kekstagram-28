import { getRandomArrayElement } from './utils.js';
import { MESSAGES } from '../constants.js';

const getRandomMessage = () => `${getRandomArrayElement(MESSAGES)}`;

export { getRandomMessage };
