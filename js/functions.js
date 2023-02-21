// Первая функция

const checkStringLength = (string, length) => string.length <= length;

checkStringLength('Hello, world', 12);
checkStringLength('проверяемая строка', 20);
checkStringLength('', 0);

// Вторая функция

const isPalindrome = (string) => {
  const newString = string.toLowerCase().replaceAll(' ', '');
  return newString === Array.from(string).reverse().join('');
};

isPalindrome('Лёша на полке клопа нашёл ');
isPalindrome('А роЗА упала нА лапу аЗора');
isPalindrome('Alla');

// Третья функция

const getNumberFromString = (phrase) => {

  if (!isNaN(phrase)) {
    if (!Number.isInteger(phrase)) {
      return Number(String(phrase).replaceAll('.', ''));
    }
    return Math.abs(Number(phrase));
  } else if (Array.from(phrase.replaceAll('.', '')).every((element) => isNaN(element))) {
    return NaN;
  }

  return Number(Array.from(phrase.replaceAll('.', '')).filter((element) => Number(element) >= 0).join(''));
};

getNumberFromString(1.5);
getNumberFromString('2023');
getNumberFromString(-1);

// Четвёртая функция

/*
Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

// Добавочный символ использован один раз
имя_функции('1', 2, '0');      // Результат: строка '01'

// Добавочный символ использован три раза
имя_функции('1', 4, '0');      // Результат: строка '0001'

// Добавочные символы обрезаны с конца
имя_функции('q', 4, 'werty');  // Результат: строка 'werq'

// Добавочные символы использованы полтора раза
имя_функции('q', 4, 'we');     // Результат: строка 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
имя_функции('qwerty', 4, '0'); // Результат: строка 'qwerty'
Попробуйте не использовать при этом функцию padStart() =)
*/
