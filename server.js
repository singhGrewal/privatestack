// const express = require("express");
// var bodyParser = require("body-parser");
// const routes = require("./src/routes");
// const PORT = process.env.PORT || 5000;
// const path = require("path");
// const app = express();

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // require db connection
// require("./src/models");

// // configure body parser for AJAX requests
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // add this line
// app.use(express.static("client/build"));

// // // routes
// // app.get("/api/users/register", (req, res) => {
// //   console.log("req 11111", req.body);
// //   res.send("Hello from MERN");
// // });

// app.use(bodyParser.json());

// app.use(routes);

// // Bootstrap server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}.`);
// });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
console.log("Server")
app.use("/api/users", users);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
