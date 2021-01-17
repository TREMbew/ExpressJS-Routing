const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/services', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'services.html'))
});

module.exports = router;