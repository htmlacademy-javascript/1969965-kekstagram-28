const thumbnailsList = document.querySelector('.pictures');
const bigPictureModal = document.querySelector('.big-picture');
const pictureCancelButton = bigPictureModal.querySelector('#picture-cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const bigPicture = document.querySelector('.big-picture__img img');
const likesCount = bigPictureModal.querySelector('.likes-count');
const commentsCount = bigPictureModal.querySelector('.comments-count');
const socialCaption = bigPictureModal.querySelector('.social__caption');

export { thumbnailsList, bigPictureModal, pictureCancelButton, socialCommentCount, commentsLoader, bigPicture, likesCount, commentsCount, socialCaption };

