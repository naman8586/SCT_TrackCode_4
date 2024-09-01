let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");

    const taskText = taskInput.value.trim();
    const taskTime = taskDate.value;

    if (taskText === "") return;

    const newTask = {
        id: Date.now(),
        text: taskText,
        date: taskTime,
    };

    tasks.push(newTask);
    taskInput.value = "";
    taskDate.value = "";
    renderTasks();
}

function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        const newText = prompt("Edit task:", task.text);
        if (newText) {
            task.text = newText;
            renderTasks();
        }
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text} - ${new Date(task.date).toLocaleString()}</span>
            <div>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

window.onload = function() {
    console.log("JavaScript is loaded and ready.");
};
