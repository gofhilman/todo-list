import { format, isToday } from "date-fns";

class Project {
  constructor(name) {
    this.name = name;
    this.id = name.toLowerCase().replace(/ /g, "-");
    this.taskList = [];
  }
  addProject() {
    projectList.push(this);
  }
  deleteProject() {
    projectList.splice(projectList.indexOf(this), 1);
  }
  renameProject(newName) {
    this.name = newName;
    this.id = newName.toLowerCase().replace(/ /g, "-");
  }
  addTask(task) {
    this.taskList.push(task);
  }
  deleteTask(task) {
    this.taskList.splice(this.taskList.indexOf(task), 1);
  }

  static fromJSON(project) {
    const newProject = new Project(project.name);
    Object.assign(newProject, project);
    newProject.taskList = project.taskList.map((task) => Task.fromJSON(task));
    return newProject;
  }
}

class Task {
  constructor(name) {
    this.name = name;
    this.id = name.toLowerCase().replace(/ /g, "-");
    this.priority = false;
    this.dueDate = null;
    this.note = "";
    this.completion = false;
  }
  renameTask(newName) {
    this.name = newName;
    this.id = newName.toLowerCase().replace(/ /g, "-");
  }
  changePriority() {
    this.priority = !this.priority;
  }
  changeDueDate(date) {
    this.dueDate = date;
  }
  writeNote(text) {
    this.note = text;
  }
  changeCompletion() {
    this.completion = !this.completion;
  }
  static fromJSON(task) {
    const newTask = new Task(task.name);
    Object.assign(newTask, task);
    return newTask;
  }
}

class Main {
  constructor(name, externalFn) {
    this.name = name;
    this.id = name.toLowerCase().replace(/ /g, "-");
    this.externalFn = externalFn;
    this.taskList = [];
  }
  updateList() {
    this.taskList.length = 0;
    projectList.forEach((project) => {
      project.taskList.forEach((task) => {
        if (this.externalFn(task)) {
          this.taskList.push(task);
        }
      });
    });
  }
}

const todayList = new Main("My Day", (task) => isToday(task.dueDate));
const importantList = new Main("Important", (task) => task.priority);
const plannedList = new Main("Planned", (task) => task.dueDate);

todayList.assignDate = function () {
  return format(new Date(), "iiii, MMMM d");
};

const projectList = [];
const mainList = [todayList, importantList, plannedList];

export { Project, Task, projectList, mainList };
