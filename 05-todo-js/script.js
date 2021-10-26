/* 
document -> DOM = Document Object Model
window -> BOM = Browser Object Model


*/

let inpTask = document.getElementById("inpTask");
let listTasks = document.getElementById("listTasks");

function addItemToList(taskName /* String */) {
  let newTaskListItem = document.createElement("li");
  newTaskListItem.innerText = taskName;
  listTasks.appendChild(newTaskListItem);
}

function getNewTaskName() {
  return inpTask.value;
} /* return String */

/**
 * when add is clicked, 
 * 1. read input with getNewTaskName()
 * 2. save that to "newTaskName"
 * 3. call addItemToList(newTaskName)
 * 4. clear input
 */

let btnAdd = document.getElementById("btnAdd");
btnAdd.onclick = function () {
  let newTaskName = getNewTaskName();
  addItemToList(newTaskName);
  inpTask.value = "";
}