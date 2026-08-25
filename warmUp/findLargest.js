/**
 * Write a function that returns the largest number in an array
 */

const findLargest = (arr) => {
  if (arr.length === 0) {
    return -1;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let largestNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  return largestNum;
};

const findLargestReduce = (arr) => {
  return arr.reduce(
    (largestNum, currentElement) => (currentElement > largestNum ? currentElement : largestNum),
    -Infinity,
  );
};

// Test cases - prints true if test passes, false if test fails
console.log(findLargest([1, 2, 3, 4, 5]) === 5);
console.log(findLargest([10, 20, 5, 15]) === 20);
console.log(findLargest([-5, -2, -10, -1]) === -1);
console.log(findLargest([100]) === 100);
console.log(findLargest([3, 1, 4, 1, 5, 9, 2, 6]) === 9);
console.log(findLargest([0, -5, 10, 3]) === 10);
console.log(findLargest([42, 42, 42, 42]) === 42);
console.log(findLargest([-100, -50, -75]) === -50);

// Test cases - prints true if test passes, false if test fails
console.log(findLargestReduce([1, 2, 3, 4, 5]) === 5);
console.log(findLargestReduce([10, 20, 5, 15]) === 20);
console.log(findLargestReduce([-5, -2, -10, -1]) === -1);
console.log(findLargestReduce([100]) === 100);
console.log(findLargestReduce([3, 1, 4, 1, 5, 9, 2, 6]) === 9);
console.log(findLargestReduce([0, -5, 10, 3]) === 10);
console.log(findLargestReduce([42, 42, 42, 42]) === 42);
console.log(findLargestReduce([-100, -50, -75]) === -50);
