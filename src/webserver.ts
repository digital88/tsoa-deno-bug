// @deno-types="@types/express"
import express from "express";
import { RegisterRoutes } from "../api/routes.ts";

const app = express();

RegisterRoutes(app);

app.listen(8080, "127.0.0.1");
