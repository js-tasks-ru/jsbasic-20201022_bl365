/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let temp,
  short = [];
  str = str.split('-')

  for (s in str) {
    temp = str[s]
    if (s == 0) {
      short.push(temp)
    } else if (temp !== '') {
      short.push(temp[0].toUpperCase())
      short.push(temp.slice(1))
    }
  }
  return short.join('')
}
