const passport = require("passport");
const JwtCookieComboStrategy = require('passport-jwt-cookiecombo');
require("dotenv").config();

const { SECRET_KEY } = process.env

passport.use(new JwtCookieComboStrategy({
    secretOrPublicKey: SECRET_KEY
}, 

(payload:any, done: Function) => {
    return done(null, payload.user);
})); 
