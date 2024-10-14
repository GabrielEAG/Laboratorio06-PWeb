const {addUserController, showForm, showAllUsers} = require('../Controllers/user.controller');
const router = require('express').Router();

router.get('/', showForm);
router.post('/home', addUserController);
router.get('/allUsers', showAllUsers); 

module.exports = router;
