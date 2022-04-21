const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
	const menuLink = menuLinks[i];

	menuLink.onclick = function (event) {
		const menuSub = menuLink.parentNode.querySelector('.menu_sub');
		const arr = Array.from(document.querySelectorAll('.menu_sub'))
		arr.forEach(el => { el.classList.remove('menu_active') });

		if (menuSub) {
			event.preventDefault()
			menuSub.classList.add('menu_active');
		}
	}
};

