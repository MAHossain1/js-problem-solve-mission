//!Write a function fizzBuzz(n) that prints the numbers from 1 to n. But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = n => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return n;
  }
};

console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(19));
console.log(fizzBuzz(10));
