const express = require('express')

const app = express();


app.get('/', (req, res) => {
    console.log("HTTP METHOD = " + req.method)
    res.send('Hello World!');
})

app.get('/abcd', (req, res) => {
    res.send("WOW! I am abcd");
})


app.post('/abcd', (req, res) => {
    res.send("WOW! You posted to abcd");
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});