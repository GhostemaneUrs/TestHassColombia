const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mysql = require("mysql");
dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Tu conexion es exitosa!");
  }
});

//Port de la app
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
