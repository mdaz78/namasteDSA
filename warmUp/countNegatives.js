/**
 * Write a function that returns the numbers of negative numbers in an array
 */

const countNegatives = (arr) => {
  let countOfNegativeNumbers = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countOfNegativeNumbers += 1;
    }
  }

  return countOfNegativeNumbers;
};

// More test cases
console.log(countNegatives([-1, -2, -3, -4, -5])); // Expected: 5 (all negative)
console.log(countNegatives([1, 2, 3, 4, 5])); // Expected: 0 (no negatives)
console.log(countNegatives([-1, 2, -3, 4, -5])); // Expected: 3 (mixed positive and negative)
console.log(countNegatives([])); // Expected: 0 (empty array)
console.log(countNegatives([-7])); // Expected: 1 (single negative element)
console.log(countNegatives([7])); // Expected: 0 (single positive element)
console.log(countNegatives([0])); // Expected: 0 (zero)
console.log(countNegatives([0, -1, -2])); // Expected: 2 (with zero)
console.log(countNegatives([-100, -1, 1, 100])); // Expected: 2 (wide range)
