const express = require("express");
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors");

//definição do app
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//solve cors
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

//configuração para json response
app.use(express.json());

//public folde for images
app.use(express.static('public'));

//routes
const userRoutes = require('./routes/userRoutes');

app.use('/users', userRoutes);

// Evento de conexão do Socket.IO
io.on('connection', (socket) => {
    console.log('Um cliente se conectou');

});

app.listen(5000);