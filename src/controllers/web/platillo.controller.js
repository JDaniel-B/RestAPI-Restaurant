import { platillosService } from "../../services/web/platillos.service.js";

const service = new platillosService();

export const createPlatillo = async (req, res, next) => {
  const data = req.body;

  try {
    if (data) {
      const result = service.create(data);
      res.send({
        isValid: true,
        message: "Platillo Agregado Correctamente",
      });
    } else {
      console.log("Falta Informacion");
    }
  } catch (err) {
    next(err);
  }
};

export const allPlatillos = async (req, res, next) => {
  try {
    const result = service.all();
    res.send({
      error: false,
      result,
    });
  } catch (err) {
    next(err);
  }
};

export const readPlatillos = async (req, res, next) => {
  try {
    const result = await service.read();
    res.send({
      error: false,
      result,
    });
  } catch (err) {
    next(err);
  }
};

export const estadoPlatillo = async (req, res, next) => {
  const data = req.body;
  try {
    const result = service.deletePlatillo(data);
    res.send({
      isValid: true,
      message: "Estado actualizado con exito",
    });
  } catch (err) {
    next(err);
  }
};

export const updatePlatillo = async (req, res, next) => {
  const data = req.body;
  try {
    const result = service.updatePlatillo(data);
    res.send({
      isValid: true,
      message: "Se actualizó correctamente",
    });
  } catch (err) {
    next(err);
  }
};
