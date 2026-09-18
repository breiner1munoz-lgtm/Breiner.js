const {Router}= require("express")
const enrutador = Router()
const mostrarRutaUsuario= require ("../controllers/usuarioPruebaControllers")

enrutador.get("/rutaUsuario", mostrarRutaUsuario)

    module.exports = enrutador
