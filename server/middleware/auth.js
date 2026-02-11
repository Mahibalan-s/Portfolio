const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: "Not authorized" });

  try {
    jwt.verify(token, "secretkey");
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = protect;
