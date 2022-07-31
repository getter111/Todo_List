import { startScreen } from "./DOM";
import { createNewTask, clearForm} from "./DOM"
import newProject, {addTasktoArray, addNewTask, myTasks} from "./ProjectFunctions"
import './style.css'


startScreen()
// localStorage.clear()
// const pro = new newProject("hoe")
// addTasktoArray(pro.Project)
// console.log(myTasks)
// console.log(pro)
// console.log(pro.list)
// console.log(myTasks)


let eventListners = (function() {
    
    const createNewTaskButton = document.querySelector("#new-task");
    createNewTaskButton.addEventListener("click", createNewTask)

    const addTaskButton = document.querySelector("#submit-button")
    addTaskButton.addEventListener("click", addNewTask)

    const resetButton = document.querySelector("#reset-button")
    resetButton.addEventListener("click", clearForm)

})();