const mongoose = require('../db/Conn');
const { Schema } = mongoose;

// Define o modelo "Task" utilizando o Mongoose.
const Task = mongoose.model(
  'Task',
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      status: {
        type: Boolean,
        default: false,
      },
      user: Object,
    },
    {
      timestamps: true,
    }
  )
);

// Exporta o modelo "Task" para uso em outros módulos.
module.exports = Task;
