let arrReveal = Array.from(document.querySelectorAll('.rotator__case'))

function isVisible(arr) {
	indexActiv = arr.findIndex(el => Array.from(el.classList).includes('rotator__case_active'));
	arr[indexActiv].classList.remove('rotator__case_active');
	indexActiv = (indexActiv === arr.length - 1) ? 0 : ++indexActiv;
	arr[indexActiv].classList.add('rotator__case_active');
}

setInterval(() => {
	isVisible(arrReveal)
}, 1000)

