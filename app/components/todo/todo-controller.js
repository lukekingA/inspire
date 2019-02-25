import TodoService from "./todo-service.js";

const _tds = new TodoService()

function _drawTodos() {

	let template = ''
	template += `
	<div class="text-light txt-shadow bg-dk-transparent d-inline-block rounded shadow p-2">
			<h3>Tasks</h3>
			<p>You have ${_tds.Todos.length} tasks</p>
			<ul class="pl-0 overflow-auto">
	`
	_tds.Todos.forEach(td => template += td.TodoItem)

	template +=
		`	</ul>
			<form onkeydown="app.controllers.todoController.addTodo(event)">
				<input class="rounded pl-1" type="text" name="description" placeholder="task description">
			</form>
		</div>`

	document.querySelector('#todos').innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _tds.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_tds.addSubscriber('error', _drawError)
		_tds.addSubscriber('todos', _drawTodos)
		_tds.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		if (e.keyCode == 13) {
			e.preventDefault()
			var form = e.target
			var todo = {
				description: form.value
			}
			_tds.addTodo(todo)
		}
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_tds.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_tds.removeTodo(todoId)
	}



}