import newProject,{ LOCAL_STORAGE_LIST_KEY, myTasks} from "./ProjectFunctions"
import { save } from "./ProjectFunctions";
// import { myTasks } from "./ProjectFunctions";

export function startScreen(){
    const form = document.querySelector("#form-pop-up");
    form.style.display = "none";
    displayTasks();
}

export function createNewTask(){
    const form = document.querySelector("#form-pop-up");

    if (form.style.display === "none"){
        form.style.display = "block"
    }
    else{
        form.style.display = "none";
    }
}

export function clearForm(){
    document.querySelector("#form-pop-up").reset();
}

export function displayTasks(){
    const taskContainer = document.querySelector(".task-container");
    const removeTasks = document.querySelectorAll(".task");

    for(let i = 0; i < removeTasks.length; i++){
        removeTasks[i].remove();
    }

    let counter = 0;
    myTasks.forEach(task => {
        const taskList = document.createElement("ul");
        const newDiv = document.createElement("div")
        const actionsContainer = document.createElement("div")
        const deleteBtn = document.createElement("button")

        const form = document.createElement("form")
        const inputLine = document.createElement("input")
        const addButton = document.createElement("button")

        newDiv.className = "task";
        actionsContainer.className = "actions-container"
        deleteBtn.setAttribute('id','btn-delete');
        deleteBtn.textContent = "DELETE"
        deleteBtn.dataset.index = counter
        deleteBtn.addEventListener("click", removeTask)
        
        form.className ="action-form"
        inputLine.type = "text"
        inputLine.placeholder = "NEW GOAL"
        inputLine.className= "input-task"
        inputLine.id = "input-task"
        addButton.className= "add-task-to-project-btn"
        addButton.textContent = "+"
        addButton.dataset.index = counter
        addButton.setAttribute("onclick", "return false")
        addButton.addEventListener("click", addTaskToList)

        form.append(inputLine, addButton)

        function addTaskToList(){
            console.log(task.Tasks)
            // const form = document.querySelector(".action-form");
            // const tasks = form.elements['input-task'].value 
            // let taskAdd = addButton.dataset.index
            // const newListItem = document.createElement("li")
            // newListItem.className ="list-item"
            if(inputLine.value === "") return

            // newListItem.textContent = inputLine.value
            // taskList.append(newListItem)
            task.Tasks.push(inputLine.value)
            save() //save the list items because updating the whole card?? no need for 2nd storage
            inputLine.value = null
            console.log(task)
            displayTasks()
            //display Tasks refreshes page
        }

        function removeTask(){
            let taskRemove = deleteBtn.dataset.index;
            console.log(taskRemove + " was removed")
            myTasks.splice(taskRemove , 1);
            newDiv.remove();
            save()
            displayTasks();
        }

        actionsContainer.append(deleteBtn)
        taskContainer.append(newDiv)

        for(const key in task){
            const paragraph = document.createElement("p");
            paragraph.textContent = (`${key}: ${task[key]}`).toUpperCase();
            newDiv.append(paragraph)
            if(key == "Tasks"){
                paragraph.className ="Hidden"
                let itemCounter = 0 //unique id for each list item

                task.Tasks.forEach(item =>{
                    const listItem = document.createElement("li")
                    listItem.textContent = item.toUpperCase()
                    listItem.dataset.itemId = itemCounter
                    itemCounter++
                    taskList.append(listItem)

                    listItem.addEventListener('click', () => {
                        listItem.style.textDecoration = "line-through"
                    })
                    listItem.addEventListener('dblclick', () => {
                        console.log(task.Tasks)
                        task.Tasks.splice(listItem.dataset.itemId,1); //when double clicked removes list item
                        console.log(task.Tasks)
                        // listItem.remove()
                        save()
                        displayTasks()
                    })
                }) //for each array item loop
                //works in conjuction with the addTaskToList function
            }
            else if(key == "id"){
                paragraph.className = "Hidden"
            }   
        }
        // inputLine.value=null;
        newDiv.append(taskList)
        newDiv.append(form)
        newDiv.append(actionsContainer)
        
        counter++
    })
}

