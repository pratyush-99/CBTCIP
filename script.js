function addTask() {
    const taskInput = document.getElementById('taskInput'); // Get the task input box
    const taskList = document.getElementById('taskList'); // Get the task list

    if (taskInput.value.trim() !== "") { // Check if the input is not empty
        const li = document.createElement('li'); // Create a new list item
        li.innerHTML = `
            ${taskInput.value} 
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `; // Add the task text and a delete button
        taskList.appendChild(li); // Add the new task to the list
        taskInput.value = ""; // Clear the input box
    }
}

function deleteTask(button) {
    const li = button.parentElement; // Get the list item to delete
    li.remove(); // Remove the task from the list
}
