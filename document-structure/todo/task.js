const btnAdd = document.getElementById('tasks__add');

btnAdd.addEventListener('click', event => {
	event.preventDefault();
	const taskInput = document.getElementById('task__input').value;
	const tasksList = document.getElementById('tasks__list');

	const spisokCart = `<div class="task">
							<div class="task__title">${taskInput}</div>
  							<a href="#" class="task__remove">&times;</a>
						</div>`

	if (taskInput.trim().length !== 0) {

		tasksList.insertAdjacentHTML('beforeend', spisokCart);

	} else { alert('введите текс') }

	document.getElementById('task__input').value = "";

	const taskRemoves = document.querySelectorAll('.task__remove');

	for (let i = 0; i < taskRemoves.length; i++) {
		const task = document.querySelectorAll('.task');

		taskRemoves[i].onclick = function () {
			task[i].remove();
		}
	}
})

