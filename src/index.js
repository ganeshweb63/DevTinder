const express = require("express");
const { adminMiddleware } = require("./middlewares/auth");
const app = express();
const port = 3000;

/// base middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

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

app.use("/admin/getData", adminMiddleware, (req, res, next) => {
  // throw Error("Error");
  res.send("Iam admin");
});

/// Last Route
// handle error case
//4 params = err, 3 params = next
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!"); // Handle all Unhandled errors
  } else {
    res.send("Welcome to Dev Tinder.");
  }
});

app.listen(port, () => {
  console.log(`Server started successfully on ${port}`);
});
