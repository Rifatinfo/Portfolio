import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.get("/", (req : Request, res : Response) => {
    res.status(200).json({
        message : "Welcome to Mongo Node Sever"
    })
})

export default app;
