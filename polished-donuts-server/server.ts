import express, {Express} from 'express';
const app: Express = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const mongoose = require("mongoose");
const donutRoutes = require("./routes/donutRoutes");
const userRoutes = require("./routes/userRoutes");
const passportSetup = require("./config/passport-setup");
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
require('./config/passport-setup');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("./public"));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log(req.body.session)
})

const MongoStore = require('connect-mongo');

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

passport.serializeUser(function(user: any, cb: any) {
    cb(null, user.id);
});

passport.deserializeUser(function(id: string, cb: any) {
    users.findById(id, function (err: Error, user:any) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

app.use('/', donutRoutes);
app.use("/", userRoutes)


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});
