import express from "express";
import * as bookController from "../controller/bookController.js";

//books Router
const router = express.Router();

//Book Index Route
router.get("/", bookController.bookIndex);

//New Book Route
router.get("/new", bookController.bookNew);

//Create Book Route
router.post(
  "/",
  express.urlencoded({ extended: true }),
  bookController.createBook
);

export { router as bookRouter };
