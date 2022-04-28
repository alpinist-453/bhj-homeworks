const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
	const menuLink = menuLinks[i];
	const menuSub = menuLink.parentNode.querySelector('.menu_sub');

	menuLink.onclick = function (event) {

		if (menuSub === null) {
			return
		}

		const arrActivEl = Array.from(menuSub.classList);

		let arr = Array.from(document.querySelectorAll('.menu_sub'));
		arr.forEach(el => { el.classList.remove('menu_active') });

		event.preventDefault();

		if (arrActivEl.includes('menu_active')) {
			let arrActivEll = Array.from(document.querySelectorAll('.menu_sub'));
			arrActivEll.forEach(el => { el.classList.remove('menu_active') });
		} else {
			menuSub.classList.add('menu_active');
		}
	}
}