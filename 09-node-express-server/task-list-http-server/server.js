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
// lets create a task_list to store tasks
const task_list =[]

// to get the body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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
    if(task_list.length) res.send(task_list);
    else res.send('No task to show :(');
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
    // id will get store in params of request so
    const id = req.params.id;
    if(id > 0 && id <= task_list.length) res.send(task_list[id-1]);
    else res.send('Invalid Id');
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
    const task = req.body["task"];
    if(task){
        task_list.push(task);
        res.send("Task added successfully!");
    }
    else res.send("No task is provided to post");
})

app.listen(4114, () => {
    console.log('server started on http://127.0.0.1:4114')
})
