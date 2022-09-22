const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const port = 3000

const { Server } = require('socket.io')
const io = new Server(server)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//users = []

io.on('connection', (socket) => {
    socket.on('setUsername', (data) => {
        //console.log(`Usuário conectado ${data}`)
        socket.emit('userSet', {username: data})
        socket.broadcast.emit('list', data)
        socket.broadcast.emit('messageConnected', data)
    })

    socket.on('msg', (data) => {
        io.emit('newmsg', data)
    })


    socket.on('messageDisconnected', (data) => {
        io.emit('messageDisconnected', data)
    })

    socket.on('disconnect', () => {
        //console.log('Usuário desconectou')
    })
    
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})