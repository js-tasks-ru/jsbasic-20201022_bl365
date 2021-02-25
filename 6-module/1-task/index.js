/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },{
 *          name: 'Petr',
 *          age: 27,
 *          salary: '1200',
 *          city: 'Petropavlovsk'
 *      },
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    let listTHTickets = {name: 'Имя', age: 'Возраст', salary: 'Зарплата', city: 'Город', empty: ''}
    let tbl = document.createElement('table')

    for (let i in rows) {
      tbl.insertRow()
      for (let j in rows[i]) {
        tbl.rows[i].insertCell().textContent = rows[i][j]
      }
      tbl.rows[i].insertCell().innerHTML = '<button>X</button>'
    }

    tbl.createTHead().insertRow(0)
    for (let ticket in listTHTickets) {
      let th = document.createElement('th')
      th.innerText = listTHTickets[ticket]
      tbl.tHead.rows[0].appendChild(th)
    }

    this.elem = tbl
    this.elem.addEventListener('click', (event) => this.onClick(event))
  };

  onClick(event) {
    if(event.target.tagName != 'BUTTON') {
      return;
    }

    let tr = event.target.closest('tr')
    tr.remove()
  }
}
