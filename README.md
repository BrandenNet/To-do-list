# To-do-list

javascript
Copy code
document.addEventListener("DOMContentLoaded", () => {
This ensures that the script runs only after the entire HTML document has been fully loaded and parsed.

Selecting HTML Elements
javascript
Copy code
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
These lines select the input box and the list container elements from the HTML document.

Loading Tasks from Local Storage
javascript
Copy code
    loadTasks();
This function call loads any previously saved tasks from the local storage.

Adding a Task with Enter Key
javascript
Copy code
    inputBox.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
This adds an event listener to the input box to detect the Enter key press and call the addTask function.

Adding a Task Function
javascript
Copy code
    window.addTask = function() {
        if (inputBox.value === '') {
            alert("You must write something!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            li.addEventListener("click", toggleTaskCompletion);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"; // Unicode for 'X'
            span.classList.add("close");
            span.addEventListener("click", removeTask);
            li.appendChild(span);
            listContainer.appendChild(li);
            saveTasks();
            inputBox.value = ''; // Clear the input box after adding the task
        }
    }
This function checks if the input box is empty and alerts the user if it is. If not, it creates a new list item (li) with the task text, adds event listeners for toggling completion and removing the task, appends a close button (span), and adds the task to the list container. Finally, it saves the tasks to local storage and clears the input box.

Toggling Task Completion
javascript
Copy code
    function toggleTaskCompletion() {
        this.classList.toggle("checked");
        saveTasks();
    }
This function toggles the "checked" class on a task when it is clicked and then saves the updated tasks to local storage.

Removing a Task
javascript
Copy code
    function removeTask() {
        this.parentElement.remove();
        saveTasks();
    }
This function removes a task from the list and saves the updated tasks to local storage.

Clearing All Tasks
javascript
Copy code
    window.clearTasks = function() {
        listContainer.innerHTML = '';
        saveTasks();
    }
This function clears all tasks from the list container and saves the updated empty list to local storage.

Saving Tasks to Local Storage
javascript
Copy code
    function saveTasks() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }
This function saves the current list of tasks as a string in local storage.

Loading Tasks from Local Storage
javascript
Copy code
    function loadTasks() {
        let tasks = localStorage.getItem("tasks");
        if (tasks) {
            listContainer.innerHTML = tasks;
            let listItems = listContainer.getElementsByTagName("li");
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].addEventListener("click", toggleTaskCompletion);
                listItems[i].getElementsByClassName("close")[0].addEventListener("click", removeTask);
            }
        }
    }
This function retrieves the tasks from local storage and re-adds them to the list container. It also re-attaches the event listeners for toggling completion and removing tasks.
