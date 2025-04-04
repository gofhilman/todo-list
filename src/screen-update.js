import { Project, Task, projectList, mainList } from "./main-logic";

const mainListSidebar = document.querySelector('#main-list');
const projectListSidebar = document.querySelector('#project-list');
const projectCreation = document.querySelector('#project-creation');
const main = document.querySelector('.main');
const rightSidebar = document.querySelector('.right-sidebar');

function updateMainList(target) {
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
    const completedListName = document.createElement('div');
    const chevronSymbol = document.createElement('img');
    const completedListText = document.createElement('p');
    const completedList = document.createElement('div');

    projectSection.classList.add("project-section");
    taskCreation.classList.add("icon-and-text");
    completedListName.classList.add("icon-and-text");

    projectName.setAttribute("id", "project-name");
    projectRenaming.setAttribute("id", "project-renaming");
    projectDeletion.setAttribute("id", "project-deletion");
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