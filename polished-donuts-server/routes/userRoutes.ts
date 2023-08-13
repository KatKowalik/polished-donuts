import { NextFunction } from "express";
const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const passport = require('passport');


userRouter
    .route("/")
    .post(userController.signUpUser)
    .get(userController.getUsers);

userRouter
    .post('/login', (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('local', {
            session: true,
            successRedirect: '/',
            failureRedirect: '/login',
            keepSessionInfo: true
        })(req, res, next)
    })


module.exports = userRouter;