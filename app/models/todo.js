//top



export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get TodoItem() {
    return `
    <li class="d-flex align-items-center">
    <input type="checkbox" name="completed" value="${this.completed}" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
    <p class="task d-inline-block m-0 pl-1" style="text-decoration:${this.completed ? 'line-through' : 'none'}"> ${this.description}</p> 
    <button type="button" onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-sm text-light txt-shadow">&times;</button>
    </li>
    `
  }
}