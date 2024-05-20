import { Router } from "express";
import client from "./client.routes.js";
import auth from "./auth.routes.js";

const router = Router();

router.use("/auth", auth).use("/client", client).use("/buy");

export default router;
