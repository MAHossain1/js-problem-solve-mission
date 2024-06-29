// Problem: Write a function that takes an array of arrays and flattens it into a single array.

const arrOfArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

const flattenArray = arr =>
  arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
const result1 = flattenArray(arrOfArray);
// console.log(result1);

const arrOfArray1 = [
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f'],
  ['g', 'h'],
];

const intoOneArr = arr =>
  arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
// console.log(intoOneArr(arrOfArray1));

const arrToObject = arr => Object.fromEntries(arr);
// console.log(arrToObject(arrOfArray));

// Problem: Write a function that takes an array and returns an array of only the unique elements.

const randomArray = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'b',
  'c',
  'd',
  'i',
  'k',
  'l',
  'k',
  'l',
];

const uniqueElementArray = arr =>
  arr.filter((item, index) => arr.indexOf(item) === index);

const uniqueElementArray1 = arr => [...new Set(arr)];
// console.log(uniqueElementArray(randomArray));

// console.log(uniqueElementArray(randomArray));

// Problem: Write a function that takes an array of objects and a property name and returns an object grouping the items by that property.
