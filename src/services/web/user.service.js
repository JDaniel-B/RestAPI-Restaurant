import { pool } from "../connect-bd.js";

export class userService {
  constructor() {
    this.pool = pool;
  }

  async find() {
    const [result] = await this.pool.query(`SELECT * FROM USUARIOS`);
    return result;
  }

  async create(data, passwordHash) {
    const [result] = await pool.query(
      `INSERT INTO USUARIOS (NOMBRES, APELLIDOS, CONTRASEÑA, CORREO, NIVEL) VALUES (?, ?, ?, ?, ?)`,
      [data.name, data.lastName, passwordHash, data.email, data.rol]
    );
    return result;
  }

  async getMe(id) {
    const [result] = await this.pool.query(
      `SELECT ID_USUARIO, NOMBRES, APELLIDOS, CORREO, NIVEL FROM USUARIOS WHERE ID_USUARIO = ?`,
      [id]
    );
    return result;
  }
}
