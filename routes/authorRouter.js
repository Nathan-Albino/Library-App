import express from "express";
import * as authorController from "../controller/authorController.js";

//author Router
const router = express.Router();

//Author Index Route
router.get("/", authorController.authorIndex);

//New Author Route
router.get("/new", authorController.authorNew);

//Create Author Route
router.post("/", (req, res) => {
  res.send("test submitted successfully");
});

export { router as authorRouter };
