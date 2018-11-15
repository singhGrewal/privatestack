const express = require("express");
const router = express.Router();
const Todo = require("../../models/todoModel");

router.get("/todos", (req, res) => {
  console.log("Todos 1", req.body);
  //this will return all the data, exposing only the id and action field to the client
  Todo.find({})
    .then(data => console.log("Todos data", data))
    .catch(err => console.log("Todos err", err));
});

router.get("/todos", (req, res) => {
  console.log("get all todo");
  Todo.find()
    .sort({ date: -1 })
    .then(posts => console.log("all post", posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

router.post("/todos", (req, res, next) => {
  console.log("Todojs 2", req.body);
  const newTodo = {
    todo: req.body.todo,
    user: req.body.userId
  };
  if (newTodo.todo) {
    Todo.create(newTodo)
      .then(data => console.log("data", data))
      .catch(next);
  }
});

module.exports = router;
