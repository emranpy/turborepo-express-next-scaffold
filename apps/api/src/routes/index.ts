import express from "express";
import v1router from "./v1/index.js"
//Virsion control routes

const router = express.Router();

router.use("/v1", v1router)



export default router