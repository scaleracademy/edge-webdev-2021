const express = require('express');
const app = express();

function checkIfKnownPerson(req, res, next) {
  if (req.query.key === '42') {
    next();
  } else {
    res.send('You are not a known person');
  }
}

function sayHello(req, res) {
  res.send('Hello World!');
}

function welcomeInside(req, res) {
  res.send('Welcome to the secret world of Scalerverse!')
}

app.get('/public', sayHello)
app.get('/private', checkIfKnownPerson, welcomeInside)

app.listen(7788, () => {
  console.log('server started on http://localhost:7788');
})