const express = require('express');

const router = express.Router();

// GET /agent
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// POST /agent
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

module.exports = router;