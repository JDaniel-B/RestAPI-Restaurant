import { pool } from "../connect-bd.js";

export class authService {
  constructor() {
    this.pool = pool;
  }

  async login(data) {
    const [result] = await this.pool.query(
      `SELECT * FROM USUARIOS WHERE CORREO = ?`,
      [data.email]
    );
    return result;
  }
}
