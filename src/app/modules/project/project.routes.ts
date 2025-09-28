import { Router } from "express";
import { ProjectController } from "./project.controller";

const projectController = new ProjectController();

const router = Router();

router.post("/", projectController.createProject);
router.get("/", projectController.getProject);
router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

export const ProjectRoute = router;
