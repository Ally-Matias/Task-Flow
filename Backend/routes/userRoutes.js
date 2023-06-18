const router = require('express').Router();

const userController = require('../Controllers/userController');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/checkUser',userController.checkUser);

module.exports = router;
