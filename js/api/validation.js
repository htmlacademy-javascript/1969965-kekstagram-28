import { getMaxHashtagLength } from '../data.js';
import { postPhotoFromUser } from './fetch.js';
import { blockSubmitButton } from './blocking-button.js';

const form = document.querySelector('#upload-select-image');
const submitButton = form.querySelector('.img-upload__submit');
const hashtagInputField = form.querySelector('.text__hashtags');
const commentInputField = form.querySelector('.text__description');
const activeElement = document.activeElement;
const HASHTAG_REG_EXP = /^#[a-zа-яё0-9]{1,19}$/i;

const getHashtagsList = () => {
  const hashtagsList = hashtagInputField.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag.trim().length);
  return hashtagsList;
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

function onUploadFormSubmit (evt) {
  evt.preventDefault();
  const valid = pristine.validate();
  if (valid) {
    blockSubmitButton();
    postPhotoFromUser(new FormData(evt.target));
  }
}

function checkHash () {
  const hashtags = getHashtagsList();
  return hashtags.every((elem) => elem[0] === '#');
}

function checkHashtagsLength () {
  const hashtags = getHashtagsList();
  return hashtags.length <= getMaxHashtagLength();
}

function checkHashtagsUniqueness () {
  const hashtags = getHashtagsList();
  const lowerCaseHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  return !lowerCaseHashtags.some((hashtag, idx) => hashtags.indexOf(hashtag) !== idx);
}

function checkHashtag () {
  const hashtags = getHashtagsList();
  const result = hashtags.every((elem) => HASHTAG_REG_EXP.test(elem));
  return result;
}

function checkTextArea () {
  return commentInputField.value.length <= 140;
}

function checkSingleHashtagLength () {
  const hashtags = getHashtagsList();
  return hashtags.every((elem) => elem !== '#');
}

pristine.addValidator(
  hashtagInputField,
  checkHashtagsLength,
  'Нельзя указать больше пяти хэш-тегов'
);

pristine.addValidator(
  hashtagInputField,
  checkSingleHashtagLength,
  'Хеш-тег не может состоять только из одной решётки'
);

pristine.addValidator(
  hashtagInputField,
  checkHash,
  'Хэш-тег должен начинаться с символа # (решётка)'
);

pristine.addValidator(
  hashtagInputField,
  checkHashtagsUniqueness,
  'Один и тот же хэш-тег не может быть использован дважды'
);

pristine.addValidator(
  hashtagInputField,
  checkHashtag,
  'Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.'
);

pristine.addValidator(
  commentInputField,
  checkTextArea,
  'Длина сообщения не больше 140 символов'
);

form.addEventListener('submit', onUploadFormSubmit);

export { activeElement, form, pristine, submitButton } ;
