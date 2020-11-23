/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let temp, s, zp = 0;
  for (s in salaries) {
	temp = salaries[s];
	if (typeof(temp) === 'number') {
		zp += temp;
	}
  }
  return zp
}