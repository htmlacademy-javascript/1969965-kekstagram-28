
//img-upload__form основная форма
// .img-upload__overlay открывает окно с редактированием, закрывает класс hidden
// повесить onchange на #upload-file, чтобы когда загрузится, открывалось окошко выше
// + body задаётся класс modal-open

// "img-upload__preview" сюда в src подставляем url загруженной картинки? вопрос: как это сделать.. как получить от пользователя картинку, куда она сама сохраняется, и как её подставить куда надо
//это будет отдельно задание

// для закрытия окна нажимаем на #upload-cancel, либо esc, либо на поле за пределами окна
// про запределы окна пока не понятно
// Элементу .img-upload__overlay возвращается класс hidden. У элемента body удаляется класс modal-open.

//
import { onUploadEscapeButtonClick, onUploadModalKeydown } from './close-modals.js';

const uploadForm = document.querySelector('#upload-select-image');
const imageUploadModal = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancelButton = imageUploadModal.querySelector('#upload-cancel');

uploadFile.addEventListener('change', (evt) => {
  imageUploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadCancelButton.addEventListener('click', onUploadEscapeButtonClick);
  document.addEventListener('keydown', onUploadModalKeydown);
});

export {imageUploadModal, uploadCancelButton};
