import { Router } from "express";
import { CustomerRoute } from "../modules/customer/customer.routes";

export const router = Router();

const moduleRouters = [
    {
        path : "/",
        route : CustomerRoute
    }
]

moduleRouters.forEach((route) => {
    router.use(route.path, route.route)
})