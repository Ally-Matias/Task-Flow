const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { dirname, join } = require('path');

const currentDirname = dirname(require.main.filename);

const app = express();
const httpServer = http.createServer(app);
const io = new socketIO.Server(httpServer);

app.get('/', (req, res) => {
  res.sendFile(join(currentDirname, '../index.html'));
});

io.on('connection', (socket) => {
  console.log('Um novo cliente se conectou');

  socket.on('chat message', (message) => {
    console.log('Mensagem recebida: ' + message);
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('Um cliente se desconectou');
  });
});

httpServer.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
