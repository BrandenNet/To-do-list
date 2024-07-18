document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    // Load tasks from local storage
    loadTasks();

    // Add task on Enter key press
    inputBox.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Add new task
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

    // Toggle task completion
    function toggleTaskCompletion() {
        this.classList.toggle("checked");
        saveTasks();
    }

    // Remove task
    function removeTask() {
        this.parentElement.remove();
        saveTasks();
    }

    // Clear all tasks
    window.clearTasks = function() {
        listContainer.innerHTML = '';
        saveTasks();
    }

    // Save tasks to local storage
    function saveTasks() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }

    // Load tasks from local storage
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
    feather.replace()
});

