import { pool } from "../connect-bd.js";

export class clientService {
  constructor() {
    this.pool = pool;
  }

  async find() {
    const [result] = await this.pool.query(`SELECT * FROM CLIENTES`, [
      data.email,
    ]);
    return result;
  }

  async register(data) {
    const [result] = await pool.query(
      `INSERT INTO CLIENTES (NOMBRES, APELLIDOS, NIT, CORREO, CONTRASENA, TELEFONO) VALUES (?, ?, ?, ?, ?, ?)`,
      [data.name, data.lastName, data.nit, data.email, passwordHash, data.phone]
    );
    return result;
  }

  async update(data) {
    const [rows] = await this.pool.query(
      `UPDATE usuarios SET NOMBRES = IFNULL(?, NOMBRES), APELLIDOS = IFNULL(?, APELLIDOS), NIT = IFNULL(?, NIT), CORREO = IFNULL(?, CORREO), CONTRASENA = IFNULL(?, CONTRASENA), TELEFONO = IFNULL(?, TELEFONO) WHERE ID_CLIENTE = ?`,
      [data.name, data.lastName, data.nit, data.email, passwordHash, data.phone]
    );
    return rows;
  }
}
