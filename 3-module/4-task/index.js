/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let new_users = '', temp
  for (u in users) {
	//temp = users[u]
    if (u.age <= age) {
      new_users += '/n' + ` ${u.name}, ${u.balance}`
    }
  }
  return new_users
}
