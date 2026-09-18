require("dotenv").config()
const express = require("express")

const enrutador = require("./routers")

const app = express ()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", enrutador)


app.get("/",(req,res)=>{
    res.send("API,rest estructurando en capas")
})

module.exports = app