const makeThumbnails = (photos, container) => {
  container.querySelectorAll('a').forEach((element) => element.remove());

  const fragment = document.createDocumentFragment();
  const templateElement = document.querySelector('#picture').content;
  photos.forEach((photo)=> {
    const thumbnailElement = templateElement.cloneNode(true);
    thumbnailElement.querySelector('.picture__img').src = photo.url;
    thumbnailElement.querySelector('.picture__img').alt = photo.description;
    thumbnailElement.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnailElement.querySelector('.picture__likes').textContent = photo.likes;
    thumbnailElement.querySelector('.picture').dataset.thumbnailId = photo.id;
    fragment.appendChild(thumbnailElement);
  });

  container.appendChild(fragment);
  return photos;
};

export { makeThumbnails };

