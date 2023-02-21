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

const padString = (string, minLength, padChar) => {

  if (string.length < minLength) {
    const lengthNeeded = minLength - string.length;
    if (padChar.length > lengthNeeded) {
      return padChar.slice(0, lengthNeeded) + string;
    } else if (padChar.length === lengthNeeded) {
      return padChar + string;
    } else if (padChar.length < lengthNeeded) {
      const charsDivision = lengthNeeded / padChar.length;
      let result = padChar.repeat(charsDivision) + string;
      if (lengthNeeded % padChar.length !== 0) {
        result = padChar.repeat(Math.floor(charsDivision)) + string;
        const charsToAdd = lengthNeeded - result.length;
        return padChar.slice(0, charsToAdd - 1) + result;
      }
      return result;
    }
  }
  return string;
};

padString('q', 4, 'we');

