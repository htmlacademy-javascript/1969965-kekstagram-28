// задача поменять масштаб картинки
//
//.scale__control--smaller и .scale__control--bigger
// должно изменяться значение поля .scale__control--value;
// ищем эти элементы

// Значение должно изменяться с шагом в 25. Например, если значение поля установлено в 50%, после нажатия на «+», значение должно стать равным 75%. Максимальное значение — 100%, минимальное — 25%. Значение по умолчанию — 100%;

// При изменении значения поля .scale__control--value изображению внутри .img-upload__preview должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб. Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75).
import { imageUploadModal, uploadedImage } from './show-upload-modal.js';
import { getScaleStep } from './data.js';

const controlSmaller = imageUploadModal.querySelector('.scale__control--smaller ');
const controlBigger = imageUploadModal.querySelector('.scale__control--bigger');
const scaleValueField = imageUploadModal.querySelector('.scale__control--value');

const changeScaleValue = () => {
  controlSmaller.addEventListener('click', onControlSmallerClick);
  controlBigger.addEventListener('click', onControlBiggerClick);
};

function onControlSmallerClick (evt) {
  scaling(evt);
}

function onControlBiggerClick (evt) {
  scaling(evt);
}

function scaling(evt) {
  let currentValue = Number(scaleValueField.value.slice(0, -1));

  if (evt.target === controlSmaller) {
    if (currentValue > getScaleStep()) {
      currentValue -= getScaleStep();
      scaleValueField.value = `${currentValue}%`;
    }
  }

  if (evt.target === controlBigger) {
    if (currentValue <= 100 - getScaleStep()) {
      currentValue += getScaleStep();
      scaleValueField.value = `${currentValue}%`;
    }
  }
  uploadedImage.style.transform = `scale(${currentValue / 100})`;
}

changeScaleValue();

export {changeScaleValue};
