import pool from "../config/db.config.js";
import { completado, error } from "../messages/mensajes.js";
import bcrypt from "bcrypt";

export const mostrarproveedores = async(req,res)=>{
    try {
        const respuesta = await pool.query(`CALL sp_mostrarproveedores()`);
        completado(req,res, 200, respuesta[0]);
        
    } catch (err) {
        error(req,res, 500, err)
    }
};

export const insertarproveedor = async(req,res)=>{
    const nombre = req.body.nombre;
    const contacto=req.body.contacto;
    const empresa =req.body.empresa;
    try {
        const respuesta = await pool.query(`CALL sp_insertarproveedor('${nombre}', '${contacto}', '${empresa}')`)
        completado(req,res,200,"usuario insertado correctamente")
    } catch (err) {
        error(req,res,200,"usuario insertado incorrecto")
    }
};
export const mostrarproveedor =async(req,res)=>{
    const id =req.params['id'];
    try {
        const respuesta = await pool.query(`CALL sp_mostrarproveedor(${id})`);
        completado(req,res,200,respuesta[0])
    } catch (err) {
        error(req,res,500,err)
    }
};

export const eliminarproveedor =async(req,res)=>{
    const id =req.params['id'];
    try {
        const respuesta = await pool.query(`CALL sp_eliminarproveedor(${id})`);
        completado(req,res,200,respuesta[0])
    } catch (err) {
        error(req,res,500,err)
    }
};

export const modificarproveedor = async(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const contacto =req.body.contacto;
    const empresa=req.body.empresa;
    try {
        const respuesta = await pool.query(`CALL sp_modificarproveedor(${id}, '${nombre}', '${contacto}','${empresa}')`);
        if (respuesta[0].affectedRows==1) {
            completado(req,res,200,"usuario modificado");
        } else {
            completado(req,res,200,"no se pudo modificar");
        }
    } catch (err) {
        error(req,res, 400, err)
    }
};