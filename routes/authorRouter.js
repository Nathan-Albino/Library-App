import express from "express";
import * as authorController from "../controller/authorController.js";

//author Router
const router = express.Router();

router.get("/", authorController.authorIndex);

router.get("/new", authorController.authorNew);

export { router as authorRouter };
