import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { productoService } from "../../services/web/producto.service.js";
config();


const service = new productoService;

export const createProducto = async (req, res) => {
    const data = req.body
    try{
        if(data){
            const result = service.create(data) 
            res.send({
                isValid:true, 
                message:"Producto creado correctamente"
            })
        } else {
            console.log("No se encontro información")
        }
    } catch(err){
        console.log(err)
    }   
}

export const allProductos = async (req, res) => {
    try {
        const result = service.all()
        res.send({
            error:false, 
            result
        })
    } catch(err){
        console.log(err)
    }
}

export const readProductos = async (req, res) => {
    try{
        const result = service.read()
        res.send({
            error:false, 
            result
        })
    } catch(err) {
        console.log(err)
    }
}

export const updateEstado = async (req, res) => {
    const data = req.body 
    try{
        if(data){
            const result = service.deleteP(data)
            res.send({
                isValid:true, 
                message:"Estado actualizado correctamente"
            })
        } else {
            console.log("Falta información")
        }
    } catch(err){
        console.log(err)
    }
}

export const updateProducto = async (req, res) => {
    const data = req.body 
    try{
        if(data){
            const result = service.update(data)
            res.send({
                isValid:true, 
                message:"Producto actualizado correctamente"
            })
        }
    } catch(err){
        console.log(err)
    }
}