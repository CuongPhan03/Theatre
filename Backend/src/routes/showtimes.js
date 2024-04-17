const express = require('express');
const router = express.Router();

const showtimesController = require('../controllers/showtimesController');

router.get('/:filmId', showtimesController.getShowtimes);

module.exports = router;
