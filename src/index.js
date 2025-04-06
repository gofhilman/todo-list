import { Project, Task, projectList, mainList } from "./main-logic";
import updateProjectList from "./project-list-update.js";
import updateMain from "./main-update.js";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles.css";

const mainListSidebar = document.querySelector('#main-list');
const projectListSidebar = document.querySelector('#project-list');
const projectCreation = document.querySelector('#project-creation');
const main = document.querySelector('.main');
const rightSidebar = document.querySelector('.right-sidebar');

(new Project("General")).addProject();
projectList[0].addTask(new Task("Fuck Lior"));
projectList[0].addTask(new Task("Get fucked by Lior"));
projectList[0].taskList[1].changeCompletion();
updateProjectList();
updateMain(projectList[0]);

// mainListSidebar.addEventListener('click', mainHandler);
// projectListSidebar.addEventListener('click', projectHandler)