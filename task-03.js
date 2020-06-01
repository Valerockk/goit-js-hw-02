const findLongestWord = function (string) {
  const allWords = string.split(" ");

  let longestWord = allWords[0].split("");

  for (let i = 1; i < allWords.length; i += 1) {
    let word = allWords[i].split("");

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  const result = longestWord.join("");
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
