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

app.post('/tasks', (req, res) => {

})

app.listen(4114, () => {
    console.log('server started on http://127.0.0.1:4114')
})





const express = require("express");
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

const ln = taskList.length;
app.get("/tasks", (req, res) => {
  res.send(taskList);
});
app.post("/tasks", (req, res) => {
  const times = taskList.length - ln;
  var strCur = req.body["task"];
  strCur = strCur + " " + times;
  taskList.push(strCur);
  res.send(
    "sending post request and aded the  one more task! \n now task =" + times
  );
});

app.get("/tasks/:id", (req, res) => {
  // if path is like /:id then we can extract the string after / using req.params.id
  res.send(taskList[req.params.id]);
});

app.listen("3300", () => {
  console.log("listening at port" + 3300);
});











