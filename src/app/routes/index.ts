import { Router } from "express";
import { BikeRoute } from "../modules/customer/customer.routes";

export const router = Router();

const moduleRouters = [
    {
        path : "/user",
        route : BikeRoute
    }
]

moduleRouters.forEach((route) => {
    router.use(route.path, route.route)
})