import { Router } from "express";
import { create, find, getMe } from "../../controllers/web/user.controller.js";
import { validatorHandler } from "../../middlewares/validator.handler.js";
import { createUserSchema } from "../../schemas/user.schema.js";
const router = Router();

router
  .post("/getMe", getMe)
  .get("/find", find)
  .post("/create", validatorHandler(createUserSchema, "body"), create)
  .patch("/update")
  .patch("/change-status");

export default router;
