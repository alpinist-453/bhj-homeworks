window.addEventListener('scroll', function () {
	const arrReveal = Array.from(document.querySelectorAll('.reveal'));

	for (let i = 0; i < arrReveal.length; i++) {
		const element = arrReveal[i];
		const { top, bottom } = arrReveal[i].getBoundingClientRect();

		if (bottom < 0) {
			arrReveal[i].classList.remove('reveal_active');
		}
		else if (top > window.innerHeight) {
			arrReveal[i].classList.remove('reveal_active');
		} else {
			arrReveal[i].classList.add('reveal_active');
		}
	}
});