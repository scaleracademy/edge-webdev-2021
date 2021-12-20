const { urlencoded } = require("express");
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/abcd", (req, res) => {
  /* res.send({
    a: 10,
    b: true,
    c: "Hi",
  }); */
  res.send([234, 25, 2345, 234, 3425, 1234]);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/greet", (req, res) => {
  console.log(req.query);
  if (req.query.name) res.send("Hello" + req.query.name);
  res.send("Hello guest");
});

app.post("/abcd", (req, res) => {
  console.log(req.body);
  res.send("Posted");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
