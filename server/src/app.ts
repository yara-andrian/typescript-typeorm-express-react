import "reflect-metadata";
import express from "express";
import middlewares from "./middleware";
import { applyMiddleware } from "./utils";
import apiControllers from "./controllers/api";

const app = express();

applyMiddleware(middlewares, app);

app.use("/api", apiControllers);

export default app;
