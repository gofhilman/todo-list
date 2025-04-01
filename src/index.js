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

    const todayList = {

    };
    const importantList = {

    };
    const plannedList = {

    };

    const projectList = [];
})(document);