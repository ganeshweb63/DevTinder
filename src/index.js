const express = require("express");

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  const name = req.query.name;
  const response = `This is hello from ${name}`;
  console.log(response);
  res.send(response);
});
app.get("/age/:age", (req, res) => {
  const age = req.params.age;
  console.log(req.params);
  const response = `This is my age  ${age}`;
  console.log(response);
  res.send(response);
});
/// Last Route
app.use("/", (req, res) => {
  res.send("Welcome to Dev Tinder.");
});

app.listen(port, () => {
  console.log(`Server started successfully on ${port}`);
});
