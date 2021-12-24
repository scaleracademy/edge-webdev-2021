const express = require('express')
const app = express()
const fs = require('fs');

/** 
 * Imagine there is a list of tasks like this: 
 *  1. Enroll to Scaler 
 *  2. Learn Node.js
 *  3. Learn React.js
 *  4. Get a job
 *  5. Get a girlfriend/boyfriend
 *  
 */

 app.use(express.json());
 var jsonObj = {};
 
 function updateTasks(jsonObj){
     fs.writeFile('tasks.json', JSON.stringify(jsonObj), (err) => {
         if(err){
             console.log("Error encountered while saving tasks !");
         }
         else{
             console.log("Tasks saved successfully !");
         }
     })
 }

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
    res.send(jsonObj["tasks"]);
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
    const taskID = req.params.id;
    if(taskID<=0 || taskID>jsonObj["tasks"].length){
        res.send("Invalid task ID !");
    }
    else{
        res.send(jsonObj["tasks"][taskID-1]);
    }
})

app.delete('/tasks/:id', (req, res) => {
    
    // Delete task with given id
    const taskID = req.params.id;
    if(taskID<=0 || taskID>jsonObj["tasks"].length){
        res.send("Invalid task ID !");
    }
    else{
        jsonObj["tasks"].splice(taskID-1, 1);
        updateTasks(jsonObj);
        res.send("Task deleted successfully !");
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

app.post('/tasks', (req, res) => {
    jsonObj["tasks"].push(req.body["task"]);
    updateTasks(jsonObj);
    res.send("Task added successfully !");
})

app.listen(4114, () => {
    console.log('server started on http://127.0.0.1:4114')

    fs.readFile('tasks.json', (err, data) => {
        if(err){
            console.log("Error reading JSON Database");
        }
        else{
            jsonObj = JSON.parse(data);
        }
    })
})

/**
 * BONUS: 
 *  - Save the tasks to a file tasks.json 
 *  - Update the file every time a new task is created/deleted
 *  - When server is restarted, old tasks should be available 
 *     - Read the file at server start to load the saved tasks
 */