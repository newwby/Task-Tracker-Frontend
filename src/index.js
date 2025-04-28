

// will send POST req to backend (insertTask) with all args in request.body
function createNewTask(form_event) {
    form_event.preventDefault();
    const formData = new FormData(form_event.target)
    const taskData = {
        task_title: formData.get('title'),
        task_description: formData.get('description'),
        task_status: formData.get('status'),
        task_due_date: formData.get('due')
      };
    // let task_title, task_description, task_due_date
    // let new_task_status = "Pending"
    // placeholder log
    console.log(`placeholder create new task -> ${taskData["task_title"]}, is ${taskData["task_status"]} due ${taskData["task_due_date"]} (${taskData["task_description"]})`)
    // TODO clear form
}

// will send PUT req to backend (updateTaskStatus)
// with task_id in request & request.body including status
function changeTaskStatus(task_id, new_status) {
    // placeholder log
    console.log(`placeholder status update -> id ${task_id} changed to status ${new_status}`)
}


// will send DELETE req to backend (deleteTask) with task_id in request
function deleteTask(task_id) {
    // placeholder log
    console.log(`placeholder delete task -> id ${task_id}`)
}


// called when showTaskList is called and on document ready
// will send GET req to backend (fetchAllTasks)
function renderTaskList() {
    // clear the taskColumn
    let taskColumn = document.getElementById("task-column")
    while (taskColumn.firstChild) {
        taskColumn.removeChild(taskColumn.lastChild)
    }
    // dummy value included to call renderTaskCard at least once
    let all_tasks = ["tasks_are_not_strings"]
    for (let i = 0; i < all_tasks.length; i++) {
        renderTaskCard()
    }
    // placeholder log
    console.log(`placeholder call to render task list - no behaviour currently`)
}


// TODO implement pagination
function renderTaskCard() {
    // parent for all tasks
    let taskColumn = document.getElementById("task-column")
    console.log(`placeholder log - adding card to taskColumn @ ${taskColumn}`)
}
// <!-- Sample task card to be injected into task-column-->
// <!--
// <div class="card">
//   <div class="card-body">
//     <h5 class="card-title">Task Title</h5>
//     <p class="card-text">Optional description...</p>
//     <p><strong>Status:</strong> Pending</p>
//     <p><strong>Due:</strong> 2025-05-01 14:00</p>
//     <button class="btn btn-success btn-sm">Mark Solved</button>
//     <button class="btn btn-danger btn-sm">Delete Task</button>
//   </div>
// </div>
// -->

// func to show the create task form (and the button to flip back)
function showCreateTaskForm() {
    // button to change to create task form
    document.getElementById("showTaskFormButton").classList.add('d-none')
    // button to change to task list view
    document.getElementById("showTaskListButton").classList.remove('d-none')
    // the task list view
    document.getElementById("taskListContainer").classList.add('d-none')
    // the create task form
    document.getElementById("taskFormContainer").classList.remove('d-none')
};


// reverse of the above
function showTaskList() {
    renderTaskList()
    document.getElementById("showTaskFormButton").classList.remove('d-none')
    document.getElementById("showTaskListButton").classList.add('d-none')
    document.getElementById("taskListContainer").classList.remove('d-none')
    document.getElementById("taskFormContainer").classList.add('d-none')
};

