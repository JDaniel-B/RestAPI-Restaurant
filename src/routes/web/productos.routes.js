import { Router } from "express";
import { createProducto, allProductos, readProductos, updateEstado, updateProducto } from "../../controllers/web/producto.controller.js";

const router = Router();

router 
    .post('/create', createProducto)
    .get('/all', allProductos)
    .get('/read', readProductos)
    .post('/estado', updateEstado)
    .post('/update', updateProducto)


    export default router;
