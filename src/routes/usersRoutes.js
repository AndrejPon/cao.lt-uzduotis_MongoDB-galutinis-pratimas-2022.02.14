const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users', usersController.usersIndex);
router.post('/users', usersController.createUser);
router.get('/users/:order', usersController.orderedUsersIndex);

module.exports = router;
