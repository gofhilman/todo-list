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

function updateTaskList(target) {
    const projectContainer = document.createElement('div');
    const projectSection = document.createElement('div');
    const projectName = document.createElement('p');
    const projectRenaming = document.createElement('img');
    const projectDeletion = document.createElement('img');
    const todayDate = document.createElement('p');
    const taskCreation = document.createElement('div');
    const plusSymbol = document.createElement('div');
    const taskCreationText = document.createElement('p');
    const taskListMain = document.createElement('div');
    const completedListSection = document.createElement('div');
    const completedListTitle = document.createElement('div');
    const chevronSymbol = document.createElement('img');
    const completedListText = document.createElement('p');
    const completedList = document.createElement('div');

    projectSection.classList.add("project-section");
    taskCreation.classList.add("icon-and-text");
    completedListTitle.classList.add("completed-list-title icon-and-text");

    projectName.setAttribute("id", "project-name");
    projectRenaming.setAttribute("id", "project-renaming");
    projectDeletion.setAttribute("id", "project-deletion");
    todayDate.setAttribute("id", "today-date");
    taskCreation.setAttribute("id", "task-creation");
    taskListMain.setAttribute("id", "task-list");
    completedList.setAttribute("id", "completed-list");



    projectName.textContent = target.name;
    if (target.date) todayDate.textContent = target.date;
    plusSymbol.textContent = "+";
    taskCreationText.textContent = "Add a task";
    completedListText.textContent = `Completed `;
}

function updateTaskDetails(target) {

}