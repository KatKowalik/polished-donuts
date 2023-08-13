const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const users = require("../schema/users");
const bcrypt = require("bcryptjs");



const verifyCallback = (email: string, password: string, done: any) => {
    users.findOne({ email: email })
    .then((user: any) => {
        console.log(user)
        if (!user) {
            return done(null, false, { message: "The user doesn't exist" });
        }

        const checkPassword = bcrypt.compareSync(password, user.password);
        if (checkPassword) {
            console.log("Password is ok!", checkPassword);
            return done(null, user);
        } else {
            console.log("Wrong credentials");
            return done(null, false, { message: "Password not correct" });
        }
    })
    .catch((err: Error) => {
        console.error(err);
        done(err);
    });
};

const customFields = {
    usernameField: "email",
    passwordField: "password"
};

passport.serializeUser((user: any, done: any) => {
    process.nextTick(() => {
        done(null, user.id);
    })});

passport.deserializeUser((id: string, done: any) => {
    process.nextTick (() => {
        users.findById(id)
        .then((user: any) => {
            done(null, user);
        })
        .catch((err: Error) => {
            console.error(err);
            done(err);
        });
    })
});

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

module.exports = passport;
