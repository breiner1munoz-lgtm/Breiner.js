import express from 'express';
import {configDotenv} from "dotenv"
configDotenv()

const app = express();

const port =process.env.PUERTO || 3030;

app.get("/", (req, res) => {
    res.send("A kevin le gusta el petuche");
});
app.get("/ruta1", (req, res) => {
    res.send("<h1>Usando res.send</h1");
});
app.get("/ruta2", (req, res) => {
    res.json({"dev":"node --watch app.js","script":"node app.js"});
});
app.get("/ruta3/:nombre/:apellido",(req, res) => {
   const NameUsuario = req.params.nombre;
   const apellidoUsuario = req.params.apellido;
   res.json({"usuario":NameUsuario, "apellido":apellidoUsuario})
});

app.get("/ruta4",(req,res) => {
    const numero=req.query.phone || 35767324568
    const orden = req.query.orden || "Sin orden"
    const pagina = req.query.pagina || 1
    res.send(`<h1>Listado aprendices</h1>
    <h2>El listado en orden: ${orden}</h2>
    <p>Pagina: ${pagina}</p>
    <h3>Numero: ${numero}</h3>
    `)
});

app.get("/ruta5/:saludo/:nombre",(req,res) => {
   const nombre = req.params.nombre;

    if (nombre.length < 3) {
        return res.status(400).send("Error: el nombre debe tener al menos 3 letras");
    }

    res.send(`Hola, como estas, ${nombre}, bienvenido`);
    
});


app.get("/ruta6/:productos/:nombre", (req, res) => {
    const nombre = req.params.nombre;

    res.json({
        id: 1,
        nombre: nombre, 
        cantidadStock: 20,
        precioUnitario: 15000,
        categoria: "General"
    });
});

app.get("/ruta7/:productos/:categoria/:id", (req, res) => {
    const categoria = req.params.categoria;
    const id = req.params.id;

    res.json({
        producto: id,
        categoria: categoria,
        servidor: "Servidor Node.js con express "
    });
});

app.listen(port, () => {
    console.log(`Servidor: htpp://localhost: ${port}`);
});