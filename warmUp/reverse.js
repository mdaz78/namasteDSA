/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer
 * range [-2^31, 2^31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers
 * (signed or unsigned).
 *
 * Example 1:
 *   Input: x = 123
 *   Output: 321
 *
 * Example 2:
 *   Input: x = -123
 *   Output: -321
 *
 * Example 3:
 *   Input: x = 120
 *   Output: 21
 *
 * Constraints:
 *   -2^31 <= x <= 2^31 - 1
 */

var reverse = function (x) {
  let toReverse = Math.abs(x);
  let reversed = 0;

  while (toReverse > 0) {
    reversed = 10 * reversed + (toReverse % 10);
    toReverse = Math.floor(toReverse / 10);
  }

  const limit = Math.pow(2, 31);

  if (reversed < -limit || reversed > limit) return 0;

  return x < 0 ? reversed * -1 : reversed;
};

console.log(reverse(-123));
console.log(reverse(123));

console.log(reverse(1534236469));
