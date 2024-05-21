import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { authService } from "../../services/web/auth.service.js";
config();
const { SECRET_TOKEN } = process.env;

const serviceAuth = new authService();

const login = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await serviceAuth.login(data);
    if (result.length == 0) {
      return res.send({
        Auth: false,
        message: "Usuario o Contraseña Incorrectos",
      });
    } else {
      const validation = await bcrypt.compare(
        data.password,
        result[0].CONTRASEÑA
      );
      if (!validation) {
        return res.send({
          Auth: false,
          message: "Usuario o Contraseña Incorrectos",
        });
      } else {
        const token = jwt.sign(
          {
            name: `${result[0].NOMBRES} ${result[0].APELLIDOS}`,
            ID: result[0].idUsuario,
          },
          SECRET_TOKEN,
          { expiresIn: 84000 }
        );
        res.cookie("Auth", token, {
          maxAge: 3600000, // Duración de la cookie en milisegundos (1 hora en este caso)
          httpOnly: true, // Hace que la cookie sea accesible solo desde el servidor
          secure: true,
        });
        res.send({
          Auth: true,
          message: `BIENVENIDO DE NUEVO ${result[0].NOMBRES} ${result[0].APELLIDOS}`,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

export { login };
