import { Router } from "express";
import auth from "./auth.routes.js";
import user from "./user.routes.js";
import platillos from './platillos.routes.js'

const router = Router();

router.use("/auth", auth).use("/user", user).use('/platillos', platillos)

export default router;
