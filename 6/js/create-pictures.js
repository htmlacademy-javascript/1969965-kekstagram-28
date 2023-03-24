import { getRandomInteger } from './helpers/get-random-integer.js';
import { getRandomName } from './helpers/get-random-name.js';
import { getRandomMessage } from './helpers/get-random-message.js';
import { getPhotoDescription } from './helpers/get-photo-description.js';
import { getNumberOfComments, getNumberOfPictures } from './data.js';
import { getCommentId } from './helpers/get-comment-id.js';

const createComment = () => (
  {
    id: getCommentId(),
    avatar: `./img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomMessage(),
    name: getRandomName()
  }
);

const createPicture = (index) => (
  {
    id: index,
    url: `./photos/${index}.jpg`,
    description: getPhotoDescription(),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getNumberOfComments()}, createComment)
  }
);

const getPictures = () =>
  Array.from({length: getNumberOfPictures()}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export {getPictures};
