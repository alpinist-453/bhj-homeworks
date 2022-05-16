
const arrSliders = Array.from(document.querySelectorAll('.slider__item'));
const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev');
const arrDot = Array.from(document.querySelectorAll('.slider__dot'));
const sliderDots = document.querySelectorAll('.slider__item');
console.log(sliderDots)

sliderNext.onclick = next;
sliderPrev.onclick = prev;

function next() {
	indexActiv = arrSliders.findIndex(el => Array.from(el.classList).includes('slider__item_active'));
	arrSliders[indexActiv].classList.remove('slider__item_active');
	indexActiv = (indexActiv === arrSliders.length - 1) ? 0 : ++indexActiv;
	arrSliders[indexActiv].classList.add('slider__item_active');
}

function prev() {
	indexActiv = arrSliders.findIndex(el => Array.from(el.classList).includes('slider__item_active'));
	arrSliders[indexActiv].classList.remove('slider__item_active');
	indexActiv = (indexActiv === 0) ? arrSliders.length - 1 : --indexActiv;
	arrSliders[indexActiv].classList.add('slider__item_active');
}