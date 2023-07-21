import express, {Express} from 'express';
const app: Express = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const mongoose = require("mongoose");
const donutRoutes = require("./routes/donutRoutes")


mongoose.connect("mongodb://localhost/polished-donutsdb");
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use('/', donutRoutes);



app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});