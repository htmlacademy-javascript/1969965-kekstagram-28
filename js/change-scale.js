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
