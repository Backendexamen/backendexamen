import express from "express";
import { config } from "dotenv";
import ruta from "./routes/index.js";
config();

const servidor = express();

servidor.use(express.json());

servidor.use(express.urlencoded({
    extended: true
}));

servidor.set("puerto", process.env.PUERTO || 6000);

servidor.use('/', ruta);

export default servidor;