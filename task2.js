/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

 *  sample-input: numbers = [5,6,11,12,98, 5]
 *  find: 5

output: 2
 */

function findNumber(array, find) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (find === array[i]) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const find = 5;
console.log(findNumber(numbers, find));
