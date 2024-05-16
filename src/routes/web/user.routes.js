import { Router } from "express";
import { create, find } from "../../controllers/web/user.controller.js";
import { validatorHandler } from "../../middlewares/validator.handler.js";
import { createUserSchema } from "../../schemas/user.schema.js";
const router = Router();

router
  .get("/getMe")
  .get("/find", find)
  .post("/create", validatorHandler(createUserSchema, "body"), create)
  .patch("/update")
  .patch("/change-status");

export default router;
