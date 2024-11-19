let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskTitle = input.value;

  const task = {
    title: taskTitle,
    completed: false,
  };
  tasks.push(task);
  input.value = "";
  showTasks();
}

function showTasks() {
  const taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }

    li.textContent = task.title;

    const toggleBtn = document.createElement("button");

    if (task.completed) {
      toggleBtn.textContent = "غير مكتملة";
    } else {
      toggleBtn.textContent = "تم";
    }

    toggleBtn.onclick = () => toggleTask(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "مسح";
    deleteButton.onclick = () => deleteTask(index);

    li.appendChild(toggleBtn);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  const task = tasks[index];
  if (task.completed === true) {
    task.completed = false;
  } else {
    task.completed = true;
  }
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

document.getElementById("addTaskButton").onclick = addTask;
