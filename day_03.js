//! find the longest name from a sentence
const findLongestWord = sentence => {
  let words = sentence.split(' ');

  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) longestWord = word;
  }

  return longestWord;
};

// console.log(findLongestWord('The quick browny fox jumps over the lazy dog'));

//! find the longest name from the array of string: ['Naim', "Arman", 'Sajjad', 'Mahabub', 'Pronob']

const findBigBrother = input => {
  let longName = '';

  for (let name of input) {
    if (name.length > longName.length) longName = name;
  }

  return longName;
};

// console.log(findBigBrother(['Naim', 'Arman', 'Sajjadun', 'Mahabub', 'Pronob']));

//! find the longest name from an array

const findLongestName = arr => {
  let longestName = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestName.length) {
      longestName = arr[i];
    }
  }

  return longestName;
};

//* console.log(
//   findLongestName(['Niyamot', 'Arman', 'Sajjadun', 'Mahabub', 'Pronob'])
// );

//! count the occurrences of each character in a string

const charCount = str => {
  let count = {};

  for (let char of str) {
    // console.log(char);
    count[char] = (count[char] || 0) + 1;
  }

  return count;
};

// console.log(charCount('Sajjaduns'));

//! Deep clone an object (original will remain same, if needed change deepCloned object)
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Test
const obj = { a: 1, b: { c: 2, d: 3 } };
const clone = deepClone(obj);
// console.log(clone); // Output: { a: 1, b: { c: 2, d: 3 } }

const original = { name: 'Arman', address: { city: 'Thakurgaon' } };
const deepCloned = JSON.parse(JSON.stringify(original));

deepCloned.address.city = 'Rangpur';

// console.log(original);
// console.log(deepCloned);

//! Flatten a nested Array

const flattenArray = arr => {
  return arr.flat(Infinity);
};

// console.log(flattenArray([1, [2, [3, [4]], 5]]));

//! Write a function to check whether two strings are anagrams of each other (i.e., contain the same characters, in any order).

const isAnagram = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
};

// console.log(isAnagram('mama', 'kaka'));

//! Find Factorial: Write a function to find the factorial of a number n using recursion.

const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// console.log(factorial(3));

const reversedString = str => str.split(' ').reverse().join(' ');
// console.log(reversedString('Abu Nayem amr sonar bangla'));

const uniqeArray = arr => [...new Set(arr)];

// console.log(
//   uniqeArray(['Niyamot', 'Arman', 'Sajjadun', 'Mahabub', 'Pronob', 'Arman'])
// );

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// console.log(mergeObjects({ name: 'amr' }, { quality: 'sonar' }));

const currentDate = () => new Date().toISOString().split('T')[0];
// const currentDate = () => new Date().toDateString();
console.log(currentDate());
