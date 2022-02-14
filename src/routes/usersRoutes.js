const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users', usersController.usersIndex);
router.post('/users', usersController.createUser);
// router.delete('/memberships/:id', membershipsController.removeMembership);

module.exports = router;
