const hasTooltips = document.querySelectorAll('.has-tooltip');

for (let i = 0; i < hasTooltips.length; i++) {
	const hasTooltip = hasTooltips[i];

	hasTooltip.addEventListener('click', event => {
		event.preventDefault();

		const tipActiv = document.querySelector('.tooltip_active');
		const position = hasTooltip.getBoundingClientRect();
		const newDiv = document.createElement("div");

		console.log('tipActiv', tipActiv);

		newDiv.className = "tooltip tooltip_active";
		newDiv.style.left = position.x + 10 + 'px';
		newDiv.style.top = position.y + 20 + 'px';

		newDiv.innerHTML = hasTooltip.title;

		if (tipActiv) { tipActiv.remove() }

		hasTooltip.appendChild(newDiv);
	})
}