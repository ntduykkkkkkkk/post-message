const router = require('express').Router();

router.use('/api/v1', require('./postMessage'));
router.use('/api/v1', require('./user'));

module.exports = router;