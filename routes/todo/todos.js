const express = require("express");
const router = express.Router();
const Todo = require("../../models/todoModel");
const passport = require("passport");

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

router.post(
  "/todos",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    var token = getToken(req.headers);
    console.log("Todo js 2", req.body);
    console.log("Todo js 2 token", token);
    const newTodo = {
      todo: req.body.todo,
      user: req.body.userId
    };
    if (token) {
      Todo.create(newTodo)
        .then(data => console.log("data", data))
        .catch(next);
    } else {
      console.log("NO token /todo");
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

getToken = function(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
