import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/errorHandler";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req : Request, res : Response) => {
    res.status(200).json({
        message : "Welcome to Mongo Node Sever"
    })
})

app.use(globalErrorHandler);

export default app;
