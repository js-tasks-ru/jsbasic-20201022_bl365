/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш код...
  let user = [];
  for (let i = 0; i < users.length; i++) {
		user.push(users[i].name)
	}
	return user;
}
