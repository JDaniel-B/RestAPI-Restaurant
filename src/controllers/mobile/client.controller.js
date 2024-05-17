import { clientService } from "../../services/mobile/client.service.js";
import { authService } from "../../services/web/auth.service.js";
import { generatePassword } from "../../utils/generate-password.js";

const service = new clientService();
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

const register = async (req, res, next) => {
  const data = req.body;
  try {
    const resultAuth = await serviceAuth.login(data);
    if (resultAuth.length > 0) {
      res.send({
        isValid: false,
        message: "Este usuario ya esta registrado",
      });
    } else {
      const passwordHash = await generatePassword();
      const user = await service.register(data, passwordHash);
      return res.send({
        isValid: true,
        message: "Usuario Creado Exitosamente",
      });
    }
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  try {
  } catch (error) {
    next(error);
  }
};

export { find, register, update };
