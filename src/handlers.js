import { Project, Task, projectList, mainList } from "./main-logic";
import updateMain from "./main-update";
import updateProjectList from "./project-list-update";
import updateTaskDetails from "./task-detail-update";
import updateTaskList from "./task-list-update";
import chevronDown from "./icons/chevron-down.svg";

const rightSidebar = document.querySelector('.right-sidebar');
const main = document.querySelector('.main');
let listState;

function handleTaskDetails(event, projectObj, taskObj, taskName, dueDateInput, noteText) {
    switch (event.target.id) {
        case 'detail-confirmation':
            taskObj.renameTask(taskName.value);
            taskObj.changeDueDate(dueDateInput.value);
            taskObj.writeNote(noteText.value);
            listState = completedListState();
            updateMain(projectObj);
            if(listState) updateCompletedList(projectObj);   
            break;
        case 'task-deletion':
            projectObj.deleteTask(taskObj);
            rightSidebar.replaceChildren();
            listState = completedListState();
            updateMain(projectObj);
            if(listState) updateCompletedList(projectObj);  
    }
}

function handleTaskList(event, projectObj) {
    if(event.target.tagName === 'P') {
        let taskObj = projectObj.taskList.find(task => task.id === event.target.id);
        updateTaskDetails(projectObj, taskObj);
    }
}

function handleProjectList(event) {
    let projectObj = projectList.find(project => project.id === event.target.id);
    updateMain(projectObj);
}

function handleMainList(event) {
    mainList.forEach(main => main.updateList());
    let mainObj = mainList.find(main => main.id === event.target.parentElement.id);
    updateMain(mainObj);
    const taskCreationSection = document.querySelector(".main>.creation-section");
    taskCreationSection.classList.add("no-display");
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
        listState = completedListState();
        updateMain(projectObj);
        if(listState) updateCompletedList(projectObj);
        updateTaskDetails(projectObj, newTaskObj); 
        event.target.value = '';
    }
}

function handleProjectRenaming(event, projectObj) {
    if(event.key === 'Enter') {
        projectObj.renameProject(event.target.value);
        updateProjectList();
        listState = completedListState();
        updateMain(projectObj);
        if(listState) updateCompletedList(projectObj); 
    }
}

function handleProjectDeletion(projectObj) {
    projectObj.deleteProject();
    updateProjectList();
    main.replaceChildren();
}

function handleListMark(event, projectObj) {
    if((event.target.className === "circle-mark") || (event.target.className === "star-mark")) {
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
        listState = completedListState();
        updateMain(projectObj);
        if(listState) updateCompletedList(projectObj); 
        if (rightSidebar.children.length > 0) updateTaskDetails(projectObj, taskObj);
    }    
}

function handleTaskMark(event, projectObj, taskObj) {
    if((event.target.className === "circle-mark") || (event.target.className === "star-mark")) {
        if(event.target.className === "circle-mark") {
            taskObj.changeCompletion();
        } else {
            taskObj.changePriority();
        }
        listState = completedListState();
        updateMain(projectObj);
        if(listState) updateCompletedList(projectObj);
        updateTaskDetails(projectObj, taskObj);
    }
}

function handleCompletedList(event, projectObj) {
    if((event.target.id === "completed-list-icon") || (event.target.id === "completed-list-text")) {
        if(!completedListState()) {
            updateCompletedList(projectObj);
        } else {
            updateMain(projectObj);
        }
    }
}

function completedListState() {
    const completedListIcon = document.querySelector('#completed-list-icon');
    return !!(completedListIcon.src === chevronDown);
}

function updateCompletedList(projectObj) {
    const completedListIcon = document.querySelector('img#completed-list-icon');
    const completedList = document.querySelector('#completed-list');
    completedListIcon.src = chevronDown;
    updateTaskList(completedList, projectObj, 'complete');
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
    handleListMark,
    handleTaskMark,
    handleCompletedList
}