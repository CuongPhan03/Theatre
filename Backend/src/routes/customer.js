const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/bill/all', customerController.getAllBill);
router.get('/bill/some', customerController.getSomeBill);
router.post('/bill/create', customerController.createBill);
router.get('/discount', customerController.getDiscount);
router.post('/bill/submit', customerController.submitBill);
router.get('/', customerController.getCustomer);

module.exports = router;
