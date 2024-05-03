const date = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const buttonAdd = document.getElementById("buttonadd");
const checkedContainer = document.getElementById("checked-container");

/* agregar tareas */

function addList(task) {
    const listItem = `
        <li style="margin-top: 10px" class="list-item">
            <i class="fa-regular fa-circle-check checkbtn"></i>
            <p class="text">${task}</p>
            <i class="fa-regular fa-trash-can deletebtn"></i>
        </li>
    `;
    list.insertAdjacentHTML("beforeend", listItem);
}

function addTask() {
    const task = input.value.trim();
    if (task) {
        addList(task);
        input.value = "";
    }
}

buttonAdd.addEventListener("click", addTask);

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

/* tareas realizadas */

function addCheckedTask(task) {
    const realizedTask = document.createElement("h4");
    realizedTask.textContent = task;
    checkedContainer.appendChild(realizedTask);

    /* estilos para el nuevo elemento */
    realizedTask.classList.add("realizedTask");


}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("checkbtn")) {
        const listItem = event.target.closest("li");
        const taskElement = listItem.querySelector(".text");
        const task = taskElement.textContent;
        addCheckedTask(task);
        list.removeChild(listItem);
    }
});




/* borrar las tareas */

const deleteBtn = document.querySelector("deletebtn");

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("deletebtn")) {
        const listItem = event.target.closest("li");
        if (listItem) {
            listItem.remove(); // Eliminar el elemento <li> al que pertenece el botón
        }
    }
});





