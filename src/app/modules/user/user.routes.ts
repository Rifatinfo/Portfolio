import { Router } from "express";
import { UserController } from "./user.controller";

const userController = new UserController();

const router = Router();

router.post("/", userController.createUser);
router.get("/", userController.getUser);
router.get("/:userId", userController.getUser);
router.put("/:userId", userController.updateUser);

export const UserRoute = router;


