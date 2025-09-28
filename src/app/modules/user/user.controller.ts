import { NextFunction, Request, Response } from "express";import { catchAsync } from "../../middlewares/catchAsync";
import { sendResponse } from "../../middlewares/sendResponse";
import { StatusCodes } from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { UserService } from "./user.service";

const userService = new UserService();

export class UserController {
  createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.createUser(req.body);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "User created successfully",
      data: user,
    });
  });

  getUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.getUser();

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "User retrieved successfully",
      data: user,
    });
  });

  getUserById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.getUserById(req.params.id);
    if(!user){
        throw new AppError(StatusCodes.NOT_FOUND, "User Not Found");
    }

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "Specific User retrieved successfully",
      data: user,
    });
  });

  updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.updateUser(req.params.id, req.body);
    if(!user){
        throw new AppError(StatusCodes.NOT_FOUND, "User Not Found");
    }

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "User Updated successfully",
      data: user,
    });
  });

}