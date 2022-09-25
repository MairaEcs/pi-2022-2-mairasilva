const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const port = 3000;

const { Server } = require('socket.io');
const io = new Server(server);

var users = new Set();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
    socket.on('setUsername', (data) => {

        let msgArray = data.split('|');
        users.add(msgArray[0]);
        socket.emit('userSet', {username: data});
        io.emit('list', Array.from(users));
        socket.broadcast.emit('messageConnected', data);
    });

    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });

    socket.on('messageDisconnected', (data) => {
        io.emit('messageDisconnected', data);

        let msgArray = data.split(' ');
        users.delete(msgArray[0]);
        io.emit('list', Array.from(users));
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });

    socket.on('disconnect', () => {
        //console.log('Usuário desconectou')
    });
    
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});