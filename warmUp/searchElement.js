/**
 * Write a function that searches for an element in an array and returns the index,
 * if the element is not present then just return -1
 */

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }

  return -1;
}

// More test cases
console.log(searchElement([1, 2, 3, 4, 5], 3)); // Expected: 2 (element in the middle)
console.log(searchElement([1, 2, 3, 4, 5], 1)); // Expected: 0 (element at the start)
console.log(searchElement([1, 2, 3, 4, 5], 5)); // Expected: 4 (element at the end)
console.log(searchElement([1, 2, 3, 4, 5], 9)); // Expected: -1 (element not present)
console.log(searchElement([], 1)); // Expected: -1 (empty array)
console.log(searchElement([7], 7)); // Expected: 0 (single element, found)
console.log(searchElement([7], 1)); // Expected: -1 (single element, not found)
console.log(searchElement([1, 2, 2, 3], 2)); // Expected: 1 (duplicates, returns first index)
console.log(searchElement([-3, -2, -1, 0], -1)); // Expected: 2 (negative numbers)
console.log(searchElement(["a", "b", "c"], "c")); // Expected: 2 (works with strings too)
