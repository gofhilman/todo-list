import circleOutline from "./icons/circle-outline.svg";
import circle from "./icons/circle.svg";
import starOutline from "./icons/star-outline.svg";
import star from "./icons/star.svg";

function updateTaskList(parent, target, state = 'incomplete') {
    let taskState, circleState;
    if (state == 'incomplete') {
        taskState = task => !task.completion;
        circleState = circleOutline;
    } else if (state == 'complete') {
        taskState = task => task.completion;
        circleState = circle;
    }

    target.taskList.forEach(task => {
        if(taskState(task)) {
            const taskSection = document.createElement('div');
            const circleMark = document.createElement('img');
            const taskName = document.createElement('p');
            const starMark = document.createElement('img');

            taskName.setAttribute("id", task.id);
            taskName.textContent = task.name;

            Object.assign(circleMark, {
                src: circleState,
                alt: "Circle mark",
                className: "circle-mark"
            });
            Object.assign(starMark, {
                src: starOutline,
                alt: "Star mark",
                className: "star-mark"
            });
            taskSection.append(circleMark, taskName, starMark);
            parent.appendChild(taskSection);
        } 
    });
}

export default updateTaskList;