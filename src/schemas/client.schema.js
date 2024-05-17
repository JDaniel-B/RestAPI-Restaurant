import Joi from "joi";

const createClientSchema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
  lastName: Joi.string().min(5).max(50).required(),
  nit: Joi.number().min(8).max(9).required(),
  email: Joi.string().email().required(),
  phone: Joi.number().min(8).max(8).required(),
});

const updateClientSchema = Joi.object({
  name: Joi.string().allow(null).min(5).max(50),
  lastName: Joi.string().allow(null).min(5).max(50),
  mit: Joi.number().allow(null).min(8).max(9),
  email: Joi.string().allow(null).email(),
  password: Joi.string()
    .allow(null)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{12,20}$/
    ),
  phone: Joi.number().allow(null).min(8).max(8),
});

const idClientSchema = Joi.object({
  id: Joi.number().required(),
});

export { createClientSchema, updateClientSchema, idClientSchema };
