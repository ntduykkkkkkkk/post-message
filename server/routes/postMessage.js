const express = require('express');

const router = express.Router();

const postMessage = require('../controllers/postMessage');

router.get('/postMessage', postMessage.get);
router.get('/postMessage/:id', postMessage.getOne);
router.post('/postMessage', postMessage.create);
router.put('/postMessage/:id', postMessage.update);
router.delete('/postMessage/:id', postMessage.deleteOne);

module.exports = router;