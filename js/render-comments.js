import { socialCommentsContainerElement, socialCommentCountElement } from './gallery.js';

const commentsLoaderElement = document.querySelector('.social__comments-loader');
const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
let pictureToGetComments;

const clearComments = () => {
  socialCommentsContainerElement.innerHTML = '';
  commentsShown = 0;
};

const getComment = (picture, i) => {
  const {avatar, name, message} = picture.comments[i];
  const commentElement = document.createElement('li');
  const commentAvatarElement = document.createElement('img');
  const commentTextElement = document.createElement('p');
  commentElement.classList.add('social__comment');
  commentAvatarElement.classList.add('social__picture');
  commentTextElement.classList.add('social__text');
  commentAvatarElement.src = avatar;
  commentAvatarElement.alt = name;
  commentAvatarElement.width = '35';
  commentAvatarElement.height = '35';
  commentTextElement.textContent = message;
  commentElement.append(commentAvatarElement, commentTextElement);
  return commentElement;
};

const renderComments = (picture) => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= picture.comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = picture.comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const commentsFragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const comment = getComment(picture, i);
    commentsFragment.append(comment);
  }
  socialCommentsContainerElement.innerHTML = '';
  socialCommentsContainerElement.append(commentsFragment);
  socialCommentCountElement.innerHTML = `${commentsShown} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
  pictureToGetComments = picture;
};

function onCommentsLoaderClick () {
  renderComments(pictureToGetComments);
}

export { renderComments, commentsShown, clearComments, onCommentsLoaderClick, commentsLoaderElement };
