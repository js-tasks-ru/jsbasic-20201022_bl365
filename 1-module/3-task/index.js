/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if (typeof name === 'string') {
    if (!!str) {
      if (str.length > 1) {
        return (str[0].toUpperCase() + str.slice(1))
      }
      return (str[0].toUpperCase())
    };
    return str;
  }
  return false;
}
