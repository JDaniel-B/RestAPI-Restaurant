import { Router } from "express";
import { createPlatillo, readPlatillos, estadoPlatillo, updatePlatillo } from "../../controllers/web/platillo.controller.js";
const router = Router();

router
    .post('/createPlatillo', createPlatillo)
    .get('/readPlatillos', readPlatillos)
    .post('/updateEstado', estadoPlatillo)
    .post('/updatePlatillo', updatePlatillo)

export default router;
