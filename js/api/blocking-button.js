import { SubmitButtonText } from './constants-for-api.js';
import { submitButtonElement } from './validation.js';

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

export { submitButtonElement, blockSubmitButton, unblockSubmitButton };
