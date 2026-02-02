import { type Request, type Response } from "express";
import { StatusCodes } from "http-status-codes";

const getInfoData = (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Your Api is alive",
        error: {},
        data: {}
    });
};

export { getInfoData };