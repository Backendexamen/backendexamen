import { Router } from "express";


const rutaproveedor = Router();

rutaproveedor.post("/proveedor" , insertarproveedor);
rutaproveedor.get("/proveedor", mostrarproveedores);
rutaproveedor.put("/proveedor", modificarproveedor);
rutaproveedor.get("/proveedor/:id",mostrarproveedor);
rutaproveedor.delete("/proveedor/:id",eliminarproveedor);

export default rutaproveedor;