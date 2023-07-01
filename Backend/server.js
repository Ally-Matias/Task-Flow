const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config();

// Definição do app Express.
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configuração do CORS.
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3200',
  })
);

// Configuração para o retorno de JSON.
app.use(express.json());

// Pasta pública para as imagens dos usuários.
app.use(express.static('public'));

// Rotas
const userRoutes = require('./routes/userRoutes');
const tasksRoutes = require('./routes/taskRoutes');

// Middleware para as rotas relacionadas aos usuários.
app.use('/users', userRoutes);

// Middleware para as rotas relacionadas as Tasks.
app.use('/tasks', tasksRoutes);

// Evento de conexão do Socket.IO.
io.on('connection', socket => {
  console.log('Um cliente se conectou');
});

// Inicia o servidor HTTP na porta 5000.
app.listen(5000, () => {
  console.log(chalk.blue(`Escutando na porta 5000!`));
});
