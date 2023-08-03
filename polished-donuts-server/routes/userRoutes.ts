const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.route("/users").post(userController.signUpUser);


module.exports = userRouter;