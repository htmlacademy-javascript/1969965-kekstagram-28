import { isEscapeKey } from '../helpers/is-escape-key.js';
import { closeUploadPictureModal } from '../close-modals.js';
import { onUploadModalKeydown } from '../close-modals.js';

const errorClass = '#error';
const successClass = '#success';

const makeMessageModal = (className) => {
  const template = document.querySelector(className).content;
  const fragment = template.cloneNode(true);
  const messageWrapper = document.createElement('div');
  messageWrapper.append(fragment);
  const message = messageWrapper.querySelector(`.${className.substring(1)}`);
  return message;
};

function makeErrorMessage () {
  return makeMessageModal(errorClass);
}

function makeSuccessMessage() {
  return makeMessageModal(successClass);
}

const errorField = makeErrorMessage();
const successField = makeSuccessMessage();
const successButton = successField.querySelector('.success__button');
const errorButton = errorField.querySelector('.error__button');
const successModal = successField.querySelector('.success__inner');
const errorModal = errorField.querySelector('.error__inner');

const showSuccessMessage = () => {
  document.body.append(successField);
  successButton.addEventListener('click', onSuccessButtonClick);
  document.addEventListener('keydown', onSuccessEscapeKeydown);
  successField.addEventListener('click', onSuccessFieldClick);
};

const closeSuccessMesage = () => {
  closeUploadPictureModal();
  successField.remove();
  successButton.removeEventListener('click', onSuccessButtonClick);
  document.removeEventListener('keydown', onSuccessEscapeKeydown);
  successField.removeEventListener('click', onSuccessFieldClick);
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
  if (evt.target !== successModal) {
    closeSuccessMesage();
  }
}

const showErrorMessage = () => {
  document.body.append(errorField);
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onErrorEscapeKeydown);
  errorField.addEventListener('click', onErrorFieldClick);
  document.removeEventListener('keydown', onUploadModalKeydown);
};

const closeErrorMesage = () => {
  errorField.remove();
  errorButton.removeEventListener('click', onErrorButtonClick);
  document.removeEventListener('keydown', onErrorEscapeKeydown);
  errorField.removeEventListener('click', onErrorFieldClick);
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
  if (evt.target !== errorModal) {
    closeErrorMesage();
  }
}

export {errorField, successField, showSuccessMessage, onSuccessButtonClick, showErrorMessage};
