/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let i, data_available, age, gender

	for (i=1; i < table.rows.length; i++) {

		age = table.rows[i].cells[1].innerHTML
		gender = table.rows[i].cells[2].innerHTML
		data_available = table.rows[i].cells[3].getAttribute('data-available')

		if (data_available === 'true') {

			table.rows[i].classList.add('available')
		} else if (data_available === 'false') {

			table.rows[i].classList.add('unavailable')
		} else if (data_available == null) {
			table.rows[i].setAttribute('hidden','')
		}

		if (age < 18) {
			table.rows[i].style="text-decoration: line-through"
		}
		if (gender === 'm') {
			table.rows[i].classList.add('male')
		} else {
			table.rows[i].classList.add('female')
		}
	}
}
