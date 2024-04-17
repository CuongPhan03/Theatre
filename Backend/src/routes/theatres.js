const express = require('express');
const router = express.Router();

const theatresController = require('../controllers/theatresController');

router.get('/getinfo', theatresController.getTheatre);
router.get('/getname', theatresController.getTheatreName);
router.get('/gettoprev', theatresController.getTopRevenue);
router.get('/', theatresController.getAllTheatreInfo);

module.exports = router;
