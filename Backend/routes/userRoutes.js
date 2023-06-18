const router = require('express').Router();

// Import do Controller dos usuários.
const userController = require('../Controllers/userController');

// Rota para registrar um usuário.
router.post('/register', userController.register);

// Rota para realizar o login de um usuário.
router.post('/login', userController.login);

// Rota para verificar se um usuário está autenticado.
router.get('/checkUser', userController.checkUser);

// Exporta o router para uso em outros módulos.
module.exports = router;