import { Router } from "express";
import { PostController } from "./post.controller";
import { multerUpload } from "../../config/multer.config";

const postController = new PostController();

const router = Router();

router.post("/", multerUpload.single("file"),postController.createPost);
router.get("/", postController.getPost);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export const PostRoute = router;
