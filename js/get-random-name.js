import { getRandomArrayElement } from './get-random-array-element.js';

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

const getRandomName = () => `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`;

export { getRandomName};
