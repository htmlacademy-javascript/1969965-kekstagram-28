import { getPictures } from './create-pictures.js';
import { thumbnailsList } from './gallery.js';

const makeThumbnails = () => {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector('#picture').content;
  const photosList = getPictures();
  photosList.forEach((photo)=> {
    const thumbnail = template.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = photo.url;
    thumbnail.querySelector('.picture__img').alt = photo.description;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    thumbnail.querySelector('.picture').dataset.thumbnailId = photo.id;
    fragment.appendChild(thumbnail);
  });

  thumbnailsList.appendChild(fragment);
  return photosList;
};

export { makeThumbnails };

