import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoute from "./Routes/posts.js";

// require=>>
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// app use midlle-ware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// DB Connection
const connectUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.db01v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(connectUrl)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

//
//
// Route===>
app.use("/posts", postRoute);
