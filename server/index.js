const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mysql = require("mysql");
dotenv.config({ path: "./.env" });
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use("/user", require("./src/routes/user"));
app.use("/receipt", require("./src/routes/receipt"));

//Port de la app
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
