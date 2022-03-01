const express = require("express");
const fs = require("fs/promises");
let data = require("./data.json");

app = express();
app.use(express.json());

let todoLists = data.tasks;

function check(req, res, next) {
  // middleware
  const id = req.params.id;
  if (id > 0 && id <= todoLists.length) {
    next();
  } else res.send("Please enter a valid id");
}

app.get("/tasks", (req, res) => {
  res.send(todoLists);
});

app.get("/tasks/:id", check, (req, res) => {
  res.send(todoLists[req.params["id"] - 1]);
});

app.post("/tasks", (req, res) => {
  todoLists.push(req.body["task"]);
  data = { tasks: [...todoLists] };
  data = JSON.stringify(data);
  fs.writeFile("./data.json", data, (err) => {
    if (err) console.log("failed");
  });
  res.send("Successfully Added");
});

app.delete("/tasks/:id", check, (req, res) => {
  const id = req.params.id - 1;
  todoLists = todoLists.filter((el, idx) => idx != id);
  data = { tasks: [...todoLists] };
  data = JSON.stringify(data);
  fs.writeFile("./data.json", data, (err) => {
    console.log("failed");
  });
  res.send("Successfully Deleted");
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
