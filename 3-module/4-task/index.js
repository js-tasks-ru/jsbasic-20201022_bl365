/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let new_users = '', temp
  for (u in users) {
	temp = users[u]
    if (temp.age <= age) {
      new_users += `\n${temp.name}, ${temp.balance}`
    }
  }
  return new_users.slice(1)
}

