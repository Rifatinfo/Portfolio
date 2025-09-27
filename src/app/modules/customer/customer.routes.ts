import { Router } from "express";
import { CustomerController } from "./customer.controller";

const customerController = new CustomerController();

const router = Router();

router.post("/customers", customerController.createCustomer);
router.get("/", customerController.getCustomer);

export const CustomerRoute = router;


