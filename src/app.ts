import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req : Request, res : Response) => {
    res.status(200).json({
        message : "Welcome to Mongo Node Sever"
    })
})

export default app;
