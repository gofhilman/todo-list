import updateMain from "./main-update";

const rightSidebar = document.querySelector('.right-sidebar');

function handleTaskDetails(event, projectObj, taskObj, taskName, dueDateInput, noteText) {
    switch (event.target.id) {
        case 'detail-confirmation':
            taskObj.renameTask(taskName.value);
            taskObj.changeDueDate(dueDateInput.value);
            taskObj.writeNote(noteText.value);
            updateMain(projectObj);     
            break;
        case 'task-deletion':
            projectObj.deleteTask(taskObj);
            rightSidebar.replaceChildren();
            updateMain(projectObj);
    }
}

function handleTaskList(event) {
    
}

function handleProjectList(event) {

}

function handleMainList(event) {
    
}