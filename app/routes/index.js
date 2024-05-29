import {Router} from "express";
import rutamain from "./routes.main.js";
import rutaproveedor from "./routes.proveedor.js";



const ruta = Router();

ruta.use("/",rutamain);
ruta.use("/",rutaproveedor);


export default ruta;