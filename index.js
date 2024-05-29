import servidor from "./app.js";

servidor.listen(servidor.get("puerto"),()=>{
    console.log("ejecutando servidor en: http://localhost:3000/");
});