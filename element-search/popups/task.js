const active = document.getElementById('modal_main');
const activeGreen = document.getElementById('modal_success');
const show = document.querySelector('.show-success');
const ArrClose = Array.from(document.querySelectorAll('.modal__close'));

active.classList.add("modal_active");

ArrClose.forEach(el => { el.onclick = close });

show.onclick = function () {
	activeGreen.classList.add("modal_active");
	active.classList.remove("modal_active");
}

activeGreen.onclick = function () {
	activeGreen.classList.remove("modal_active");
	active.classList.remove("modal_active");
}

function close() {
	activeGreen.classList.remove("modal_active");
	active.classList.remove("modal_active");
}