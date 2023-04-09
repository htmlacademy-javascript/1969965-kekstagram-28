import { isEscapeKey } from '../utils.js';
import { closeUploadPictureModal } from '../close-modals.js';
import { onUploadModalKeydown } from '../close-modals.js';
import { unblockSubmitButton } from './blocking-button.js';

const errorClass = '#error';
const successClass = '#success';

const makeMessageModal = (className) => {
  const templateElement = document.querySelector(className).content;
  const fragmentElement = templateElement.cloneNode(true);
  const messageWrapperElement = document.createElement('div');
  messageWrapperElement.append(fragmentElement);
  const messageElement = messageWrapperElement.querySelector(`.${className.substring(1)}`);
  return messageElement;
};

function makeErrorMessage () {
  return makeMessageModal(errorClass);
}

function makeSuccessMessage() {
  return makeMessageModal(successClass);
}

const errorFieldElement = makeErrorMessage();
const successFieldElement = makeSuccessMessage();
const successButtonElement = successFieldElement.querySelector('.success__button');
const errorButtonElement = errorFieldElement.querySelector('.error__button');
const successModalElement = successFieldElement.querySelector('.success__inner');
const errorModalElement = errorFieldElement.querySelector('.error__inner');

const showSuccessMessage = () => {
  document.body.append(successFieldElement);
  successButtonElement.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onSuccessEscapeKeydown);
  successFieldElement.addEventListener('click', onSuccessFieldClick);
};

const closeSuccessMesage = () => {
  closeUploadPictureModal();
  unblockSubmitButton();
  successFieldElement.remove();
  successButtonElement.removeEventListener('click', onSuccessButtonClick);
  document.removeEventListener('keydown', onSuccessEscapeKeydown);
  successFieldElement.removeEventListener('click', onSuccessFieldClick);
};

function onSuccessButtonClick (evt) {
  evt.preventDefault();
  closeSuccessMesage();
}

function onSuccessEscapeKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMesage();
  }
}

function onSuccessFieldClick (evt) {
  if (evt.target !== successModalElement) {
    closeSuccessMesage();
  }
}

const showErrorMessage = () => {
  document.body.append(errorFieldElement);
  errorButtonElement.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onErrorEscapeKeydown);
  errorFieldElement.addEventListener('click', onErrorFieldClick);
  document.removeEventListener('keydown', onUploadModalKeydown);
};

const closeErrorMesage = () => {
  errorFieldElement.remove();
  unblockSubmitButton();
  errorButtonElement.removeEventListener('click', onErrorButtonClick);
  document.removeEventListener('keydown', onErrorEscapeKeydown);
  errorFieldElement.removeEventListener('click', onErrorFieldClick);
};

function onErrorButtonClick (evt) {
  evt.preventDefault();
  closeErrorMesage();
}

function onErrorEscapeKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMesage();
  }
}

function onErrorFieldClick (evt) {
  if (evt.target !== errorModalElement) {
    closeErrorMesage();
  }
}

export { errorFieldElement, successFieldElement, showSuccessMessage, onSuccessButtonClick, showErrorMessage };
