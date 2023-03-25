import { getMaxHashtagLength } from './data.js';
import { showSuccessMessage, showErrorMessage } from './error-success-message.js';

const uploadForm = document.querySelector('#upload-select-image');
const hashtagInputField = uploadForm.querySelector('.text__hashtags');
const commentInputField = uploadForm.querySelector('.text__description');
const activeElement = document.activeElement;
const HASHTAG_REG_EXP = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(uploadForm, {
  classTo: 'form__item',
  errorTextParent: 'form__item',
  errorTextClass: 'form__error'
});

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
  'text-text-text'
);

uploadForm.addEventListener('submit', onUploadFormSubmit);

export { hashtagInputField, commentInputField, activeElement, uploadForm, pristine} ;

/*

Здесь я сделала простую проверку с оф сайта пристин, проверка текстового поля на то, чтобы первая буква была большой. При этом все проверки с хештегами и т.п. я убирала. В итоге, сделав всё по инструкции с оф сайта, я получила такой результат, что код с проверкой работает, валидная проверка выводила в консоль сообщение true, невалидная false, но сообщение не появлялось

*/
// pristine.addValidator(

//   commentInputField,
//   (value) => {
//     if (value.length && value[0] === value[0].toUpperCase()){
//       return true;
//     }
//     return false;
//   }, 'The first character must be capitalized', 2, false
// );

// uploadForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const valid = pristine.validate();
//   console.log(valid);
// });

// console.log(prist);
