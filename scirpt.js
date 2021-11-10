"use strict";

// Selectos
let burgerButton = document.querySelector(".hamburger");
let navList = document.querySelector(".nav-ul");
let inputValue = document.querySelector(".input-value");
let addButton = document.querySelector(".add-button");
let todoList = document.querySelector(".todo-list");
let todoLi = document.querySelector(".add-li");
// EventListeners
burgerButton.addEventListener("click", addMenu);
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteInput);
inputValue.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    return addTodo();
  }
});
// Functions

function addMenu() {
  burgerButton.classList.toggle("active");
  navList.classList.toggle("active");
}

// Funtions
function addTodo(event) {
  // event.preventDefault();
  if (inputValue.value !== "") {
    //Create Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = inputValue.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //trash mark button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "X";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to List
    todoList.appendChild(todoDiv);
    inputValue.value = "";
  }
}

function deleteInput(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }
}
