const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "pokemondb",
});

app.post("/create", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const type = req.body.type;

  db.query(
    "INSERT INTO pokemon (pokemonid, type, name) VALUES (?,?,?)",
    [id, name, type],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yeay, your server is running on port 3001");
});
