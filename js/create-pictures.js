import { getRandomInteger } from './get-random-integer.js';
import { getRandomName } from './get-random-name.js';
import { getRandomMessage } from './get-random-message.js';
import { getPhotoDescription, PHOTO_DESCRIPTIONS } from './get-photo-description.js';
import { getNumberOfComments, getNumberOfPictures } from './data.js';
import { generateCommentId } from './generate-comment-id.js';

const createComment = () => (
  {
    id: generateCommentId(),
    avatar: `../img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomMessage(),
    name: getRandomName()
  }
);

const createPicture = (index) => (
  {
    id: index,
    url: `../photos/${index}.jpg`,
    description: PHOTO_DESCRIPTIONS[getPhotoDescription()], // вот здесь не получилось через импорт
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getNumberOfComments()}, createComment)
  }
);

const getPictures = () =>
  Array.from({length: getNumberOfPictures()}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export {getPictures};
