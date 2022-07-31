import { displayTasks } from "./DOM";

export const LOCAL_STORAGE_LIST_KEY = "task.myTasks" 
export const myTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];


//save info in local storage
export function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(myTasks))
    console.log(myTasks)
}

 export default class newProject{
    constructor(name, Tasks, id){
        this.GOAL = name
        this.Tasks = [];
        this.id = Date.now().toString
    }
}

export function addTasktoArray(task){
    let taskX = new newProject(task)
    myTasks.push(taskX);
    save();
    displayTasks()
}

export function addNewTask(){
    const form = document.querySelector("#form-pop-up");
    
    const taskTitle = form.elements['title'].value 
    
    if(taskTitle === "") return

    addTasktoArray(taskTitle);
    console.log(myTasks)
    form.reset()
    // document.getElementById("form-pop-up").reset() 
    form.style.display = "none"
} 

