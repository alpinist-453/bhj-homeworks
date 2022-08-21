const hasTooltips = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < hasTooltips.length; i++) {
	const hasTooltip = hasTooltips[i];

	hasTooltip.addEventListener('click', event => {
		event.preventDefault();
		const tipActiv = document.querySelector('.tooltip_active');
		const position = hasTooltip.getBoundingClientRect();
		const newDiv = document.createElement("div");

		newDiv.setAttribute("class", "tooltip tooltip_active");
		newDiv.setAttribute("style", "left: 0; top: 0");
		newDiv.style.left = position.x + 10 + 'px';
		newDiv.style.top = position.y + 20 + 'px';

		console.log(hasTooltip);

		newDiv.innerHTML = hasTooltip.title;

		hasTooltip.appendChild(newDiv);

		if (tipActiv) {
			tipActiv.classList.remove('tooltip_active')
		};
	})
}