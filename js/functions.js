// Первая функция

const checkStringLength = (string, length) => string.length === length;

checkStringLength('Hello, world', 12);
checkStringLength('проверяемая строка', 20);
checkStringLength('', 0);

// Вторая функция

const isPalindrome = function(string) {
  const chars = Array.from(string.toLowerCase().split(' ').join(''));
  const reversedChars = [];
  chars.forEach((item) => reversedChars.unshift(item));
  reversedChars.every((element, index) => element === chars[index]);
};

isPalindrome('Лёша на полке клопа нашёл ');
isPalindrome('А роЗА упала нА лапу аЗора');
isPalindrome('Alla');

// Третья функция

const getNumberFromString = function(phrase) {

  if (!isNaN(phrase)) {
    if (!Number.isInteger(phrase)) {
      return Number(String(phrase).split('.').join(''));
    }
    return Math.abs(Number(phrase));
  } else if (Array.from(phrase.split(' ').join('')).every((element) => isNaN(element))) {
    return NaN;
  }

  return Number(Array.from(phrase.split(' ').join('')).filter((element) => Number(element) >= 0).join(''));
};

getNumberFromString(1.5);
getNumberFromString('2023');
getNumberFromString(-1);
