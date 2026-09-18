const {Router}= require("express")
const enrutador = Router()
const mostrarRuta= require ("../controllers/rutaPruebaControllers")

enrutador.get("/rutaPersona1",(req,res)=>{
    res.json({mensaje : "es mi rutaPrueba y rutaPersonal1"})
})

enrutador.get("/usuarios",(req,res)=>{
    res.json({mensaje : "este es mi usuario"})
})

module.exports = enrutador