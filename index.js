/**
 * Your browser JS code will go here
 */

/**
 * Helper function to create a todo list element that you can easily append to DOM 
 */
function renderTodo(todo) {
  // create a list item element
  const listItem = document.createElement("li");

  // create a paragraph element
  const description = document.createElement("p");
  // add the description to the paragraph element
  description.innerText = todo.description;

  // create a Marc complete button
  const markCompleteBtn = document.createElement("button");
  markCompleteBtn.innerText = "Mark Todo as Complete";
  // add the todo's id as a data attribute so we can reference later
  markCompleteBtn.dataset.todoId = todo.id;
  // add event listener
  markCompleteBtn.addEventListener("click", markComplete);

  // create a delete button El
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete"
  // add the todo's id as a data attribute so we can reference later
  deleteBtn.dataset.todoId = todo.id;
  // and and event listener
  deleteBtn.addEventListener("click", deleteTodo);

  // add three elements above to the list item
  listItem.append(description);
  listItem.append(markCompleteBtn);
  listItem.append(deleteBtn);

  // append the list item to the todos list
  const todoListEl = document.getElementById("todos-list");
  todoListEl.append(listItem);
}

function markComplete(event) {
  const todoId = event.target.dataset.todoId;

  console.log(`
    TODO: Implement the mark complete functionality for todo ${todoId}
  `);
}

function deleteTodo(event) {
  const todoId = event.target.dataset.todoId;

  console.log(`
    TODO: Implement the delete functionality for todo ${todoId}
  `);
}