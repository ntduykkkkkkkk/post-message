const router = require('express').Router();

router.use('/api/v1', require('./postMessage'));

module.exports = router;