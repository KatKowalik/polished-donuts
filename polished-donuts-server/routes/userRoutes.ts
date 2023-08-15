import { NextFunction } from "express";
const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const passport = require('passport');



userRouter
    .route("/")
    .post(userController.signUpUser)
    .get(userController.getUsers);

userRouter
    .route('/login')
    .post()


module.exports = userRouter;