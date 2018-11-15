const express = require("express");
const router = express.Router();
const User = require("../../models/signUpModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// @route   POST api/users/register
// @desc    Register user
// @access  Public

router.post("/register", (req, res) => {
  //   const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }

  console.log("register", req.body);

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).send("Email already exists");
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
// router.post("/login", (req, res) => {
//   // const { errors, isValid } = validateLoginInput(req.body);
//
//   // Check Validation
//   // if (!isValid) {
//   //   return res.status(400).json(errors);
//   // }
//
//   const email = req.body.email;
//   const password = req.body.password;
//
//   // Find user by email
//   User.findOne({email}).then(user => {
//     // Check for user
//     if (!user) {
//       errors.email = "User not found";
//       return res.status(404).json(errors);
//     }
//
//     // Check Password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         res.json({
//           success: true,
//           status: 200
//         });
//       } else {
//         console.log("error password")
//         // errors.password = "Password incorrect";
//         return res.status(400).send({
//           message: 'This is an error!'
//         });
//       }
//     });
//   });
// });

router.post("/login", (req, res) => {
  console.log("/login");

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      // errors.email = "User not found";
      return res.status(404).json({ email: "Email not found" });
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        // errors.password = "Password incorrect";
        // return res.status(400).json(errors);
        res.status(404).json({
          success: false,
          token: null,
          err: "Username or password is incorrect"
        });
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
