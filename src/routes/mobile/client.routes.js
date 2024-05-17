import { Router } from "express";
import {
  find,
  register,
  update,
} from "../../controllers/mobile/client.controller.js";
import { validatorHandler } from "../../middlewares/validator.handler.js";
import {
  createClientSchema,
  idClientSchema,
  updateClientSchema,
} from "../../schemas/client.schema.js";

const router = Router();

router
  .post("/register", validatorHandler(createClientSchema, "body"), register)
  .get("/find", find)
  .patch(
    "/update",
    validatorHandler(idClientSchema, "params"),
    validatorHandler(updateClientSchema, "body"),
    update
  );

export default router;
