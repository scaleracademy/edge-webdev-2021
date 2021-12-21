import express, { urlencoded } from "express";

const app = express();

app.use(urlencoded({ extended: true }));

let tasks = [
  "Enroll to Scaler",
  "Learn Node.js",
  "Learn React.js",
  "Get a job",
  "Get a girlfriend/boyfriend",
];

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
  res.send(tasks);
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
  if (parseInt(req.params["id"]) <= tasks.length) {
    res.send(tasks[parseInt(req.params["id"]) - 1]);
  } else {
    res.send(`You got only ${tasks.length} tasks`);
  }
});

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
  console.log(req.body["task"]);
  if (req.body["task"]) {
    tasks.push(req.body["task"]);
    res.send("Task Uploaded");
  } else {
    res.send("Wrong Schema For Uploading");
  }
});

app.listen(3000, () => {
  console.log("server started on http://127.0.0.1:3000");
});
