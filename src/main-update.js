import updateTaskList from "./task-list-update";
import chevronRight from "./icons/chevron-right.svg";
import trashCanOutline from "./icons/trash-can-outline.svg";
import { handleCompletedList, handleListMark, handleProjectDeletion, handleProjectRenaming, handleTaskCreation, handleTaskList } from "./handlers";

const main = document.querySelector('.main');

function updateMain(target) {
    main.replaceChildren();

    const projectContainer = document.createElement('div');
    const projectSection = document.createElement('div');
    const projectName = document.createElement('input');
    const projectDeletion = document.createElement('img');
    const todayDate = document.createElement('p');
    const taskCreationSection = document.createElement('div');
    const plusSymbol = document.createElement('label');
    const taskCreation = document.createElement('input');
    const taskListMain = document.createElement('div');
    const completedListSection = document.createElement('div');
    const completedListTitle = document.createElement('div');
    const chevronSymbol = document.createElement('img');
    const completedListText = document.createElement('p');
    const completedList = document.createElement('div');

    projectSection.classList.add("project-section");
    taskCreationSection.classList.add("creation-section", "icon-and-text");
    completedListTitle.classList.add("icon-and-text");

    todayDate.setAttribute("id", "today-date");
    plusSymbol.setAttribute("for", "task-creation");
    taskListMain.setAttribute("id", "task-list");
    completedListTitle.setAttribute("id", "completed-list-title");
    completedListText.setAttribute("id", "completed-list-text");
    completedList.setAttribute("id", "completed-list");

    Object.assign(projectName, {
        type: "text",
        name: "project-name",
        id: "project-name",
        value: target.name
    });
    Object.assign(taskCreation, {
        type: "text",
        name: "task-creation",
        id: "task-creation",
        placeholder: "Add a task"
    });
    Object.assign(projectDeletion, {
        src: trashCanOutline,
        alt: "Button to delete project",
        id: "project-deletion"
    });
    Object.assign(chevronSymbol, {
        src: chevronRight,
        alt: "Dropdown icon",
        id: "completed-list-icon",
        className: "icon"
    });

    if (target.assignDate) todayDate.textContent = target.assignDate();
    plusSymbol.textContent = "+";
    completedListText.textContent = `Completed ${target.taskList.filter(task => task.completion).length}`;

    [taskListMain, completedList].forEach(node => {
        node.addEventListener('click', event => handleTaskList(event, target));
        node.addEventListener('click', event => handleListMark(event, target));
    });
    taskCreation.addEventListener('keydown', event => handleTaskCreation(event, target));
    projectName.addEventListener('keydown', event => handleProjectRenaming(event, target));
    projectDeletion.addEventListener('click', () => handleProjectDeletion(target));
    completedListTitle.addEventListener('click', event => handleCompletedList(event, target));

    if(target.externalFn) {
        projectName.readOnly = true;
        projectSection.appendChild(projectName);
    } else {
        projectSection.append(projectName, projectDeletion);
    } 
    projectContainer.append(projectSection, todayDate);
    taskCreationSection.append(plusSymbol, taskCreation);
    updateTaskList(taskListMain, target);
    completedListTitle.append(chevronSymbol, completedListText);
    completedListSection.append(completedListTitle, completedList);
    main.append(projectContainer, taskCreationSection, taskListMain, completedListSection);
}

export default updateMain;