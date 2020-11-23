/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let shortStr = '',
	stSlice = 0,
	endSlice = 0,
	indOf = 0;

	while  (indOf !== -1) {
		indOf = str.indexOf('-', stSlice)

		if (indOf === -1) {
			endSlice = str.length
		} else {
			endSlice = indOf
		}

		if (stSlice===0) {
			shortStr += str.slice(stSlice, endSlice)
		} else {

			shortStr += str[stSlice].toUpperCase()
		+ str.slice(stSlice+1, endSlice)
		}

		stSlice = endSlice +1
	}

	return shortStr;
}
