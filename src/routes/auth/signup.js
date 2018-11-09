const router = require("express").Router();
const authController = require("../../container/authController");

console.log("signUPPPPPPPp");

router.route("/register").post(authController.create);

module.exports = router;
