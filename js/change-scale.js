import { imageUploadModalElement, uploadedImageElement } from './show-upload-modal.js';
import { getScaleStep } from './data.js';

const controlSmallerElement = imageUploadModalElement.querySelector('.scale__control--smaller ');
const controlBiggerElement = imageUploadModalElement.querySelector('.scale__control--bigger');
const scaleValueFieldElement = imageUploadModalElement.querySelector('.scale__control--value');

const changeScaleValue = () => {
  controlSmallerElement.addEventListener('click', onControlSmallerClick);
  controlBiggerElement.addEventListener('click', onControlBiggerClick);
};

function onControlSmallerClick (evt) {
  scaleImage(evt);
}

function onControlBiggerClick (evt) {
  scaleImage(evt);
}

function scaleImage(evt) {
  let currentValue = Number(scaleValueFieldElement.value.slice(0, -1));

  if (evt.target === controlSmallerElement) {
    if (currentValue > getScaleStep()) {
      currentValue -= getScaleStep();
      scaleValueFieldElement.value = `${currentValue}%`;
    }
  }

  if (evt.target === controlBiggerElement) {
    if (currentValue <= 100 - getScaleStep()) {
      currentValue += getScaleStep();
      scaleValueFieldElement.value = `${currentValue}%`;
    }
  }
  uploadedImageElement.style.transform = `scale(${currentValue / 100})`;
}

const resetScale = () => {
  scaleValueFieldElement.value = '100%';
  uploadedImageElement.style.transform = 'scale(1)';
};

changeScaleValue();

export {changeScaleValue, scaleValueFieldElement, resetScale};
