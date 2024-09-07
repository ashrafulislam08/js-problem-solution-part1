// Write a function to count the number of vowels in a string.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (vowel of vowels) {
    for (strv of str) {
      if (vowel === strv) {
        count++;
      }
    }
  }
  console.log(count);
}
countVowels("Siam Hawlader");
