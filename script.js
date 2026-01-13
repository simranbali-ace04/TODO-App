//grabbing the elements
const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = [];

addTaskBtn.addEventListener("click",  function (){

    const taskText = todoInput.value.trim(); //To remove the white space from both sides
    if(taskText === "") return;

    // New task's properties
    const newTask = {
        id: Date.now(),
        text: taskText,
        isCompleted: false,
    };

    tasks.push(newTask);
    saveTasks();
    todoInput.value = "" ; //after pushing , the input value will be cleared

    console.log(tasks); //To check if the task is added in array or not 
    
});

//storing the task in local storage
function saveTasks(){
    localStorage.setItem("task", JSON.stringify(tasks));
}