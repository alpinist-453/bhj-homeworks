const arrBookControls = Array.from(document.querySelectorAll('.font-size'))
const book = document.querySelector('.book__controls').parentElement

for (let i = 0; i < arrBookControls.length; i++) {
	const elFontSize = arrBookControls[i];

	elFontSize.onclick = function (event) {
		event.preventDefault();
		const indexActiv = arrBookControls.findIndex(el => Array.from(el.classList).includes('font-size_active'));
		arrBookControls[indexActiv].classList.remove('font-size_active')
		elFontSize.classList.add('font-size_active')

		const indexActivTwo = arrBookControls.findIndex(el => Array.from(el.classList).includes('font-size_active'));

		book.classList.remove('book_fs-small', 'book_fs-big')
		book.classList.toggle('book')

		if (indexActivTwo === 0) {
			book.classList.add('book_fs-small')
		} if (indexActivTwo === 2) {
			book.classList.add('book_fs-big')
		}
		book.classList.toggle('book')
	}
}