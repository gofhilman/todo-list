import { Project, Task, projectList, mainList } from "./main-logic";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles.css";

const mainListSidebar = document.querySelector('#main-list');
const projectListSidebar = document.querySelector('#project-list');
const projectCreation = document.querySelector('#project-creation');
const main = document.querySelector('.main');
const rightSidebar = document.querySelector('.right-sidebar');

// mainListSidebar.addEventListener('click', mainHandler);
// projectListSidebar.addEventListener('click', projectHandler)