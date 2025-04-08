import { Project, Task, projectList, mainList } from "./main-logic";
import updateMain from "./main-update";
import updateProjectList from "./project-list-update";
import updateTaskDetails from "./task-detail-update";

const rightSidebar = document.querySelector('.right-sidebar');
const main = document.querySelector('.main');

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

function handleProjectCreation(event) {
    if(event.key === 'Enter') {
        let newProjectObj = new Project(event.target.value);
        newProjectObj.addProject();
        updateProjectList();
        updateMain(newProjectObj);
        event.target.value = '';
    }
}

function handleTaskCreation(event, projectObj) {
    if(event.key === 'Enter') {
        let newTaskObj = new Task(event.target.value);
        projectObj.addTask(newTaskObj);
        updateMain(projectObj);
        event.target.value = '';
    }
}

function handleProjectRenaming(event, projectObj) {
    if(event.key === 'Enter') {
        projectObj.renameProject(event.target.value);
        updateProjectList();
        updateMain(projectObj);
    }
}

function handleProjectDeletion(projectObj) {
    projectObj.deleteProject();
    updateProjectList();
    main.replaceChildren();
}

function handleListMark(event, projectObj) {
    if(event.target.className === "circle-mark" || event.target.className === "star-mark") {
        let targetId, markFn;
        if(event.target.className === "circle-mark") {
            targetId = event.target.nextElementSibling.id;
            markFn = task => task.changeCompletion();
        } else {
            targetId = event.target.previousElementSibling.id;
            markFn = task => task.changePriority();
        }
        let taskObj = projectObj.taskList.find(task => task.id === targetId);
        markFn(taskObj);
        updateMain(projectObj);
        if (rightSidebar.children.length > 0) updateTaskDetails(taskObj);
    }    
}

export { 
    handleTaskDetails,
    handleTaskList,
    handleProjectList,
    handleMainList,
    handleProjectCreation,
    handleTaskCreation,
    handleProjectRenaming,
    handleProjectDeletion,
    handleListMark
}