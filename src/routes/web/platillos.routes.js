import { Router } from "express";
import { createPlatillo, readPlatillos } from "../../controllers/web/platillo.controller.js";
const router = Router();

router
    .post('/createPlatillos', createPlatillo)
    .get('/readPlatillos', readPlatillos)

export default router;
