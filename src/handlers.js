import { Project, Task, projectList, mainList } from "./main-logic";
import updateMain from "./main-update";
import updateTaskDetails from "./task-detail-update";

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

function handleTaskList(event, projectObj) {
    let taskObj = projectObj.taskList.find(task => task.id === event.target.id);
    updateTaskDetails(taskObj);
}

function handleProjectList(event) {
    let projectObj = projectList.find(project => project.id === event.target.id);
    updateMain(projectObj);
}

function handleMainList(event) {
    mainList.forEach(main => main.updateList());
    let mainObj = mainList.find(main => main.id === event.target.parentElement.id);
    updateMain(mainObj);
}

export { 
    handleTaskDetails,
    handleTaskList,
    handleProjectList,
    handleMainList
}