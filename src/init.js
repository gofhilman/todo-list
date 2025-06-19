import { Project, projectList } from "./main-logic";

function init() {
  let projects;
  window.onbeforeunload = function () {
    localStorage.setItem("projects", JSON.stringify(projectList));
  };
  projects = JSON.parse(localStorage.getItem("projects"));

  if (projects) {
    projects.forEach((project) => {
      const copiedProject = Project.fromJSON(project);
      projectList.push(copiedProject);
    });
  } else {
    new Project("General").addProject();
  }
}

export default init;
