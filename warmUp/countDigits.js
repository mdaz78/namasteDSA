// Write a function that returns the count of digits in a number
function countDigits(n) {
  let digits = 0;

  n = Math.abs(n);

  while (n > 0) {
    n = Math.floor(n / 10);
    digits += 1;
  }

  return digits;
}

// More test cases
console.log(countDigits(0)); // Expected: 0 (edge case: zero has no digits in this logic)
console.log(countDigits(5)); // Expected: 1 (single digit)
console.log(countDigits(10)); // Expected: 2
console.log(countDigits(999)); // Expected: 3
console.log(countDigits(1000)); // Expected: 4
console.log(countDigits(99999)); // Expected: 5
console.log(countDigits(1000000)); // Expected: 7

// -----
