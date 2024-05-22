import { Router } from "express";
import {
  createPlatillo,
  allPlatillos,
  readPlatillos,
  estadoPlatillo,
  updatePlatillo,
} from "../../controllers/web/platillo.controller.js";
const router = Router();

router
  .post("/createPlatillo", createPlatillo)
  .post("/allPlatillos", allPlatillos)
  .get("/readPlatillos", readPlatillos)
  .post("/updateEstado", estadoPlatillo)
  .post("/updatePlatillo", updatePlatillo);

export default router;
