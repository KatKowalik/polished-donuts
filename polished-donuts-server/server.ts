import express, {Express} from 'express';
const app: Express = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const mongoose = require("mongoose");
const donutRoutes = require("./routes/donutRoutes")
const JwtCookieComboStrategy = require('passport-jwt-cookiecombo');


mongoose.connect("mongodb://localhost/polished-donutsdb");
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use('/', donutRoutes);

// passport.use(new JwtCookieComboStrategy({
//     secretOrPublicKey: 'StRoNGs3crE7'
// }, (payload, done) => {
//     return done(null, payload.user);
// }));

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});