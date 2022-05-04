const express = require('express');
const path = require('path');
const { calcFare } = require('./utils');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public_html')));

app.get('/fare', (req, res) => {

  const kms = req.query.kms 
  const mins = req.query.mins

  if (!kms || !mins) {
    return res.status(400).json({
      error: 'Passing "kms" and "mins" is mandatory'
    })
  }

  const fare = calcFare(kms, mins)

  return res.json({
    fare
  })

});

app.listen(4567, () => {
  console.log('Server started on http://localhost:4567');
});