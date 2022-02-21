const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.get('/getAll', attendanceController.getAll);
router.get('/getAllOneId/:emp_id', attendanceController.getAllOneId);
router.post('/attend', attendanceController.attend)

module.exports = router