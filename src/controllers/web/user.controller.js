import { authService } from "../../services/web/auth.service.js";
import { userService } from "../../services/web/user.service.js";
import { generatePassword } from "../../utils/generate-password.js";
import bcrypt from "bcrypt";

const service = new userService();
const serviceAuth = new authService();

const find = async (req, res, next) => {
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

const create = async (req, res, next) => {
  const data = req.body;
  try {
    const resultAuth = await serviceAuth.login(data);
    if (resultAuth.length > 0) {
      res.send({
        isValid: false,
        message: "Este usuario ya esta registrado",
      });
    } else {
      const contrasenaSegura = generatePassword();
      let passwordHash = await bcrypt.hash(contrasenaSegura, 10);
      const user = await service.create(data, passwordHash);
      console.log(contrasenaSegura);
      return res.send({
        isValid: true, 
        message: "Usuario Creado Exitosamente",
        contrasenaSegura,
      });
    }
  } catch (error) {
    next(error);
  }
};

export { find, create };
