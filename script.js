//Wrapped the whole code so it only works once the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {

    //grabbing the elements
const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

//Need to get the tasks from the array
let tasks = JSON.parse(localStorage.getItem("task")) || []; //parse is used so the task we provideed in string format can be get into its OG format i.e. array of an object

tasks.forEach(task => renderTask(task) ); //using this each task in array could be displayed

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
    localStorage.setItem("task", JSON.stringify(tasks)); //stringify is used as setItem method takes up the value in string format only so need to convert it
}

//As the page loads , read the tasks from local storage , grab them and store in array and run the loop through tasks array, read and call renderTask for each task so it can render the whole array
function renderTask(task){
    const li = document.createElement("li");
    if(task.isCompleted) li.classList.add("completed");
    li.setAttribute("data-id", task.id);

    li.innerHTML = `
    <span class= "task-item">${task.text}</span>
    <button class="delete-btn">delete</button>
    `;
    li.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON") return;
        task.isCompleted = !task.isCompleted;
        li.classList.toggle("completed");
        saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
        
    })

    todoList.appendChild(li);
}
});