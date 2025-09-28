import { Router } from "express";
import { UserRoute } from "../modules/user/user.routes";
import { PostRoute } from "../modules/post/post.routes";
import { ProjectRoute } from "../modules/project/project.routes";

export const router = Router();

const moduleRouters = [
    {
        path : "/user",
        route : UserRoute    
    },
    {
        path : "/post",
        route : PostRoute    
    },
    {
        path : "/project",
        route : ProjectRoute    
    },
]

moduleRouters.forEach((route) => {
    router.use(route.path, route.route)
})