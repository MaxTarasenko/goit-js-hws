console.log('task-3.js');
alert('task-3.js, Смотрим в консоль');

const findLongestWord = function (string) {
  let maxLength = 0;
  let foundWord;
  for (const word of string.split(' ')) {
    if (maxLength < word.length) {
      maxLength = word.length;
      foundWord = word;
      continue;
    }
  }
  return foundWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
