import express from "express";
import * as indexController from "../controller/indexController.js";

//index Router
const router = express.Router();

//root index Route
router.get("/", indexController.getIndex);

export { router as indexRouter };
