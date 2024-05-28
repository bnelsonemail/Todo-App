// Purpose: To create a simple todo list application that allows users to add tasks and mark them as completed.

// variables
const todoForm = document.getElementById("newTodoForm");
const todoList = document.getElementById("taskList");
const li = document.querySelector('li');
const btn = document.querySelector('#addTask');


// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];


// Loop through savedTodos and create a new li element for each task
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
}


// Add an event listener to the form to handle form submission
btn.addEventListener("click", function(e) {
  e.preventDefault();
  let newTodo = document.createElement("li");
  let taskValue = document.getElementById("todo").value;
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  todoForm.reset();
  todoList.appendChild(newTodo);


  // save to localStorage
  savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});


// Add an event listener to the ul to handle marking tasks as completed
todoList.addEventListener("click", function(e) {
  let clickedListItem = e.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }


  // Update the isCompleted property in savedTodos
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});