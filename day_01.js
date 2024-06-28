/* 
1. Remove Duplicates from an Array
2. Merge and Sort Two Arrays
Problem: Write a function that takes two arrays, merges them, and returns a sorted array.
3. Find Intersection of Two Arrays
Problem: Write a function that takes two arrays and returns a new array with the common elements.
4. Array to Object
Problem: Write a function that takes an array of arrays and converts it to an object where the first element is the key and the second is the value. 
*/

const missionJsProblemSolve = [1, 32, 2, 4, 5];

// Problem: Write a function that takes an array of numbers and returns the sum of all numbers.
const sumArray = missionJsProblemSolve.reduce((sum, item) => {
  return sum + item;
}, 0);

// console.log(sumArray);

// Problem: Write a function that takes an array of numbers and returns the maximum number.

const arr = [1, 32, 2, 64, 5];

const maxNumber = randomArray =>
  randomArray.reduce((max, item) => (item > max ? item : max), randomArray[0]);

// console.log(maxNumber(arr));

const removeDuplicates = arr => [...new Set(arr)];

// console.log(removeDuplicates([1, 2, 2, 3, 2, 3, 4, 4, 5, 9, 9]));

const mergeArray = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
const uniqueMergeArray = arr => [...new Set(arr)];

// const mergedArray = mergeArray(missionJsProblemSolve, arr);

// console.log(uniqueMergeArray(mergedArray));
// console.log(
//   uniqueMergeArray(console.log(mergeArray(missionJsProblemSolve, arr)))
// );

// [...new Set(arr)], [...arr1, ...arr2],

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));
const commonElements = intersection(array1, array2);
// console.log(commonElements);
// console.log(intersection(missionJsProblemSolve, arr));
// console.log(missionJsProblemSolve.includes(32));
const evenNumber = array2.filter(n => n % 2 === 0);
const oddNumber = array2.filter(n => n % 2 === 1);
const doubleNumber = array1.map(n => n * 2);

// console.log(evenNumber);
// console.log(oddNumber);
// console.log(doubleNumber);

// write a function that takes a array of array and converts it to an object where the first element is the key and the second is the value;

const serialArr = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
];

const arrayToObject = arr => Object.fromEntries(arr);
const convertedObject = arrayToObject(serialArr);
console.log(convertedObject);
const objectToArray = obj => Object.entries(obj);

const convertedArray = objectToArray(convertedObject);
console.log(convertedArray);

const target = { arman: 1 };
const source = { asha: 2 };

const result = Object.assign(target, source);
console.log(result);
