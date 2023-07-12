const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Import do certificado e key SSL/TLS.
const loadCertificado = async () => {
  try {
    const cert = await fs.readFileSync(path.join(__dirname, 'Certificate', 'taskflow.crt'));
    const key = await fs.readFileSync(path.join(__dirname, 'Certificate', 'taskflow.key'));
    return {
      cert,
      key
    };
  } catch (error) {
    console.log(chalk.red(`Erro ao ler os certificados: ${error}`));
  }
}

// Definição do app Express.
const app = express();

// Aplica as configurações de segurança fornecidas pelo Helmet.
app.use(helmet());

// Configuração do CORS.
app.use(cors({credentials: true, origin: 'https://172.25.0.2:5173'}));

// Configuração para o retorno de JSON.
app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes');
const tasksRoutes = require('./routes/taskRoutes');

// Middleware para as rotas relacionadas aos usuários.
app.use('/users', userRoutes);

// Middleware para as rotas relacionadas as Tasks.
app.use('/tasks', tasksRoutes);


const initServer = async () => {
  try {
    const {
      cert,
      key
    } = await loadCertificado();
    const options = {
      cert,
      key
    };
    
    const server = http.createServer(app);
    const io = new Server(server);

    // Evento de conexão do Socket.IO.
    io.on('connection', socket => {
      console.log(chalk.green('Um cliente se conectou!'));

      // Evento de desconexão do cliente.
      socket.on('disconnect', () => {
        console.log(chalk.red('Um cliente se desconectou!'));
      });
    });

    server.listen(5000, () => {
      console.log(chalk.blue('Escutando na porta 5000!'));
    });
  } catch (error) {
    console.log(chalk.red(`Erro ao iniciar o servidor!: ${error}`));
  }
}

initServer();