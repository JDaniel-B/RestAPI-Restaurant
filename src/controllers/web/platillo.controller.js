import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { platillosService } from "../../services/web/platillos.service.js";
config();
const { SECRET_TOKEN } = process.env;

const service = new platillosService();

export const createPlatillo = async (req, res) => {
    const data = req.body ;

    console.log(data)
    try{
        if(data){
            const result = service.create(data);
            res.send({
                isValid: true, 
                message: "Platillo Agregado Correctamente"
            })
        } else {
            console.log("Falta Informacion")
        }
    } catch (err) {
        console.log(err)
    }
}

export const readPlatillos = async (req, res) => {
    try {

        const result = await service.read()
        res.send({
            error:false,
            result})

    } catch (err) {
        console.log(err)
        res.send({
            message:"Error de servidor"
        })
    }
}

export const estadoPlatillo = async (req, res) => {
    const data = req.body
    try {
        const result = service.deletePlatillo(data) 
        res.send({
            isValid:true, 
            message:"Estado actualizado con exito"
        })
    } catch (err) {
        console.log(err)
    }
}

export const updatePlatillo = async (req, res) => {
    const data = req.body 
    try {
        const result = service.updatePlatillo(data)
        res.send({
            isValid:true, 
            message:"Se actualizó correctamente"
        })
    } catch (err){
        console.log(err)
    }

}