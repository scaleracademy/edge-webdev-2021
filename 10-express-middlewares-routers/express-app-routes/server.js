/**
 * Lets say we have these students 
 * - Aakif
 * - Abhishek
 * - Anshul
 * - Apoorv
 * - Arnab 
 * - Ashutosh
 * 
 * Lets say we have these teachers 
 * - Satyasai
 * - Sahil 
 * - Paridhi 
 * - Arnav 
 * 
 * On GET /teachers show all teachers
 * On GET /teachers/:id show particular teacher 
 * 
 * On GET /students show all students
 * On GET /students/:id show particular student
 */

const express = require('express');
const app = express();

const studentRoute = require('./routes/students')
const teacherRoute = require('./routes/teachers')

app.use('/students', studentRoute)
app.use('/teachers', teacherRoute)

app.listen(4876, () => {
  console.log('Server started at http://localhost:4876');
})