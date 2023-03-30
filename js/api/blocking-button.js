import { SubmitButtonText } from './constants-for-api.js';
import { submitButton} from './validation.js';

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

export {submitButton, blockSubmitButton, unblockSubmitButton};
