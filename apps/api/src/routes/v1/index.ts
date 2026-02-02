import express from "express";
import {getInfoData} from "../../controllers/index.js"
//Virsion control routes

const router = express.Router();

router.get("/info", getInfoData)

export default router;