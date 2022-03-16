const express = require("express");
const path = require("path");
const app = express ();
const port = 3000;

app.use (express.static ("public"));

app.listen (process.env.PORT || 3030, () => console.log ("Server running")); 

app.get ("/", (req, res) => { res.sendFile (path.join (__dirname, "views/home.html")) });

app.get ("/register", (req, res) => { res.sendFile (path.join (__dirname, "views/register.html")) });

app.get ("/login", (req, res) => { res.sendFile (path.join (__dirname, "views/login.html")) });

/*app.get ("/imagenes", (req, res) => { res.sendFile (path.join(__dirname, "public/images/logo-mercado-liebre.svg")) });*/ //prueba