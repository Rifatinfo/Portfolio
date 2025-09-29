import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../middlewares/catchAsync";
import { ProjectService } from "./project.service";
import { sendResponse } from "../../middlewares/sendResponse";
import { StatusCodes } from "http-status-codes";

const projectService = new ProjectService();

export class ProjectController {
  createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    const payload = {
      ...req.body,
      thumbnail : req.file?.path
    }
    const project = await projectService.createProject(payload);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "Project created successfully",
      data: project,
    });
  });

  getProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const project = await projectService.getProjects();

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "Project Retrieved successfully",
      data: project,
    });
  });

   updateProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const project = await projectService.updateProject(req.params.id, req.body);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "Project Update successfully",
      data: project,
    });
  });

   deleteProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const project = await projectService.updateProject(req.params.id, req.body);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "Project Delete successfully",
      data: project,
    });
  });
}