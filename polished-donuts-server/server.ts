import express, {Express} from 'express';
const app: Express = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const mongoose = require("mongoose");
const donutRoutes = require("./routes/donutRoutes");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
require('./config/passport-setup');
const bodyParser = require("body-parser");

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("./public"));
app.use(cookieParser());



const MongoStore = require('connect-mongo');

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ 
        mongoUrl: process.env.DB_STRING, 
        collection: "sessions" }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// passport.serializeUser((user: any, done: any) => {
//     done(null, user.id);
//     console.log(user, "serialized");
//     console.log(user.id);
// });

// passport.deserializeUser((id: string, done: any) => {
//     users.findById(id)
//         .then((user: any) => {
//             console.log(id);
//             done(null, user);
//         })
//         .catch((err: Error) => done(err))
// });

app.use(passport.initialize());
app.use(passport.authenticate("session"));


app.use('/donuts', donutRoutes);
app.use('/users', userRoutes);


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});
