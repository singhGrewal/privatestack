const Book = require("../models/Todo");
const User = require("../models/signUpModel");
const bcrypt = require("bcryptjs");
console.log("authController");

module.exports = {
  findAll: function(req, res) {
    console.log("findAll");
    const abc = {
      title: "test",
      author: "test"
    };
    Book.find(abc)
      .then(books => console.log(books))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("findById");
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        });

        console.log("authController newUser", newUser);

        User.create(newUser)
          .then(newBook => console.log("newBook", newBook))
          .catch(err => console.log("err", err));

        // newUser.save().then(user => console.log("user", user));

        // newUser.save(function(err, resp) {
        //   if (err) {
        //     console.log("YES ERROR", err);
        //     res.send({
        //       message: "something went wrong"
        //     });
        //   } else {
        //     console.log("NO ERR");
        //     res.send({
        //       message: "the appointment has been saved"
        //     });
        //   }
        // });

        // bcrypt.genSalt(10, (err, salt) => {
        //   bcrypt.hash(newUser.password, salt, (err, hash) => {
        //     if (err) throw err;
        //     newUser.password = hash;
        //     newUser
        //       .save()
        //       .then(user => res.json(user))
        //       .catch(err => console.log(err));
        //   });
        // });
      }
    });

    // const abc = {
    //   title: "test",
    //   author: "test"
    // };
    // User.create(abc)
    //   .then(newBook => res.json(newBook))
    //   .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("update");
    Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(book => res.json(book))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("remove");
    Book.findById({ _id: req.params.id })
      .then(book => book.remove())
      .then(allbooks => res.json(allbooks))
      .catch(err => res.status(422).json(err));
  }
};
