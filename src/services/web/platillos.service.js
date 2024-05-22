import { pool } from "../connect-bd.js";

export class platillosService {
  constructor() {
    this.pool = pool;
  }
  async create(data) {
        const [result] = await this.pool.query("INSERT INTO PLATILLOS (NOMBRE, DESCRIPCION, PRECIO, ESTADO, URL_IMG, ID_USUARIO, CATEGORIA) VALUES (?, ?, ?, 1, ?, ?, ?)", [data.Nombre, data.Descripcion, data.Precio, data.Url, data.User])

        return result;
  } 

  async all(){
    const [result] = await this.pool.query("SELECT * FROM PLATILLOS")
    return result
  }

  async read(){
    const [result] = await this.pool.query("SELECT * FROM PLATILLOS WHERE ESTADO = 1")
    return result;
  }

  async deletePlatillo(data){
    if(data.Estado == 1){
        const [result] = await this.pool.query("UPDATE PLATILLOS SET ESTADO = 0 WHERE ID_PLATILLO = ?", [data.Platillo])
        return result
    } else if(data.Estado== 0){
        const [result] = await this.pool.query("UPDATE PLATILLOS SET ESTADO = 1 WHERE ID_PLATILLO = ?", [data.Platillo])
        return result
    }
        
  }

  async updatePlatillo(data){
    const [result] = await this.pool.query("UPDATE PLATILLOS SET NOMBRE = ?, DESCRIPCION = ?, PRECIO = ?, URL_IMG = ?, CATEGORIA = ? WHERE ID_PLATILLO = ?", [data.Nombre, data.Descripcion, data.Precio, data.Url, data.Platillo, data.Categoria]);
    return result
  }

}
