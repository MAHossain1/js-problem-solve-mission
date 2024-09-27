//!Write a function hasUniqueChars(str) that takes a string as input and returns true if the string has all unique characters (no character repeats), and false if any character is repeated.

/**
 * Constraints:
1. The function should be case-sensitive, so 'a' and 'A' are considered different characters.
2. You should not use any additional data structures like sets or arrays.

*/

const hasUniqueChars = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(hasUniqueChars('nayeem'));

//! Write a function chunkArray(arr, size) that splits an array (arr) into smaller arrays (or "chunks") of length size. If the array can't be split evenly, the final chunk should contain the remaining elements.

const chunkArray = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = [];
    for (let j = i; j < i + size && j < arr.length; j++) {
      chunk.push(arr[j]);
    }
    result.push(chunk);
  }
  return result;
};

// console.log(chunkArray([1, 3, 2, 4, 5, 7, 9], 2));

const chunkedArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

console.log(chunkedArray([1, 3, 2, 4, 5, 7, 9], 3));
