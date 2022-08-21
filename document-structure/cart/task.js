const controlDecs = document.querySelectorAll('.product__quantity-control_dec');
const controlIncs = document.querySelectorAll('.product__quantity-control_inc');
const productQuantitys = document.querySelectorAll('.product__quantity-value');
const btnProductsAdd = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');

for (let i = 0; i < controlDecs.length; i++) {
	const controlDec = controlDecs[i];

	controlDec.addEventListener('click', () => {
		productQuantitys[i].textContent = --productQuantitys[i].textContent;

		if (productQuantitys[i].textContent === '1' || productQuantitys[i].textContent === '0') {
			productQuantitys[i].textContent = '1'
		}
	})
}

for (let i = 0; i < controlIncs.length; i++) {
	const controlInc = controlIncs[i];

	controlInc.addEventListener('click', () => {
		productQuantitys[i].textContent = ++productQuantitys[i].textContent;
	})
}

for (let i = 0; i < btnProductsAdd.length; i++) {
	const btnAdd = btnProductsAdd[i];

	btnAdd.addEventListener('click', (event) => {

		const product = event.target.closest('.product');
		const id = product.dataset.id;
		const countFromProduct = +event.target.parentNode.querySelector('.product__quantity-value').textContent;


		const foundCartItem = Array.from(cart.children).find(item => item.dataset.id === id);
		if (foundCartItem) {
			let productCount = item.querySelector('.cart__product-count');
			let total = +productCount.textContent;
			productCount.textContent = total + countFromProduct;

			return false;
		}

		const productImg = product.querySelector('.product__image').src;
		const count = product.querySelector('.product__quantity-value').textContent;

		const productCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${productImg}">
                                <div class="cart__product-count">${count}</div>
                            </div>`;

		cart.insertAdjacentHTML('beforeend', productCart);
	})
}



