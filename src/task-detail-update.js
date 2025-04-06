import calendarMonth from "./icons/calendar-check.svg";
import circleOutline from "./icons/circle-outline.svg";
import circle from "./icons/circle.svg";
import starOutline from "./icons/star-outline.svg";
import star from "./icons/star.svg";

const rightSidebar = document.querySelector('.right-sidebar');

function updateTaskDetails(target) {
    rightSidebar.replaceChildren();

    const taskSection = document.createElement('div');
    const circleMark = document.createElement('img');
    const taskName = document.createElement('input');
    const starMark = document.createElement('img');
    const dueDateSection = document.createElement('label');
    const dueDateTitle = document.createElement('div');
    const dueDateIcon = document.createElement('img');
    const dueDateText = document.createElement('p');
    const dueDateInput = document.createElement('input');
    const noteText = document.createElement('textarea');

    dueDateTitle.classList.add("icon-and-text");

    taskSection.setAttribute("id", "task");
    dueDateSection.setAttribute("for", "due-date");

    dueDateText.textContent = "Add due date";

    Object.assign(circleMark, {
        src: circleOutline,
        alt: "Circle mark",
        className: "circle-mark"
    });
    Object.assign(starMark, {
        src: starOutline,
        alt: "Star mark",
        className: "star-mark"
    });
    Object.assign(dueDateIcon, {
        src: calendarMonth,
        alt: "Calendar icon",
        className: "icon"
    });
    Object.assign(taskName, {
        type: "text",
        name: "task-name",
        id: "task-name",
        value: target.name
    });
    Object.assign(dueDateInput, {
        type: "date",
        name: "due-date",
        id: "due-date"
    });
    Object.assign(noteText, {
        name: "note-text",
        id: "note-text",
        placeholder: "Add note",
        value: target.note
    });

    taskSection.append(circleMark, taskName, starMark);
    dueDateTitle.append(dueDateIcon, dueDateText);
    dueDateSection.append(dueDateTitle, dueDateInput);
    rightSidebar.append(taskSection, dueDateSection, noteText);
}

export default updateTaskDetails;