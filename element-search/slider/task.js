const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev');
let arrSliders = Array.from(document.querySelectorAll('.slider__item'));
let arrSave = [];

sliderNext.onclick = next;
sliderPrev.onclick = prev;


function next() {
	arrSave = arrSliders.splice(0, 1);
	arrSave.forEach(el => { el.classList.remove('slider__item_active') });
	arrSliders = arrSliders.concat(arrSave);
	arrSliders[0].classList.add('slider__item_active');
}

function prev() {
	arrSave = arrSliders.splice(arrSliders.length - 1, 1);
	arrSave.forEach(el => { el.classList.remove('slider__item_active') });
	const indexDelete = arrSliders.findIndex(el => document.querySelector('.slider__item_active'));
	arrSliders[indexDelete].classList.remove('slider__item_active');
	arrSliders = arrSave.concat(arrSliders);
	arrSliders[0].classList.add('slider__item_active');
}


// function prev() {
// 	arrSave = arrSliders.splice(arrSliders.length - 1, 1);
// 	arrSave.forEach(el => { el.classList.remove('slider__item_active') });
// 	arrSliders.forEach(el => { el.classList.remove('slider__item_active') });
// 	arrSliders = arrSave.concat(arrSliders);
// 	arrSliders[0].classList.add('slider__item_active');
// }