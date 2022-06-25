const express = require("express");
const fs=require('fs');
const app = express();

app.use(express.json({ extended: true }));
var taskList;
const fileName="tasks.json";


read();

/**
 * Imagine there is a list of tasks like this:
 *  1. Enroll to Scaler
 *  2. Learn Node.js
 *  3. Learn React.js
 *  4. Get a job
 *  5. Get a girlfriend/boyfriend
 *
 */

/**
 * When GET request is sent to 127.0.0.1:4114/tasks,
 * response will be
 *      [
 *         'Enroll to Scaler',
 *         'Learn Node.js',
 *         'Learn React.js',
 *         'Get a job',
 *         'Get a girlfriend/boyfriend'
 *      ]
 */


app.get("/tasks", (req, res) => {
  res.send(taskList);
  console.log(taskList);
});

/**
 * If GET request is sent to 127.0.0.1:4114/tasks/1,
 * Then response will be
 *
 *     'Enroll to Scaler'
 *
 * If GET request is sent to 127.0.0.1:4114/tasks/2
 * Then response will be
 *
 *    'Learn Node.js'
 */

app.get("/tasks/:id", (req, res) => {
  // BONUS: figure out how `:id` part works
  const id=Number(req.params.id);
  if(isNaN(id)){
    console.log(id);
    return res.status(400).send('Invalid id');
  }

  if(id<=0 || id>taskList.length){
    return res.status(404).send('Task not found');
  }else
     res.send(taskList[id]);
});

/**
 * If POST request is sent to
});
**/
app.delete('/tasks/:id', (req, res) => {
    
    // Delete task with given id
    const id=Number(req.params.id);
    if(isNaN(id)){
      console.log(id);
      return res.status(400).send('Invalid id');
    }
    else{
      delete taskList[id];
      write(taskList);
      res.send("Deleted task with id :"+id +" successfully");
    }
})

/**
 * When POST request is sent to 127.0.0.1:4114/tasks,
 * with the body:
 *          { "task": "Complete NodeJS Assignment" }
 *
 * Then a new task will be added to the list.
 *
 *   6. Complete NodeJS Assignment
 */

app.post("/tasks", (req, res) => {
  if (req.body.task == undefined) {
    res.send("Please add a body to add a task. The format should be {\"task\": \"task name\"}");
  } else {
    const index=Object.keys(taskList).length + 1;
    taskList[index] = req.body.task;
    write(taskList);
    res.send("A new task " + req.body.task + " has been added to the list");
  }
});

app.listen(4114, () => {
    console.log('server started on http://127.0.0.1:4114')
})

/**
 * BONUS: 
 *  - Save the tasks to a file tasks.json 
 *  - Update the file every time a new task is created/deleted
 *  - When server is restarted, old tasks should be available 
 *     - Read the file at server start to load the saved tasks
 */




 function read(){
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    } else {
      taskList=JSON.parse(data);
      console.log(taskList);
    }
  });
}

function write(data) {
  fs.writeFile(fileName, JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }
  });
}