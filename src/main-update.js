import { Project, Task, projectList, mainList } from "./main-logic";
import updateTaskList from "./task-list-update";

import calendarMonth from "./icons/calendar-check.svg";
import chevronRight from "./icons/chevron-right.svg";
import circleOutline from "./icons/circle-outline.svg";
import circle from "./icons/circle.svg";
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
    taskCreationSection.classList.add("task-creation-section", "icon-and-text");
    completedListTitle.classList.add("completed-list-title", "icon-and-text");

    todayDate.setAttribute("id", "today-date");
    plusSymbol.setAttribute("for", "task-creation");
    taskListMain.setAttribute("id", "task-list");
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
        className: "icon"
    });

    if (target.date) todayDate.textContent = target.date;
    plusSymbol.textContent = "+";
    completedListText.textContent = `Completed ${target.taskList.filter(task => task.completion).length}`;

    projectSection.append(projectName, projectDeletion);
    projectContainer.append(projectSection, todayDate);
    taskCreationSection.append(plusSymbol, taskCreation);
    updateTaskList(taskListMain, target);
    completedListTitle.append(chevronSymbol, completedListText);
    updateTaskList(completedList, target, 'complete');
    completedListSection.append(completedListTitle, completedList);
    main.append(projectContainer, taskCreationSection, taskListMain, completedListSection);
}

export default updateMain;