
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
    document.getElementById("showTaskFormButton").classList.remove('d-none')
    document.getElementById("showTaskListButton").classList.add('d-none')
    document.getElementById("taskListContainer").classList.remove('d-none')
    document.getElementById("taskFormContainer").classList.add('d-none')
};