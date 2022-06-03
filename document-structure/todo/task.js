const btnAdd = document.getElementById('tasks__add');

btnAdd.addEventListener('click', () => {

	const taskInput = document.getElementById('task__input').value;
	const tasksList = document.getElementById('tasks__list');

	const spisokCart = `<div class="task">
							<div class="task__title">${taskInput}</div>
  							<a href="#" class="task__remove">&times;</a>
						</div>`

	if (taskInput) {
		tasksList.insertAdjacentHTML('beforeend', spisokCart);
	}

	const taskRemoves = document.querySelectorAll('.task__remove');

	for (let i = 0; i < taskRemoves.length; i++) {
		const taskRemove = taskRemoves[i];
		const task = document.querySelectorAll('.task');

		taskRemove.addEventListener('click', () => {
			task[i].remove();
		})
	}
})

