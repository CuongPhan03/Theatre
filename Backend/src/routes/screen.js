const express = require('express');
const router = express.Router();

const screenController = require('../controllers/screenController');

router.get('/', screenController.getscreen);
router.get('/chairs/info', screenController.getChairsInfo);
router.get('/chairs/all', screenController.getAllChair);
router.get('/foods', screenController.getFoodsInfo);

module.exports = router;
