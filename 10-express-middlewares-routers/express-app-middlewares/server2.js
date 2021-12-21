const express = require('express');
const app = express();

function base64toASCII(input) {
  return Buffer.from(input, 'base64').toString('ascii');
}

function ASCIItobase64(input) {
  return Buffer.from(input, 'ascii').toString('base64');
}

function decodeQuery(req, res, next) {
  console.log(req.query)
  Object.keys(req.query).forEach(key => {
    req.query[key] = base64toASCII(req.query[key]);
  })
  console.log(req.query)
  next()
}

function checkForKey(req, res, next) {
  if (req.query.key === '42') {
    next()
  } else {
    res.send('You are not authorized to access this page')
  }
}

app.use(decodeQuery)

app.get('/public', (req, res) => {
  res.send('Hello ' + req.query.name);
})

app.get('/private', checkForKey, (req, res) => {
  res.send('Hi ' + req.query.name + ', welcome to the secret world of Scalerverse!');
})


app.listen(8877, () => {
  console.log('server started on http://localhost:8877');
})

