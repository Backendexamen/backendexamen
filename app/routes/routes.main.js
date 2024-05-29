import {Router} from "express";

const rutamain = Router();

rutamain.get("/", (req,res)=>{
    res.json("ruta principal");
});

export default rutamain;