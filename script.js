const toggleButton = document.getElementById('toggle-button')
const lightModeIcon = document.getElementById('light-mode')
const darkModeIcon = document.getElementById('dark-mode')

function show() {
    document.querySelector('.add-task').style.display = 'flex';

}

function cancelAdd() {
    document.querySelector('.add-task').style.display = 'none';
}

const addtaskbutton = document.getElementById("add-task-button")
const mainaddtask = document.getElementsByClassName("main-add-task")
 

function addTask() {
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;

    if (!title || !description) {
        alert("Please fill out both title and description.");
        return;
    }

    const statusInputValue = document.getElementById("status-select").value;
    const priorityInputValue = document.getElementById("priority-select").value;

    const inputObj = {
        title: title,
        description: description,
        status: statusInputValue,
        priority: priorityInputValue,
    };

    const task = document.createElement('div');
    task.classList.add('task');
    const defaultContainer = document.querySelector('#details');

    task.innerHTML = `
        <div class="details">
            <h4>${title}</h4>
            <p>${description}</p>
            <div class="priority">Priority: ${priorityInputValue}</div>
        </div>
    `;
    if (defaultContainer) {
        defaultContainer.appendChild(task);
    } else {
        console.error("No element with class 'default' found.");
    }

    cancelAdd();
}



document.getElementById('toggle-button').addEventListener('click', function () {

    const body = document.body;
    const darkModeIcon = document.getElementById('dark-mode');
    const lightModeIcon = document.getElementById('light-mode');

    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        lightModeIcon.style.display = 'flex';
        darkModeIcon.style.display = 'none';
    } else {
        body.setAttribute('data-theme', 'dark');
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'flex';
    }
});
