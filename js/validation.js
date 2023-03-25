import { getMaxHashtagLength } from './data.js';
import { showSuccessMessage, showErrorMessage } from './error-success-message.js';

const form = document.querySelector('#upload-select-image');

const hashtagInputField = form.querySelector('.text__hashtags');
const commentInputField = form.querySelector('.text__description');
const activeElement = document.activeElement;
const HASHTAG_REG_EXP = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form);

function onUploadFormSubmit (evt) {
  evt.preventDefault();
  const valid = pristine.validate();
  if (valid) {
    showSuccessMessage();
    return;
  }
  showErrorMessage();
}

const validateHashtags = (value) => {
  const hashtagsList = value
    .trim()
    .split(' ')
    .filter((hashtag) => hashtag.trim().length);

  return validateHashtagsLength(hashtagsList) && validateHashtagsUniqueness(hashtagsList) && checkHashtag(hashtagsList);
};

function validateHashtagsLength (hashtags) {
  return hashtags.length <= getMaxHashtagLength();
}

function validateHashtagsUniqueness (hashtags) {
  const lowerCaseHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  return !lowerCaseHashtags.some((hashtag, idx) => hashtags.indexOf(hashtag) !== idx);
}

function checkHashtag (hashtags) {
  const result = hashtags.every((elem) => HASHTAG_REG_EXP.test(elem));
  return result;
}

pristine.addValidator(
  hashtagInputField,
  validateHashtags,
  'Неправильно заполнены хештеги'
);

form.addEventListener('submit', onUploadFormSubmit);

export { hashtagInputField, commentInputField, activeElement, form, pristine} ;
