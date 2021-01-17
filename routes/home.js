const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
});

module.exports = router;