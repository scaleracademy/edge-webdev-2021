const express = require('express');

const route = express.Router();

const teacherList = [
  {name: 'Satyasai', topic: 'DBMS'},
  {name: 'Sahil', topic: 'OOP'},
  {name: 'Paridhi', topic: 'Recursion'},
  {name: 'Arnav', topic: 'NodeJS'},
]

route.get('/', (req, res) => {
  res.send(teacherList);
})

route.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    return res.status(400).send('Invalid id')
  }
  if (id < 0 || id >= teacherList.length) {
    return res.status(404).send('Teacher not found')
  }
  res.send(teacherList[id])
})

module.exports = route;