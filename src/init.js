import { Project, Task, projectList } from "./main-logic";

function init() {
    let projects;
    window.onbeforeunload = function() {
        localStorage.setItem('projects', JSON.stringify(projectList));
    }
    projects = JSON.parse(localStorage.getItem('projects'));
    
    if(projects) {
        projects.forEach(project => {
            project.taskList.forEach(task => Object.setPrototypeOf(task, Task.prototype));
            Object.setPrototypeOf(project, Project.prototype);
            projectList.push(project);
        });
    } else {
        (new Project("General")).addProject();
    }   
}

export default init;