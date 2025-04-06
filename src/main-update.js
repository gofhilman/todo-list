import { Project, Task, projectList, mainList } from "./main-logic";

import calendarMonth from "./icons/calendar-check.svg";
import chevronRight from "./icons/chevron-right.svg";
import circleOutline from "./icons/circle-outline.svg";
import circle from "./icons/circle.svg";
import renameOutline from "./icons/rename-outline.svg";
import starOutline from "./icons/star-outline.svg";
import star from "./icons/star.svg";
import trashCanOutline from "./icons/trash-can-outline.svg";

const mainListSidebar = document.querySelector('#main-list');
const projectListSidebar = document.querySelector('#project-list');
const projectCreation = document.querySelector('#project-creation');
const main = document.querySelector('.main');
const rightSidebar = document.querySelector('.right-sidebar');

function updateMain(target) {
    main.replaceChildren();

    const projectContainer = document.createElement('div');
    const projectSection = document.createElement('div');
    const projectName = document.createElement('p');
    const projectRenaming = document.createElement('img');
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
    taskCreationSection.classList.add("task-creation-section", "icon-and-text");
    completedListTitle.classList.add("completed-list-title", "icon-and-text");

    projectName.setAttribute("id", "project-name");
    todayDate.setAttribute("id", "today-date");
    plusSymbol.setAttribute("for", "task-creation");
    taskListMain.setAttribute("id", "task-list");
    completedList.setAttribute("id", "completed-list");

    Object.assign(taskCreation, {
        type: "text",
        name: "task-creation",
        id: "task-creation",
        placeholder: "Add a task"
    });
    Object.assign(projectRenaming, {
        src: renameOutline,
        alt: "Button to rename project",
        id: "project-renaming"
    });
    Object.assign(projectDeletion, {
        src: trashCanOutline,
        alt: "Button to delete project",
        id: "project-deletion"
    });
    Object.assign(chevronSymbol, {
        src: chevronRight,
        alt: "Dropdown icon",
        className: "icon"
    });

    projectName.textContent = target.name;
    if (target.date) todayDate.textContent = target.date;
    plusSymbol.textContent = "+";
    completedListText.textContent = `Completed EDITNUMBER`;

    projectSection.append(projectName, projectRenaming, projectDeletion);
    projectContainer.append(projectSection, todayDate);
    taskCreationSection.append(plusSymbol, taskCreation);
    completedListTitle.append(chevronSymbol, completedListText);
    completedListSection.append(completedListTitle, completedList);
    main.append(projectContainer, taskCreationSection, taskListMain, completedListSection);
}

export default updateMain;