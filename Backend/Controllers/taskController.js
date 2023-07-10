// Importação de modelos.
const Task = require('../Models/Task');

// Helpers
const getToken = require('../Helpers/get-token');
const getUserByToken = require('../Helpers/get-user-by-token');
const sendError = require('../Helpers/errorHelper');
const ObjectId = require('mongoose').Types.ObjectId;

// Utils
const errorMessages = require('../Utils/errorMessages');

module.exports = class taskController {
  static async createTask(req, res) {
    const { title, description } = req.body;

    const available = true;

    if (!title) {
      return res.status(422).json({ error: 'O título é obrigatório' });
    }
    if (!description) {
      return res.status(422).json({ error: 'A descrição é obrigatória' });
    }

    // Pegar o dono da task
    const token = getToken(req);
    const user = await getUserByToken(token);

    // criação das tasks
    const task = new Task({
      title,
      description,
      user: {
        _id: user._id,
        name: user.name,
      },
    });

    try {
      const newTask = await task.save();
      res.status(201).json({
        message: 'Task cadastrada com sucesso',
        newTask,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  static async getAll(req, res) {
    const tasks = await Task.find().sort('-createdAt');

    res.status(200).json({ tasks: tasks });
  }

  static async getMyTasks(req, res) {
    // Resgato o token e o usuário
    const token = getToken(req);
    const user = await getUserByToken(token);

    // Busco as tasks do usuário com o id do usuário
    const tasks = await Task.find({ 'user._id': user._id }).sort('-createdAt');

    res.status(200).json({ tasks: tasks });
  }

  static async getTaskById(req, res) {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(422).json({ error: 'ID inválido' });
    }

    const task = await Task.findOne({ _id: id });

    if (!task) {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    res.status(200).json({ task: task });
  }

  static async deleteTaskById(req, res) {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(422).json({ error: 'ID inválido' });
    }

    const task = await Task.findOne({ _id: id });

    if (!task) {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    // Verifica se o usuário é o dono da task
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (task.user._id.toString() !== user._id.toString()) {
      return res
        .status(401)
        .json({ error: 'Você não tem permissão para remover essa tarefa!' });
    }

    await Task.findByIdAndRemove(id);

    res.status(200).json({ message: 'Tarefa removida com sucesso' });
  }

  static async updateTaskById(req, res) {
    const id = req.params.id;

    const { title, description, status } = req.body;

    const updatedData = {};

    if (!ObjectId.isValid(id)) {
      return res.status(422).json({ error: 'ID inválido' });
    }

    if (!title) {
      return res.status(422).json({ error: 'O título é obrigatório' });
    } else {
      updatedData.title = title;
    }

    if (!description) {
      return res.status(422).json({ error: 'A descrição é obrigatória' });
    } else {
      updatedData.description = description;
    }

    if (status) {
      updatedData.status = status;
    }

    const task = await Task.findOne({ _id: id });

    if (!task) {
      res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    // Verifica se o usuário é o dono da task
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (task.user._id.toString() !== user._id.toString()) {
      return res
        .status(401)
        .json({ error: 'Você não tem permissão para alterar essa tarefa!' });
    }

    await Task.findByIdAndUpdate(id, updatedData);

    res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
  }
};
