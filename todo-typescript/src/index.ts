import {v4 as uuidv4} from "uuid";

type Task = {
  id:string,
  title: string, 
  completed:boolean, 
  createdAt:string
}

const list  = document.querySelector<HTMLUListElement>("#list");
const form  = document.querySelector<HTMLFormElement>("#new-task-form");
const input  = document.querySelector<HTMLInputElement>("#new-task-title");

const tasks : Task[] = []
loadTasks();

form?.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(input?.value == "" || input?.value == null) return;

  const newTask :Task = {
    id: uuidv4(),
    title: input.value,
    completed:false,
    createdAt:new Date().toISOString()
  }
  tasks.push(newTask);
  addListItem(newTask);
  input.value = "";

})


function addListItem(task:Task){
   const item = document.createElement("li");
   const label = document.createElement("label");
   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.addEventListener('change',()=>{
    task.completed = checkbox.checked;
    saveTasks();
   })
   checkbox.checked = task.completed
   label.append(checkbox,task.title);
   item.append(label);
   list?.append(item)
}


function saveTasks(){
  localStorage.setItem("tasks",JSON.stringify(tasks));
}

function loadTasks(){
  const tasksString = localStorage.getItem("tasks");
  if(tasksString){
    const tasks = JSON.parse(tasksString) as Task[];
    tasks.forEach(addListItem);
  }
} 