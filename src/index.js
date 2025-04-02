import { format, isToday } from "date-fns";

const todoList = (function (doc) {
    class Project {
        constructor(name) {
            this.name = name;
            this.taskList = [];
        }
        addProject() {
            projectList.push(this);
        }
        renameProject(newName) {
            this.name = newName;
        }
        addTask(task) {
            this.taskList.push(task);
        }
        deleteTask(task) {
            this.taskList.splice(this.taskList.indexOf(task), 1);
        }
    }

    class Task {
        constructor(name) {
            this.name = name;
            this.priority = false;
            this.dueDate = null;
            this.note = '';
            this.completion = false;
        }
        renameTask(newName) {
            this.name = newName;
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
    }

    class Main {
        constructor(name, externalFn) {
            this.name = name;
            this.externalFn = externalFn;
            this.taskList = [];
        }
        updateList() {
            this.taskList.length = 0;
            projectList.forEach(project => {
                project.taskList.forEach(task => {
                    if(this.externalFn(task)) {
                        this.taskList.push(task);
                    }
                });
            });
        }
    }

    const todayList = new Main('My Day', task => isToday(task.dueDate));
    const importantList = new Main('Important', task => task.priority);
    const plannedList = new Main('Planned', task => task.dueDate);

    todayList.assignDate = function() {
        this.date = format(new Date(), "iiii, MMMM d");
    };

    const projectList = [];
    const mainList = [todayList, importantList, plannedList];

    return {
        Project,
        Task,
        projectList,
        mainList
    }
})(document);

window.todoList = todoList;