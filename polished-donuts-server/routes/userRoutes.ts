const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter
    .route("/users")
    .post(userController.signUpUser)
    .get(userController.getUsers);

userRouter
    .route("/login")
    .post(userController.loginUser);
    
module.exports = userRouter;