/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  let reg1 = new RegExp('1xBet', 'i');
  let reg2 = new RegExp('XXX', 'i');
  if (reg1.test(str) || reg2.test(str)) {
    return true;
  } else {
    return false;
  };
}
