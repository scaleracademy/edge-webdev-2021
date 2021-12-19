const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

var taskList = [                                     //To store all the tasks.
    "Enroll to Scaler",
    "Learn Node.js",
    "Learn React.js",
    "Get a job",
    "Get a girlfriend/boyfriend",
];


app.get('/tasks', (req, res) => {
    res.send(taskList);
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
    let id_of_this_search = req.params.id;
    if (taskList.length < id_of_this_search) {                 //Check if id is valid or not
        res.send('Please try again with a valid entry!');
    }
    else {
        res.send(taskList[id_of_this_search - 1]);
    }
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
    if (req.query["task"] === undefined) {                      //Check if task(query) is valid or not
        res.send(`Cannot add to task list,please provide a task to add!!`);
    }
    else {
        taskList.push(req.query["task"]);
        res.send(`Task ${req.query["task"]} is successfully added to tasks list`);
    }
})

app.listen(4114, () => {
    console.log('server started on http://127.0.0.1:4114')
})
