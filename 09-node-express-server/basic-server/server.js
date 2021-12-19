const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get("/", (req, res) => {
  console.log("HTTP METHOD = " + req.method);
  res.send("Hello World!");
});

app.get("/abcd", (req, res) => {
  res.send({
      a: 10,
      b: true,
      c: "Asdsad",
      d: {
          e: "ASdsa"
      }
  });
});

app.post("/abcd", (req, res) => {
  console.log(req.body)
  res.send("WOW! You posted to abcd");
});

app.get("/greet", (req, res) => {
  console.log(req.query);
  if (req.query["name"] == undefined) res.send("Hello guest");
  else res.send("Hello " + req.query["name"]);
});

app.get('/arr', (req, res) => {
    res.send([
        'asdasd',
        'asdasd',
        'sfnsfnsf'
    ])
})

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
