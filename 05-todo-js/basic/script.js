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

/**
 * Further requirements:
 * 1. When enter button is clicked (cursor is on inpTask), 
 *    also do the same steps as add button
 * 2. When input is empty, show an alert message that input
 *    cannot be empty.
 * 
 */