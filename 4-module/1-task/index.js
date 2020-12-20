/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let item, friendsListElem = document.createElement("ul");

  for (f in friends) {
    item = friends[f]
    friendsListElem.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`
  }
  return friendsListElem
}