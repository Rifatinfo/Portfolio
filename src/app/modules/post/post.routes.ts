import { Router } from "express";
import { PostController } from "./post.controller";

const postController = new PostController();

const router = Router();

router.post("/", postController.createPost);
router.get("/", postController.getPost);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export const PostRoute = router;
