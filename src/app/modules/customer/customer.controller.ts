import { NextFunction, Request, Response } from "express";
import { CustomerService } from "./customer.service";
import { catchAsync } from "../../middlewares/catchAsync";
import { sendResponse } from "../../middlewares/sendResponse";
import { StatusCodes } from "http-status-codes";
import AppError from "../../errorHelpers/AppError";

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

  getCustomerById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const customer = await customerService.getCustomerById(req.params.customerId);
    if(!customer){
        throw new AppError(StatusCodes.NOT_FOUND, "Customer Not Found");
    }

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "Specific Customer retrieved successfully",
      data: customer,
    });
  });

  updateCustomer = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const customer = await customerService.updateCustomer(req.params.customerId, req.body);
    if(!customer){
        throw new AppError(StatusCodes.NOT_FOUND, "Customer Not Found");
    }

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "Customer Updated successfully",
      data: customer,
    });
  });

}