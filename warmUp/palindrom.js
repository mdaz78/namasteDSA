/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * Example 1:
 *   Input: x = 121
 *   Output: true
 *   Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 *   Input: x = -121
 *   Output: false
 *   Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
 *                Therefore it is not a palindrome.
 *
 * Example 3:
 *   Input: x = 10
 *   Output: false
 *   Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Constraints:
 *   -2^31 <= x <= 2^31 - 1
 *
 * Follow up: Could you solve it without converting the integer to a string?
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = String(x);
  const reverse = str.split("").reverse().join("");

  return str === reverse;
};

const isPalindromeWithoutStringConversion = (x) => {
  let toTest = x;
  let reverse = 0;

  while (toTest > 0) {
    const remainder = toTest % 10;
    reverse = 10 * reverse + remainder;
    toTest = Math.floor(toTest / 10);
  }

  return reverse === x;
};

const isPalindromeEfficientVersion = (x) => {
  let toTest = x;
  if (toTest < 0 || (toTest % 10 === 0 && toTest !== 0)) return false;

  let reversedHalf = 0;

  while (toTest > reversedHalf) {
    reversedHalf = 10 * reversedHalf + (toTest % 10);
    toTest = Math.floor(toTest / 10);
  }

  return toTest === reversedHalf || toTest === Math.floor(reversedHalf / 10);
};

console.log(isPalindromeWithoutStringConversion(121));
