const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
require("dotenv").config();

exports.register = async (req, res) => {
  const { username, password,role = 'customer' } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query('INSERT INTO users (username, password,role) VALUES (?, ?, ?)', [username, hashedPassword,role]);

    res.status(201).json({ id: result.insertId, username });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log('Login request received:', req.body);
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = rows[0];
    console.log('User retrieved from database:', user);

    if (!user || !await bcrypt.compare(password, user.password)) {
      console.log('Invalid credentials');
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Generated JWT token:', token);

    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};
