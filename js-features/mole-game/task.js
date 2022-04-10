
const dead = document.getElementById("dead")
const lost = document.getElementById("lost")


for (i = 1; i < 10; i++) {
	const list = document.getElementById(`hole${i}`)
	list.onclick = function () {
		if (list.className.includes('hole_has-mole') === true) {
			dead.textContent = +(dead.textContent) + 1;
		} else {
			lost.textContent = +(lost.textContent) + 1;
		}

		if (lost.textContent === '5') {
			alert("Вы проиграли :(");
			lost.textContent = 0;
			dead.textContent = 0;

		} else if (dead.textContent === '10') {
			alert("!!! ПОБЕДА !!!");
			lost.textContent = 0;
			dead.textContent = 0;
		}
	}
}

