const express = require("express");

const cors = require("cors");

const shoppingRouter = require("../routes/shoppingRouter");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Backend Developer!");
});

app.get("/api/", (req, res) => {
  res.send("My super duper TeamGBT!");
});

app.use("/api/shopping", shoppingRouter);

app.get("/api/:id/:name", (req, res) => {
  console.log(req.params);
  req.send(req.params);
});

module.exports = app;
