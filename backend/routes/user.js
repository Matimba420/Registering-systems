const express = require('express');
const { user } = require('pg/lib/defaults');
const userController = require('../controllers/userController');
const router = express.Router();


router.post('/register', userController.register)

// Sign In with emp_id and password
router.post('/login', userController.logIn)

/**
 * delete user by emp_id
 */
// router.delete('/:id', userController.removeOne)

// /**
//  * update a user by emp_id
//  */
// router.put('/:id', userController.update)

module.exports = router
