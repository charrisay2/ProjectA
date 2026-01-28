require('dotenv').config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/ViewEngine"
import initWebRoutes from "./routes/Web"
import connectDB from "./config/connectDB";

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

connectDB();

viewEngine(app);
initWebRoutes(app);
let port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log("backend nodejs is running on the port : " + port)
})