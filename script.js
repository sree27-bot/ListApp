// Select elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

// Add a new task
addTaskButton.addEventListener("click", () => {
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Please enter a task!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");
  taskItem.innerHTML = `
    <span>${taskName}</span>
    <button class="delete-button">Delete</button>
  `;

  // Mark task as completed
  taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Delete task
  const deleteButton = taskItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    taskItem.remove();
  });

  taskList.appendChild(taskItem);
  taskInput.value = ""; // Clear input
});
