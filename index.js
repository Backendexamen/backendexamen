import servidor from "./app/app.js";

servidor.listen(servidor.get("puerto"),()=>{
    console.log("ejecutando servidor en: http://localhost:3000/");
});