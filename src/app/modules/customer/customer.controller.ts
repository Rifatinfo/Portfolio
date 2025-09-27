import { NextFunction, Request, Response } from "express";
import { CustomerService } from "./customer.service";
import { catchAsync } from "../../middlewares/catchAsync";
import { sendResponse } from "../../middlewares/sendResponse";
import { StatusCodes } from "http-status-codes";

const customerService = new CustomerService();

export class CustomerController {
  createCustomer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const customer = await customerService.createCustomer(req.body);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "User created successfully",
      data: customer,
    });
  });

  getCustomer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const customer = await customerService.getCustomers();

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "User retrieved successfully",
      data: customer,
    });
  });

}