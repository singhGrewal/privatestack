const express = require("express");
const router = express.Router();
const bookRoutes = require("./books");
const signUp = require("./auth/signup");
const path = require("path");

// API routes
router.use("/api/hello", bookRoutes);
router.use("/api/users", signUp);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

module.exports = router;
