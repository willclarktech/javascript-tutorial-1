const createNewTodoItemElement = text => {
  const newTodoItemElement = document.createElement("li")
  newTodoItemElement.innerText = text
  return newTodoItemElement
}

const addNewTodo = () => {
  const todoListElement = document.getElementById("todo-list")
  const newTodoItemElement = createNewTodoItemElement()
  todoListElement.appendChild(newTodoItemElement)
}

const handleSubmit = (event) => {
  event.preventDefault()
  addNewTodo()
}

window.onload = () => {
  const formElement = document.getElementById("form")
  formElement.addEventListener("submit", handleSubmit)
}
