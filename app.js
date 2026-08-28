const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PUERTO || 3000;

// ========================================
// MIDDLEWARE
// ========================================

// Permite recibir datos en formato JSON
app.use(express.json());

// Permite recibir datos de formularios
app.use(express.urlencoded({ extended: true }));


// ========================================
// RUTA PRINCIPAL
// ========================================

app.get("/", (req, res) => {
    res.send("Aprendices ficha 3407186");
});


// ========================================
// CRUD APRENDICES
// ========================================

// GET - listar aprendices
app.get("/api/aprendices", (req, res) => {
    res.json({
        mensaje: "lista de aprendices"
    });
});


// POST - crear aprendiz
app.post("/api/aprendices", (req, res) => {
    res.status(201).json({
        mensaje: "crear aprendiz"
    });
});


// PUT - editar aprendiz por ID
app.put("/api/aprendices/:id", (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        mensaje: `Editar aprendiz con id ${id}`
    });
});


// DELETE - eliminar aprendiz por ID
app.delete("/api/aprendices/:id", (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        mensaje: `Eliminar aprendiz con id ${id}`
    });
});


// ========================================
// RECIBIR DATOS JSON
// ========================================

app.post("/rutaJson", (req, res) => {

    const todosDatos = req.body;
    const edad = Number(req.body.edad2);

    let mensaje;

    if (edad >= 18) {
        mensaje = "es mayor";
    } else {
        mensaje = "es menor";
    }

    res.json({
        mensaje: mensaje,
        datosJson: todosDatos
    });
});


// ========================================
// RECIBIR DATOS DE FORMULARIO
// ========================================

app.post("/ruta/formulario", (req, res) => {

    const todosDatos = req.body;
    const programa = req.body.programa;

    res.json({
        todosDatos: todosDatos,
        Miprograma: programa
    });
});


// ========================================
// INICIAR SERVIDOR
// ========================================

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});