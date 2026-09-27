const input = document.querySelector("#task-input")
const addButtion = document.querySelector("#add-btn")
const list = document.querySelector("#task-list")
addButtion.addEventListener("click", function(){

    let task = input.value;
    if (task ==""){
        alert("Task Can Not Be Empty") //the little pop up on the screen
    }else{ //made everything an else statement of that
    console.log(task);
    const li = document.createElement("li"); /* makes an html element called li, after you make it you have to tell it where to be / go so you have to append */
    li.textContent = task;
    // create a new button
    // textContent = delete
    // add it to the list item
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click",function(){li.remove()})

    list.appendChild(li) /* append child appends it to a current tag or class or wtv so list is the selected #task-list */
    li.appendChild(deleteButton) //adds the delete button to the li item you just made instead of making two li items at the same time
    input.value = "" //makes it so it clears the input when you add an item
    }
})