let btn = document.querySelector('.dropdown__value');
let btnList = document.querySelector('.dropdown__list');
let itemsList = btnList.parentNode.querySelectorAll('.dropdown__item');

btn.onclick = function (event) {

	if (document.querySelector('.dropdown__list_active')) {
		btnList.classList.remove('dropdown__list_active');
	} else {
		btnList.classList.add('dropdown__list_active');
	}
}

for (let i = 0; i < itemsList.length; i++) {
	let itemLink = itemsList[i];

	itemLink.onclick = function (event) {
		event.preventDefault();
		btn.innerHTML = itemLink.querySelector('.dropdown__link').textContent;
		btnList.classList.remove('dropdown__list_active');
	}
}