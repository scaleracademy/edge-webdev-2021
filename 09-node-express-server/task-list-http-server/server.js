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