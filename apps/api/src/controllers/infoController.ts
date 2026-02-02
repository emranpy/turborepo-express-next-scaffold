import { type Request, type Response } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "./../logs/logger.js";


const getInfoData = (req: Request, res: Response) => {
    logger.info("Health check endpoint was hit");
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Your Api is alive",
        error: {},
        data: {}
    });
};

export { getInfoData };