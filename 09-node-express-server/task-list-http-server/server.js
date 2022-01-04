const express = require('express')
const app = express()

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
app.get('/tasks', (req, res) => {

})

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

app.get('/tasks/:id', (req, res) => {

    // BONUS: figure out how `:id` part works 
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

const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true })); // to enable the parsing of the body if in it is of json format or in url-encoded fromat.
app.use(express.json());

const taskList = [
  "Enroll to Scaler",
  "Learn Node.Js",
  "Learn React.Js",
  "Get a Job",
  "Get a Girlfriend",
];

saveTaskToFile = () => {
  fs.writeFile("1.txt", taskList.toString().replace(",", "\n"), (err) => {
    if (err) throw err;
    else {
      console.log("Saved the File\n");
    }
  });
};

const ln = taskList.length;
app.get("/tasks", (req, res) => {
  res.send(taskList);
});
app.post("/tasks", (req, res) => {
  const times = taskList.length - ln;
  var strCur = req.body["task"];
  strCur = strCur + " " + times;
  taskList.push(strCur);

  var curTaskToSave = "";
  var str = taskList.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ",") {
      curTaskToSave += "\n";
    } else {
      curTaskToSave += str[i];
    }
  }
  console.log(curTaskToSave);

  fs.writeFile("task.json", curTaskToSave, (err) => {
    if (err) throw err;
    else {
      console.log("Saved the File\n");
    }
  });

  res.send(
    "sending post request and aded the  one more task! \n now task =" + times
  );
});
saveTaskToFile;

app.get("/tasks/:id", (req, res) => {
  // if path is like /:id then we can extract the string after / using req.params.id
  if (req.params.id >= taskList.length || req.params.id < 0) {
    res.send("This is not Authorised!!");
  } else {
    res.send(taskList[req.params.id]);
  }
});

app.listen("3300", () => {
  console.log("listening at port" + 3300);
});

// You can't send the  body in get erequest.
/* Save the tasks to a file task.json 
update the file every time a new taks is created 
when server is restarted old task should  be available
Read the file at server start to load the saved tasks
*/



