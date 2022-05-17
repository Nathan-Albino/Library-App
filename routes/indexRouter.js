import express from "express";
import * as indexController from "../controller/indexController.js";

const router = express.Router();

router.get("/", indexController.getIndex);

export { router as indexRouter };
