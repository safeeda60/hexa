const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;
const SECRET_KEY = "my_secret_key"; // ⚠️ put in .env in production

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy users (replace with DB later)
const users = [
  {
    id: 1,
    email: "test@example.com",
    password: bcrypt.hashSync("123456", 8), // hashed password
  },
];

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(400).json({ success: false, message: "User not found" });
  }

  // Check password
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid password" });
  }

  // Create token
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ success: true, token });
});

// Protected route example
app.get("/api/dashboard", (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "No token" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ success: false, message: "Invalid token" });
    res.json({ success: true, message: `Welcome ${user.email}!` });
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
