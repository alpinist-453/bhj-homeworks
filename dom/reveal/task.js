let arrReveal = Array.from(document.querySelectorAll('.reveal'))

function isVisible(el) {
	for (let i = 0; i < el.length; i++) {
		const element = el[i];
		const { top, bottom } = el[i].getBoundingClientRect()

		if (bottom < 0) {
			el[i].classList.remove('reveal_active')
		}
		else if (top > window.innerHeight) {
			el[i].classList.remove('reveal_active')
		} else {
			el[i].classList.add('reveal_active')
		}
	}
}

setInterval(() => {
	isVisible(arrReveal)
}, 500)

