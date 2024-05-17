import { pool } from "../connect-bd.js";

export class login {
  constructor() {
    this.pool = pool;
  }

  async login(data) {
    const [result] = await this.pool.query(
      `SELECT * FROM CLIENTES WHERE CORREO = ?`,
      [data.email]
    );
    return result;
  }
}
