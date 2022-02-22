const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.get('/getAll', attendanceController.getAll);
router.get('/getAllOneId/:emp_id', attendanceController.getAllOneId);
router.post('/attend/:emp_id/:temp/:have_covid', attendanceController.attend)

module.exports = router