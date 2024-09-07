// Write a function to find the longest word in a given string.

//sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(sentence) {
  let longestWord = "";
  const sentenceArr = sentence.split(" ");
  for (const word of sentenceArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const sentence = "I am learning Programming to become a programmer";
console.log(findLongestWord(sentence));
