const express = require('express');

const router = express.Router();

// GET /user
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// PATCH /user/:id
router.patch('/:id', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

module.exports = router;