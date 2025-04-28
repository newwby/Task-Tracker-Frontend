

// will send POST req to backend (insertTask) with all args in request.body
function createNewTask(form_event) {
    // TODO add form validation
    form_event.preventDefault();
    const formData = new FormData(form_event.target)
    const taskData = {
        task_title: formData.get('title'),
        task_description: formData.get('description'),
        task_status: formData.get('status'),
        task_due_date: formData.get('due')
      };
    let task_form = document.getElementById("task-form")
    task_form.reset()
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
async function renderTaskList() {
    // clear the taskColumn
    let taskColumn = document.getElementById("task-column")
    while (taskColumn.firstChild) {
        taskColumn.removeChild(taskColumn.lastChild)
    }

    try {
        
        const response = await fetch('http://localhost:3000/tasks');
        const data = await response.json();
        
        // response data has data key containing actual task
        (data.data || []).forEach(task => {
            renderTaskCard(
                task.id,
                task.title,
                task.description,
                task.status,
                task.due_date,
            )
        })

    } catch (error) {
        console.error(`Error rendering tasks: ${error}`)
    }

}


// TODO implement pagination
function renderTaskCard(
    task_id,
    task_title,
    task_description,
    task_status,
    task_due,
) {
    // parent for all tasks
    let taskColumn = document.getElementById("task-column")

    let card_container = document.createElement("div");
    card_container.className = "card";
    // TODO change to dropdown options for status
    card_container.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${task_title}</h5>
        <p class="card-text">${task_description}</p>
        <p><strong>Status:</strong> ${task_status}</p>
        <p><strong>Due:</strong> ${task_due}</p>
        <button class="btn btn-success btn-sm">Mark Solved</button>
        <button class="btn btn-danger btn-sm">Delete Task</button>
    </div>`;

    let card_body = card_container.querySelector(".card-body");
    let card_update_status_button = card_body.children[4];
    let card_delete_task_button = card_body.children[5];
    
    card_update_status_button.addEventListener("click", () => {
        changeTaskStatus(task_id, "Solved")
    })
    card_delete_task_button.addEventListener("click", () => {
        deleteTask(task_id)
    })

    taskColumn.appendChild(card_container)
}


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

