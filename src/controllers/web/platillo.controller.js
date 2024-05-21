import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { platillosService } from "../../services/web/platillos.service.js";
config();
const { SECRET_TOKEN } = process.env;

const service = new platillosService();

export const createPlatillo = async (res, req) => {
    const data = req.body 
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

export const readPlatillos = async (res, req) => {
    try {

        const result = service.read()
        res.send(result)

    } catch (err) {
        console.log(err)
        res.status(401).send({
            message:"Error de servidor"
        })
    }
}
