const express = require("express");

const app = express();
const port = 3000;

app.use("/test", (req, res) => {
  res.send("This is testing");
});

/// Last Route
app.use("/", (req, res) => {
  res.send("Welcome to Dev Tinder.");
});

app.listen(port, () => {
  console.log(`Server started succesfully on ${port}`);
});
