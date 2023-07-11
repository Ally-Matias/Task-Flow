const router = require('express').Router();

const taskController = require('../Controllers/taskController');

// Middlewares
const verifyToken = require('../Middlewares/verify-token');

// Rotas
router.get('/', taskController.getAll);
router.get('/mytasks', verifyToken, taskController.getMyTasks);
router.get('/:id', verifyToken, taskController.getTaskById);
router.post('/create', verifyToken, taskController.createTask);
router.delete('/:id', verifyToken, taskController.deleteTaskById);
router.patch('/:id', verifyToken, taskController.updateTaskById);

module.exports = router;
