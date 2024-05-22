import { Router } from "express";
import { login } from "../../controllers/web/auth.controller.js";

const router = Router();

router.post("/login", login);

export default router;
