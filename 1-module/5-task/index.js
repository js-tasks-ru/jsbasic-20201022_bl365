/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
  if (str.length > maxlength) { //заменяет конец str на "…", +длина = maxlength
  let shortStr = str.slice (0, maxlength-1) + '…';
    return shortStr;
  } else {
    return str;
  }
}
