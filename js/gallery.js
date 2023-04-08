const thumbnailsListElement = document.querySelector('.pictures');
const bigPictureModalElement = document.querySelector('.big-picture');
const pictureCancelButtonElement = bigPictureModalElement.querySelector('#picture-cancel');
const socialCommentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const bigPictureElement = document.querySelector('.big-picture__img img');
const likesCountElement = bigPictureModalElement.querySelector('.likes-count');
const commentsCountElement = bigPictureModalElement.querySelector('.comments-count');
const socialCaptionElement = bigPictureModalElement.querySelector('.social__caption');
const socialCommentsContainerElement = bigPictureModalElement.querySelector('.social__comments');

export { thumbnailsListElement, bigPictureModalElement, pictureCancelButtonElement, socialCommentCountElement, commentsLoaderElement, bigPictureElement, likesCountElement, commentsCountElement, socialCaptionElement, socialCommentsContainerElement };

