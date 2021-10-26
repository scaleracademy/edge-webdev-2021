let inpTask = document.getElementById('inpTask');
let btnAdd = document.getElementById('btnAdd');
let btnClear = document.getElementById('btnClear');
let listTasks = document.getElementById('listTasks');

let tasks = []

function saveTaskList() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function retrieveList() {
  let retrievedTasks = localStorage.getItem("tasks");
  if (retrievedTasks) {
    tasks = JSON.parse(retrievedTasks);
  }
}

function clearTaskList() {
  tasks = [];
  renderTaskList();
  saveTaskList();
}


function renderTaskList() {
  listTasks.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement('li');
    li.innerText = tasks[i];
    listTasks.appendChild(li);
  }
}

function addTask() {
  let task = inpTask.value;
  tasks.push(task);
  renderTaskList();
  saveTaskList();
}

btnAdd.onclick = function () {
  addTask();
}

btnClear.onclick = function () {
  clearTaskList();
}

inpTask.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});


retrieveList();
renderTaskList();