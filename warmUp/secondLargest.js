/**
 * Find the second largest number in an array
 */

const secondLargest = (arr) => {
  let largestNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber) {
      secondLargestNumber = arr[i];
    }
  }

  return secondLargestNumber;
};

// Test cases - prints true if test passes, false if test fails
console.log(secondLargest([1, 2, 3, 4, 5]) === 4);
console.log(secondLargest([10, 20, 5, 15]) === 15);
console.log(secondLargest([-5, -2, -10, -1]) === -2);
console.log(secondLargest([100, 50]) === 50);
console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6]) === 6);
console.log(secondLargest([0, -5, 10, 3]) === 3);
console.log(secondLargest([42, 42, 42, 42]) === 42);
console.log(secondLargest([-100, -50, -75]) === -75);
console.log(secondLargest([5, 3, 8, 3, 2]) === 5);
console.log(secondLargest([1, 1, 1, 2]) === 1);

// Corner cases
console.log(secondLargest([]) === -Infinity); // empty array
console.log(secondLargest([7]) === -Infinity); // single element
console.log(secondLargest([2, 2]) === 2); // two equal elements
console.log(secondLargest([-Infinity, 5]) === -Infinity); // -Infinity as an actual element
console.log(secondLargest([0, 0, 0]) === 0); // all zeros
