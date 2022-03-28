const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.getReceipts = (req, res) => {
  sqlGetReceipts = "SELECT * FROM productos WHERE state = 1;";
  db.query(sqlGetReceipts, (err, result) => {
    if (err) {
      res.status(400).send({
        message: "Error getting receipts",
      });
    } else {
      res.status(200).send(result);
    }
  });
};

exports.deleteReceipt = (req, res) => {
  const idProductos = req.params.idProductos;
  const sqlDeleteReceipt =
    "UPDATE productos SET state = 0 WHERE idProductos = ?;";
  if (idProductos) {
    db.query(sqlDeleteReceipt, [idProductos], (err, result) => {
      if (result) {
        res.status(200).send({
          message: "Receipt deleted successfully",
        });
      } else {
        res.status(400).send({
          message: "Error deleting receipt",
        });
      }
    });
  } else {
    res.status(400).send({
      message: "Empty fields",
    });
  }
};

exports.createReceipt = (req, res) => {
  data = req.body;
  const {
    status,
    owner,
    weight,
    creationDate,
    price,
    unitPrice,
    createBy,
    direction,
  } = data;
  const sqlCreateReceipt =
    "INSERT INTO productos (estado, titular, peso, fecha_creacion, precio, precio_unidad, creado_por, direccion, state) VALUES (?,?,?,?,?,?,?,?,?);";
  if (status === "" || owner === "" || creationDate === "" || price === "") {
    res.status(400).send({
      message: "All fields are required",
    });
  } else {
    db.query(
      sqlCreateReceipt,
      [
        status,
        owner,
        weight,
        creationDate,
        price,
        unitPrice,
        createBy,
        direction,
        1,
      ],
      (err, result) => {
        if (result) {
          sqlGetReceipts = "SELECT * FROM productos WHERE idProductos = ?;";
          db.query(sqlGetReceipts, [result.insertId], (err, result) => {
            if (result) {
              res.status(200).send(result);
            } else {
              res.status(400).send({
                message: "Error get receipt",
              });
            }
          });
        } else {
          res.status(400).send({
            message: "Error creating receipt",
          });
        }
      }
    );
  }
};

exports.editReceipt = (req, res) => {
  data = req.body;
  const {
    titular,
    peso,
    fecha_creacion,
    precio,
    precio_unidad,
    creado_por,
    direccion,
    idProductos,
  } = data;
  const sqlEditReceipt =
    "UPDATE productos SET titular = ?, peso = ?, fecha_creacion = ?, precio = ?, precio_unidad = ?, creado_por = ?, direccion = ? WHERE idProductos = ?;";
  if (idProductos && titular && fecha_creacion && precio) {
    db.query(
      sqlEditReceipt,
      [
        titular,
        peso,
        fecha_creacion,
        precio,
        precio_unidad,
        creado_por,
        direccion,
        idProductos,
      ],
      (err, result) => {
        if (result) {
          res.status(200).send({
            message: "Receipt edited successfully",
          });
        } else {
          res.status(400).send({
            message: "Error editing receipt",
          });
        }
      }
    );
  } else {
    res.status(400).send({
      message: "Empty fields",
    });
  }
};
