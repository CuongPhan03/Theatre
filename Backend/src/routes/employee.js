const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.get('/getallrole', employeeController.getAllRole);
router.get('/:empId', employeeController.getAllInfo);
router.get('/', employeeController.getAllEmployee);
router.post('/insert', employeeController.insertEmployee);
router.put('/:empId', employeeController.updateEmployee);
router.delete('/:empId', employeeController.deleteEmployee);

module.exports = router;
