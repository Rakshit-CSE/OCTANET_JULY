function addTask() {
  var taskInput = document.getElementById("task-input");
  var prioritySelect = document.getElementById("priority-select");
  var deadlineInput = document.getElementById("deadline-input");
  
  var taskTitle = taskInput.value;
  var taskPriority = prioritySelect.value;
  var taskDeadline = deadlineInput.value;
  
  if (taskTitle === "") {
    alert("Please enter a task!");
    return;
  }
  
  var taskList = document.getElementById("task-list");
  
  var taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  
  var titleSpan = document.createElement("span");
  titleSpan.classList.add("title");
  titleSpan.textContent = taskTitle;
  
  var prioritySpan = document.createElement("span");
  prioritySpan.classList.add("priority");
  prioritySpan.textContent = "Priority: " + taskPriority;
  
  var deadlineSpan = document.createElement("span");
  deadlineSpan.classList.add("deadline");
  deadlineSpan.textContent = "Deadline: " + taskDeadline;
  
  var actionsDiv = document.createElement("div");
  actionsDiv.classList.add("actions");
  
  var completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", function() {
    taskDiv.classList.toggle("completed");
    titleSpan.classList.toggle("completed");
  });
  
  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function() {
    var newPriority = prompt("Enter new priority:", taskPriority);
    if (newPriority) {
      taskPriority = newPriority;
      prioritySpan.textContent = "Priority: " + taskPriority;
    }
    var newDeadline = prompt("Enter new deadline:", taskDeadline);
    if (newDeadline) {
      taskDeadline = newDeadline;
      deadlineSpan.textContent = "Deadline: " + taskDeadline;
    }
  });
  
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    taskDiv.remove();
  });
  
  actionsDiv.appendChild(completeButton);
  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);
  
  taskDiv.appendChild(titleSpan);
  taskDiv.appendChild(prioritySpan);
  taskDiv.appendChild(deadlineSpan);
  taskDiv.appendChild(actionsDiv);
  
  taskList.appendChild(taskDiv);
  
  taskInput.value = "";
  prioritySelect.value = "high";
  deadlineInput.value = "";
}
