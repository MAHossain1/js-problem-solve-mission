//! Problem: Given an array of integers and a target sum, find all unique pairs in the array that sum up to the target.

//! Problem: Given an array of integers, find the second largest element.

const findSecondLargest = arr => {
  if (arr.length < 2) {
    return 'Please make the array with at least two elements.';
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; // update secondLargest
      largest = arr[i]; // update largest
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]; // Update second largest if it's less than largest and not equal to largest
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
};

const values = [5, 5, 3, 7, 7];

// console.log(findSecondLargest(values));

//!Problem: Given a sorted array, remove duplicates in place such that each element appears only once and return the new length of the array.

const removeDuplicates = nums => {
  if (nums.length === 0) return 0;

  let i = 0; // i will track the unique elements

  // Start from the second element and iterate through the array
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++; // Move i to the next position for unique elements
      nums[i] = nums[j]; // Update the array with the new unique element
    }
  }

  // i + 1 represents the length of the array with unique elements
  return i + 1;
};

// Example usage:
const nums = [1, 1, 2, 3, 3, 4, 5, 5];
const newLength = removeDuplicates(nums);
console.log('New length:', newLength); // Output: New length: 5
console.log('Modified array:', nums.slice(0, newLength)); // Output: [1, 2, 3, 4, 5]
