const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const passport = require('passport')


userRouter
    .route("/users")
    .post(userController.signUpUser)
    .get(userController.getUsers);

userRouter
    .route("/login")
    .post(passport.authenticate('jwt-cookiecombo'), userController.loginUser)


module.exports = userRouter;