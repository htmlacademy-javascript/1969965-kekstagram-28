const NAMES = [
  'Беллатрисса',
  'Габриэль Гарсиа',
  'Бендиньсьон',
  'Фёдор Михайлович',
  'Марфа',
  'Агнесса Павловна' ,
  'Джек',
  'Северус',
  'Альбус',
  'Гермиона',
  'Фродо',
  'Анна'
];

const SURNAMES = [
  'Лестрейндж',
  'Маркес',
  'Альварадо',
  'Достоевски',
  'Оруэлл',
  'Хаксли',
  'Д\'Артаньян',
  'Снейп',
  'Дамблдор',
  'Грейнджер',
  'Бэггинс',
  'Карлсон'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTO_DESCRIPTIONS = [
  'описание фото',
  'Городской пляж',
  'Указатель на пляж',
  'Вид на море со скал',
  'Отдыхаю',
  'Зашёл пообедать к бабуле',
  'Моя ласточка',
  'Просто красиво',
  'Морс полезен! Пейте морс!',
  'Зашли на пляжик, а тут такое',
  'Спасите ваши тапки от собаки',
  'По дороге на дачу',
  'Эта машина только для города',
  'Очередной модный салат',
  'Мой хозяин идиот',
  'И тёплые полы не нужны!',
  'Многотыщ километров над землёй',
  'Я в школьном оркестре (за барабанами)',
  'Ласточка деда',
  'С такими тапками теперь точно не запнёшься об кота',
  'Посадил на даче, жду урожай',
  'Якобы мой ЗОЖ-завтрак',
  'Закат.',
  'Мой питомец в Тае',
  'А это мы с друзьями на концерте Алегровой',
  'Пришлось идти пешком...'
];

const NUMBER_OF_COMMENTS = 2;
const NUMBER_OF_PICTURES = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createSerialNumberGenerator = () => {
  let lastGenerateId = 0;
  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

const generateCommentId = createSerialNumberGenerator();
const generatePhotoDescription = createSerialNumberGenerator();


const createComment = () => (
  {
    id: generateCommentId(),
    avatar: `../img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: `${getRandomArrayElement(MESSAGES)}`,
    name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`
  }
);

const createPicture = (index) => (
  {
    id: index,
    url: `../photos/${index}.jpg`,
    description: PHOTO_DESCRIPTIONS[generatePhotoDescription()],
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: NUMBER_OF_COMMENTS}, createComment)
  }
);

const getPictures = () =>
  Array.from({length: NUMBER_OF_PICTURES}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();

