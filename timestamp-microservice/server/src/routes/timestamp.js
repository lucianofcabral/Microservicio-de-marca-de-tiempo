const express = require('express');
const router = express.Router();
const TimestampController = require('../controllers/timestampController');

router.get('/:date_string', TimestampController.getTimestamp);

module.exports = router;