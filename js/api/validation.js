import { getMaxHashtagLength } from '../data.js';
import { postPhotoFromUser } from './fetch.js';
import { blockSubmitButton } from './blocking-button.js';
import { HASHTAG_REG_EXP } from '../constants.js';

const formElement = document.querySelector('#upload-select-image');
const submitButtonElement = formElement.querySelector('.img-upload__submit');
const hashtagInputFieldElement = formElement.querySelector('.text__hashtags');
const commentInputFieldElement = formElement.querySelector('.text__description');

const getHashtagsList = () => {
  const hashtagsList = hashtagInputFieldElement.value.toLowerCase().trim().split(' ').filter((hashtag) => hashtag.trim().length);
  return hashtagsList;
};

const pristine = new Pristine(formElement, {
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
  return commentInputFieldElement.value.length <= 140;
}

function checkSingleHashtagLength () {
  const hashtags = getHashtagsList();
  return hashtags.every((elem) => elem !== '#');
}

pristine.addValidator(
  hashtagInputFieldElement,
  checkHashtagsLength,
  'Нельзя указать больше пяти хэш-тегов'
);

pristine.addValidator(
  hashtagInputFieldElement,
  checkSingleHashtagLength,
  'Хеш-тег не может состоять только из одной решётки'
);

pristine.addValidator(
  hashtagInputFieldElement,
  checkHash,
  'Хэш-тег должен начинаться с символа # (решётка)'
);

pristine.addValidator(
  hashtagInputFieldElement,
  checkHashtagsUniqueness,
  'Один и тот же хэш-тег не может быть использован дважды'
);

pristine.addValidator(
  hashtagInputFieldElement,
  checkHashtag,
  'Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.'
);

pristine.addValidator(
  commentInputFieldElement,
  checkTextArea,
  'Длина сообщения не больше 140 символов'
);

formElement.addEventListener('submit', onUploadFormSubmit);

export { formElement, pristine, submitButtonElement, commentInputFieldElement } ;
