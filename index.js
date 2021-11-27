const express = require("express");
const app = express();
require("dotenv").config();
const fs = require("fs");

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT}!`);
});

app.use(express.static("./public"));

app.get("/", (req, res) => {
  const data = fs.readFileSync("./views/index.html");
  res.send(`<h1>Hello World!${new Date(Date.now()).toLocaleString()}</h1>`);
});
