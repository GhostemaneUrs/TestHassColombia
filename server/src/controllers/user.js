const mysql = require("mysql");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.register = (req, res) => {
  data = req.body;
  const { idRegistro, name, email, password } = data;
  const sqlSelect = "SELECT * FROM login WHERE email = ?";
  const sqlRegister =
    "INSERT INTO login (idLogin, name, email, password, state) VALUES (?,?,?,?,?);";

  if (name === "" || email === "" || password === "") {
    res.status(400).send({
      message: "Please fill in all the data",
    });
  } else {
    if (email) {
      db.query(sqlSelect, [email], (err, result) => {
        if (result.length > 0) {
          res.status(400).send({
            message: "Email already exists",
          });
        } else {
          bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
              res.status(400).send({
                message: "Failed to encrypt password",
              });
            } else {
              db.query(
                sqlRegister,
                [idRegistro, name, email, hash, 1],
                (err, result) => {
                  if (err) {
                    res.status(400).send({
                      message: "Error creating user",
                    });
                    console.log(err);
                  } else {
                    res.status(200).send({
                      message: "User created successfully",
                    });
                  }
                }
              );
            }
          });
        }
      });
    }
  }
};

exports.login = (req, res) => {
  data = req.body;
  const { email, password } = data;
  const sqlLogin = "SELECT * FROM login WHERE email = ?";

  if (email === "" || password === "") {
    res.status(400).send({
      message: "Please fill in all the data",
    });
  } else {
    db.query(sqlLogin, [email], (err, result) => {
      if (err) {
        res.status(400).send({
          message: "Error login",
        });
      }
      bcrypt.compare(password, result[0].password, (err, result) => {
        if (err) {
          res.status(400).send({
            message: "Failed to encrypt password",
          });
        } else {
          if (result) {
            res.status(200).send({
              message: "Login successful",
            });
          } else {
            res.status(400).send({
              message: "Invalid credentials",
            });
          }
        }
      });
    });
  }
};
