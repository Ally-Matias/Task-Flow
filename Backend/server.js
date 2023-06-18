const express = require("express");
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors");

// Definição do app Express.
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configuração do CORS.
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

// Configuração para o retorno de JSON.
app.use(express.json());

// Pasta pública para imagens.
app.use(express.static('public'));

// Rotas
const userRoutes = require('./routes/userRoutes');

// Middleware para as rotas relacionadas aos usuários.
app.use('/users', userRoutes);

// Evento de conexão do Socket.IO.
io.on('connection', (socket) => {
    console.log('Um cliente se conectou');
});

// Inicia o servidor HTTP na porta 5000.
app.listen(5000);