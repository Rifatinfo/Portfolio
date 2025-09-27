import { Router } from "express";
import { CustomerController } from "./customer.controller";

const customerController = new CustomerController();

const router = Router();

router.post("/customers", customerController.createCustomer);
router.get("/", customerController.getCustomer);
router.get("/:customerId", customerController.getCustomerById);
router.put("/:customerId", customerController.updateCustomer);

export const CustomerRoute = router;


