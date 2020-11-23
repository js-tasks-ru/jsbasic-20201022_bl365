/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
  if (n == 0) { return 1}
  let b = n

  while (--n) {
    b = b * n
  }
  return b;
}
