import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../middlewares/catchAsync";
import { sendResponse } from "../../middlewares/sendResponse";
import { StatusCodes } from "http-status-codes";
import { PostService } from "./post.service";

const postService = new PostService();

export class PostController {
  createPost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log({
    //   file : req.file,
    //   body : req.body
    // });
    req.body = JSON.parse(req.body.data);
    const payload = {
      ...req.body,
      thumbnail : req.file?.path
    }
    const post = await postService.createPost(payload);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.CREATED,
      message: "Post created successfully",
      data: post,
    });
  });
  getPost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      const user = await postService.getUser();
  
      sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "User retrieved successfully",
        data: user,
      });
    });
  getPostById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const post = await postService.getPostById(req.params.id);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "Post retrieved successfully",
      data: post,
    });
  });
  updatePost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const post = await postService.updatePost(req.params.id, req.body);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "Post updated successfully",
      data: post,
    });
  });
  deletePost = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const post = await postService.deletePost(req.params.id);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: "Post deleted successfully",
      data: post,
    });
  });
}