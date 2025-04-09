import { Project, Task, projectList } from "./main-logic";
import { handleProjectList, handleMainList, handleProjectCreation } from "./handlers.js";
import updateProjectList from "./project-list-update.js";
import updateMain from "./main-update.js";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles.css";

const mainListSidebar = document.querySelector('#main-list');
const projectListSidebar = document.querySelector('#project-list');
const projectCreation = document.querySelector('#project-creation');

(new Project("General")).addProject();
projectList[0].addTask(new Task("Fuck Lior"));
projectList[0].addTask(new Task("Get fucked by Lior"));
projectList[0].taskList[0].changeDueDate(new Date());
projectList[0].taskList[0].changePriority();
projectList[0].taskList[1].changeCompletion();
updateProjectList();
updateMain(projectList[0]);

mainListSidebar.addEventListener('click', event => handleMainList(event));
projectListSidebar.addEventListener('click', event => handleProjectList(event));
projectCreation.addEventListener('keydown', event => handleProjectCreation(event));