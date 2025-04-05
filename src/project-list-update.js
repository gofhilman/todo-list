import { projectList } from "./main-logic";

const projectListSidebar = document.querySelector('#project-list');

function updateProjectList() {
    projectListSidebar.replaceChildren();
    projectList.forEach(project => {
        const projectTitle = document.createElement('p');
        projectTitle.textContent = project.name;
        projectTitle.setAttribute('id', project.id);
        projectListSidebar.appendChild(projectTitle);
    });
}

export default updateProjectList;