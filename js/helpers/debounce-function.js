import { getTimeoutDelay } from '../data.js';

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

export { debounceFunction };
