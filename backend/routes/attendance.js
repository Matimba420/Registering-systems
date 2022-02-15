const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

router.get('/getAll', attendanceController.getAll);
router.get('/getById', attendanceController.getAllOneId);
router.get('/attend', attendanceController.attend)

module.exports = router