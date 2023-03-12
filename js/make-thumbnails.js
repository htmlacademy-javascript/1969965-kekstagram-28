import { getPictures } from './create-pictures.js';

const makeThumbnails = () => {
  const fragment = document.createDocumentFragment();
  const thumbnailsList = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content;
  const photosList = getPictures();

  photosList.forEach((photo)=> {
    const thumbnail = template.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = photo.url;
    thumbnail.querySelector('.picture__img').alt = photo.description;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;

    fragment.appendChild(thumbnail);
  });

  thumbnailsList.appendChild(fragment);
};

export { makeThumbnails };

