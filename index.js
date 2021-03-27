//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click", addTodo)

//functions
function addTodo(event){
     //Prevent form from submitting
     event.preventDefault();

     //todo div
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");

     //  create li
     const newTodo = document.createElement('li');
     newTodo.innerText= todoInput.value;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);

     //completed button
     const completedButton =document.createElement('button');
     completedButton.innerHTML ='<i class = "fas fa-check"></i>';
     completedButton.classList.add("complete-btn");
     todoDiv.appendChild(completedButton);

     //delete button
     const deleteButton =document.createElement('button');
     deleteButton.innerHTML ='<i class = "fas fa-trash"></i>';
     deleteButton.classList.add("delete-btn");
     todoDiv.appendChild(deleteButton);

     //append todo list
     todoList.appendChild(todoDiv);
     //clear todo input
     todoInput.value="";

}