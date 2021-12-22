const express = require('express')
const app = express()
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
let tasks = ["Enroll to Scaler",
    "Learn Nodejs",
    "Learn Reactjs",
    "Get a job",
    "Get a girlfriend/boyfriend"]

app.get("/", (req, res) => {
    res.send("Welcome User , please go /tasks to get the options")
})

app.get('/tasks', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    let list = "";
    for (let i = 0; i < tasks.length; i++) {
        list += `<li><a href="">${tasks[i]}</a></li>`
    }
    const html = `<h3>Here is your list : </h3>
        <ul>
        ${list}
        </ul >
        `
    res.send(html)
    // res.write(html)
    // res.end()
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
    const id = req.params.id;
    if (id > 0 && id <= tasks.length)
        res.send(`<h1>${tasks[id - 1]}<h1>`)
    else
        res.send(`<h1>Sorry !! No such tasks present.</h1>`)
})

app.delete('/tasks/:id', (req, res) => {

    // Delete task with given id
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
    tasks.push(req.body.task)
    // console.log(tasks);
    res.setHeader('Content-type', 'text/html');
    res.send(`<h1>Task addded Succesfully !!</h1>`)
})

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
