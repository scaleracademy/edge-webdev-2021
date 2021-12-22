const express = require('express');

const route = express.Router();

const studentList = [
  {name: 'Roop', college: 'SNU'},
  {name: 'Abhishek', college: 'TSEC'},
  {name: 'Lakshya', college: 'NIT Jaipur'},
  {name: 'Apoorv', college: 'NIT Silchar'},
  {name: 'Avinit', college: 'NIT Agartala'},
]

route.get('/', (req, res) => {
  res.send(studentList);
})

route.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    return res.status(400).send('Invalid id')
  }
  if (id < 0 || id >= studentList.length) {
    return res.status(404).send('Student not found')
  }
  res.send(studentList[id])
})

module.exports = route;