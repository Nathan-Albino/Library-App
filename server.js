import express from "express";
import { connect } from "http2";
import mongoose from "mongoose";

//create our app/server
const app = express();

//application settings
app.set("views", process.cwd() + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

//MongoDB URL - Local
const localURL = "mongodb://127.0.0.1:27017/Library-App";

//MongoDB URL - Atlas/Cloud

//Connect to DB, Listen for connections
async function connectDatabase() {
  try {
    await mongoose.connect(localURL);
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
}

connectDatabase().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("listening at port 3000");
  });
});
