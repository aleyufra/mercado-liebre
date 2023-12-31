const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, './public')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("el servidor se conecto en el puerto 3000")
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/inicio.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html")); 
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html")); 
})