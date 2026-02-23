const express = require('express');
const router = express.Router();

// GET /data
router.get('/data', (req, res) => {
    res.status(501).send('Not implemented');
});

// POST /data
router.post('/data', (req, res) => {
    res.status(501).send('Not implemented');
});

module.exports = router;