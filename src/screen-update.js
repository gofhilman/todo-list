import { Project, Task, projectList, mainList } from "./main-logic";

const mainListSidebar = document.querySelector('#main-list');
const projectListSidebar = document.querySelector('#project-list');
const projectCreation = document.querySelector('#project-creation');
const main = document.querySelector('.main');
const rightSidebar = document.querySelector('.right-sidebar');

function updateMainList(target) {
    const projectName = document.createElement('div');
    const projectText = document.createElement('p');
    const todayDate = document.createElement('p');
    const taskCreation = document.createElement('div');
    const plusSymbol = document.createElement('div');
    const taskCreationText = document.createElement('p');
    const taskListMain = document.createElement('div');
    const completedListSection = document.createElement('div');
    const completedListName = document.createElement('div');
    const chevronSymbol = document.createElement('img');
    const completedListText = document.createElement('p');
    const completedList = document.createElement('div');

    projectName.classList.add("project-name");
    taskCreation.classList.add("icon-and-text");
    completedListName.classList.add("icon-and-text");

    projectText.setAttribute("id", "project-text");
    todayDate.setAttribute("id", "today-date");
    taskCreation.setAttribute("id", "task-creation");
    taskListMain.setAttribute("id", "task-list");
    completedList.setAttribute("id", "completed-list");

    projectText.textContent = target.name;
    if (target.date) todayDate.textContent = target.date;
    plusSymbol.textContent = "+";
    taskCreationText.textContent = "Add a task";
    completedListText.textContent = `Completed `;
}