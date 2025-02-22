function adminMiddleware(req, res, next) {
  console.log("admin middleware calling..");
  const token = req.query.token;
  const isAdmin = token === "123";
  if (isAdmin) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

module.exports = {
  adminMiddleware,
};
