/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // ваш код...
  let temp, res = [];
	for (let i = 0; i < arr.length; i++) {
		temp = arr[i];
		if (temp >= a && temp <= b ) {
			res.push(temp);
		}
	}
	return res;
}
