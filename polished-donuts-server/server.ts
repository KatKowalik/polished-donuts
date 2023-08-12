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


mongoose.connect("mongodb://localhost/polished-donutsdb");
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use(cookieParser());

app.use('/', donutRoutes);
app.use("/", userRoutes)

app.use('/api/v1', passport.authenticate('jwt-cookiecombo', {
    session: false
}), (req, res, next) => {
    return next();
});


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});
