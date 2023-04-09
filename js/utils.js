import { getTimeoutDelay } from './data.js';

const compareComments = (a, b) => {
  if (a.comments.length < b.comments.length) {
    return 1;
  }
  if (a.comments.length > b.comments.length) {
    return -1;
  }
  return 0;
};

const debounceFunction = (callback, timeoutDelay = getTimeoutDelay()) => {
  let timeoutId = null;
  return (...rest) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback.apply(this, rest);
    }, timeoutDelay);
  };
};

const getClonedData = (data) => {
  const clonedData = [...data];
  return clonedData;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const createSerialNumberGenerator = () => {
  let lastGenerateId = 0;
  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
  }
  return array;
}

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export { getRandomInteger, compareComments, debounceFunction, getClonedData, isEscapeKey, createSerialNumberGenerator, shuffleArray, getRandomArrayElement };

