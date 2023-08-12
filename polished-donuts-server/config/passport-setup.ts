const passport = require("passport");
const mongooseCtrl = require("mongoose");
const JwtCookieComboStrategy = require('passport-jwt-cookiecombo');
require("dotenv").config();
const users = require("../schema/users");
const bcrypt = require("bcryptjs")

mongooseCtrl.connect(process.env.DB_STRING);
const { SECRET_KEY } = process.env

const verifyCallback = (email: string, password: string, done: any) => {
    users.findOne({ email: email })
    .then((user: any) => {
        if (!user) {
            return done(null, false);
        }

        const checkPassword = bcrypt.compareSync(password, user.password);
        if (checkPassword) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
    .catch((err: Error) => done(err))
}

const customFields = {
    usernameField: "email",
    passwordField: "password"
}

const strategy = new JwtCookieComboStrategy({secretOrPublicKey: SECRET_KEY}, verifyCallback, customFields, {session: false});


passport.use(strategy);