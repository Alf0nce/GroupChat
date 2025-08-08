const express = require("express");
const router = express.Router();
const { registerUser } = require('../controlllers/authController')

router.post('/register', (req, res) => {
  const { username } = req.body;
  res.status(201).json({ message: 'User registered', username });
});

module.exports = router;