import { socialCommentsContainer, socialCommentCount } from './gallery.js';

const commentsLoader = document.querySelector('.social__comments-loader');
const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
let pictureToGetComments;

const clearComments = () => {
  socialCommentsContainer.innerHTML = '';
  commentsShown = 0;
};

const getComment = (picture, i) => {
  const {avatar, name, message} = picture.comments[i];
  const comment = document.createElement('li');
  const commentAvatar = document.createElement('img');
  const commentText = document.createElement('p');
  comment.classList.add('social__comment');
  commentAvatar.classList.add('social__picture');
  commentText.classList.add('social__text');
  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentAvatar.width = '35';
  commentAvatar.height = '35';
  commentText.textContent = message;
  comment.append(commentAvatar, commentText);
  return comment;
};

const renderComments = (picture) => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= picture.comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = picture.comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const commentsFragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const comment = getComment(picture, i);
    commentsFragment.append(comment);
  }
  socialCommentsContainer.innerHTML = '';
  socialCommentsContainer.append(commentsFragment);
  socialCommentCount.innerHTML = `${commentsShown} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
  pictureToGetComments = picture;
};

function onCommentsLoaderClick () {
  renderComments(pictureToGetComments);
}

export {renderComments, commentsShown, clearComments, onCommentsLoaderClick, commentsLoader};
