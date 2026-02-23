const express = require('express');

const router = express.Router();

// GET /notification
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// POST /notification
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

module.exports = router;