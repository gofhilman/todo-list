import { Project, Task, projectList } from "./main-logic";
import { handleProjectList, handleMainList, handleProjectCreation } from "./handlers.js";
import updateProjectList from "./project-list-update.js";
import updateMain from "./main-update.js";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles.css";
import init from "./init.js";

const mainListSidebar = document.querySelector('#main-list');
const projectListSidebar = document.querySelector('#project-list');
const projectCreation = document.querySelector('#project-creation');

init();
updateProjectList();
updateMain(projectList[0]);

mainListSidebar.addEventListener('click', event => handleMainList(event));
projectListSidebar.addEventListener('click', event => handleProjectList(event));
projectCreation.addEventListener('keydown', event => handleProjectCreation(event));