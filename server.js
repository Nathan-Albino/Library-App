import express from "express";
import mongoose from "mongoose";
import { indexRouter } from "./routes/indexRouter.js";
import "dotenv/config";

//create our app/server
const app = express();

//application settings
app.set("views", process.cwd() + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

//Connect to DB, Listen for connections
async function connectDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.log(error);
  }
}

//listen for connections at open port
connectDatabase().then(() => {
  console.log("Connected to Database");
  app.listen(process.env.PORT || 3000, () => {
    console.log("listening at port 3000");
  });
});

//routes
app.use("/", indexRouter);
