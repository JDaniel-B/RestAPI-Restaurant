import { Router } from "express";
import auth from "./auth.routes.js";
import { validateToken } from "../../middlewares/validator.token.js";
import user from "./user.routes.js";
import platillos from './platillos.routes.js'

const router = Router();

router.use("/auth", auth).use(validateToken).use("/user", user).use('/platillos', platillos)

export default router;
