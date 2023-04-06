
const makeThumbnails = (photos, container) => {
  container.querySelectorAll('a').forEach((element) => element.remove());

  const fragment = document.createDocumentFragment();
  const template = document.querySelector('#picture').content;
  photos.forEach((photo)=> {
    const thumbnail = template.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = photo.url;
    thumbnail.querySelector('.picture__img').alt = photo.description;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    thumbnail.querySelector('.picture').dataset.thumbnailId = photo.id;
    fragment.appendChild(thumbnail);
  });

  container.appendChild(fragment);
  return photos;
};

export { makeThumbnails };

