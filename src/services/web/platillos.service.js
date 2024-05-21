import { pool } from "../connect-bd.js";

export class platillosService {
  constructor() {
    this.pool = pool;
  }
  async create(data) {
        const [result] = await this.pool.query("INSERT INTO PLATILLOS (NOMBRE, DESCRIPCION, PRECIO, ESTADO, URL_IMG, ID_USUARIO) VALUES (?, ?, ?, 1, ?, ?)", [data.Nombre, data.Descripcion, data.Precio, data.Url, data.User])

        return result;
  } 

  async read(){
    const [result] = await this.pool.query("SELECT * FROM PLATILLOS")
    return result;
  }

}
