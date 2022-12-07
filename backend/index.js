const express = require("express");
app = express();
var cors = require("cors");

const { pool } = require("./dbconfig");

//GET REQUESTS
app.get("/api/students", (req, res) => {
  pool.query("SELECT * FROM students", [], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

// POST REQUESTs
app.post("/api/register", (req, res) =>
  pool.query(
    "INSERT INTO students VALUES($1,$2,$3)",
    [req.query.rollno, req.query.name, req.query.email],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(results.rows);
      }
    }
  )
);

app.listen(3000);
