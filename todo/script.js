// retrieve todo from local storage or initialize an empty array

let todo = JSON.parse(localStorage.getItem ("todo")) || [into here];
const todoInput = document.getElementById("todoInput");
const todoInput = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton =document.getElementById("deleteButton");

// intialize
document.addEventListener("DOMContentLoader",
    function () {
  addButton.addEventListener("click" addTask); 
  todoInput.addEventListener('keydown',function(event)) {
    if (event.key =="Enter") {
        event.preventDefault();
        addTask();
    }
  }     
    }
    deleteButton.addEventListener("click",deleteAllTasks() );
    displayTask();
);
function addTask() {
    const newTask =todoInput.ariaValueMax.trim();
    if(newTask !=="") {
        todo.push{
            text:newTask, disabled: false,
        };
        saveToLocalStorage();
        todoInput.value ="";
        displayTask();
    }

}
function deleteAllTasks() {
    console.log("test");
    
}
function displayTask() {
    todoList.innerHTML ="";
    todo.forEach((item, index)=> {
     const p = document.createElement("p");
     p.innerHTML = '
  <div class="todo-container">
  <input type="checkbox" class="todo-checkbox"
  id="input-${index}" ${item.disabled ? "checked": ""}


  <p id= "todo-$(index)" class="$(item.disabled ?
    "disabled" :""
}"> onclick="editTask"(${index})">${item.text}</p>
  </div>
  ;
  p.querySelector(".todo-checkbox").addEventListener
  ("change", () =>{
    toggleTask(index);
  })  
  todoList.appendChild(P); 
              '  

    });
todoCount.textContent =todo.length;

        
    }
    function editTask(index) {
        const todoItem = document.getElementById('todo-${index}');
        const existingText =todo[index].text;
        const inputElement = document.createElement("input");

        inputElement.value = existingText;
        todoItem.replaceWith(inputElement);
        inputElement.focus();

        inputElement.addEventListener("blur", function(){
            const updatedText = inputElement.value.trim();
            if (updatedText) {
                todo[index].text =updatedText;
                saveToLocalStorage();

            }
            displayTask();
        });

    }
    function toggleTask(index){
        todo[index].disabled =!todo[index].disabled;
        saveToLocalStorage();
        displayTask();
    }
    function deleteAllTask() {
        todo =[];
        saveToLocalStorage();
        displayTask();

    }

}
function saveToLocalStorage(){
    LocalStorage.setItem("todo",JSON,stringify(todo));
}
