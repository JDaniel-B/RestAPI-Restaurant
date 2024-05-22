import { pool } from "../connect-bd.js";

export class productoService {
  constructor() {
    this.pool = pool;
  }

  async create(data) {
    const [result] = this.pool.query("INSERT INTO PRODUCTOS (NOMBRE, EXISTENCIAS, MEDIDA, ESTADO, ID_USUARIO) VALUES (?, 0, ?, 1, ?)", [data.Nombre, data.Medida, data.Usuario])
    return result 
  }

  async all(){
    const [result] = await this.pool.query("SELECT * FROM PRODUCTOS")
    return result 
  }

  async read(){
    const [result] = await this.pool.query("SELECT * FROM PRODUCTOS WHERE ESTADO = 1")
    return result 
  }

  async deleteP(data){
    if(data.Estado == 1){
        const [result] = this.pool.query("UPDATE PRODUCTOS SET ESTADO = 0 WHERE ID_PRODUCTO = ?", [data.Producto])
        return result 
    } else if (data.Estado == 0) {
        const [result] = this.pool.query("UPDATE PRODUCTOS SET ESTADO = 1 WHERE ID_PRODUCTO = ?", [data.Producto])
        return result 
    }
  }

  async update(data){
    const [result] = this.pool.query("UPDATE PRODUCTOS SET NOMBRE = ?, MEDIDA = ? WHERE ID_PRODUCTO = ?", [data.Nombre, data.Medida, data.Producto])
    return result
  }

}