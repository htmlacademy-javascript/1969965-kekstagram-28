import { socialCommentsContainer } from './gallery.js';

const renderComments = (picture) => {
  socialCommentsContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < picture.comments.length; i++) {
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
    fragment.append(comment);
  }
  socialCommentsContainer.append(fragment);
};

export {renderComments};
