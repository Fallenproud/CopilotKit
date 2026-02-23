const express = require('express');

const router = express.Router();

// POST /auth/login
router.post('/login', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// POST /auth/register
router.post('/register', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

module.exports = router;