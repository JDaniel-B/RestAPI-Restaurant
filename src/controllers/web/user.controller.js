import { authService } from "../../services/web/auth.service.js";
import { userService } from "../../services/web/user.service.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
import { generatePassword } from "../../utils/generate-password.js";
const { SECRET_TOKEN } = process.env;
const service = new userService();
const serviceAuth = new authService();

export const find = async (req, res, next) => {
  try {
    const result = await service.find();
    res.send({
      error: false,
      result,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  const data = req.body;
  try {
    const resultAuth = await serviceAuth.login(data);
    if (resultAuth.length > 0) {
      res.send({
        isValid: false,
        message: "Este usuario ya esta registrado",
      });
    } else {
      const { passwordHash, password } = await generatePassword();
      const user = await service.create(data, passwordHash);
      return res.send({
        isValid: true,
        message: "Usuario Creado Exitosamente",
        password,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  const Cookie = req.cookies.Auth;
  const decoded = jwt.decode(`${Cookie}`, SECRET_TOKEN);
  try {
    const user = await service.getMe(decoded?.ID);
    res.send(user[0]);
  } catch (error) {
    next(error);
  }
};
