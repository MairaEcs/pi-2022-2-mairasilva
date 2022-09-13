const express = require('express')
const app = express()
const path = require('path')

const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'user.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}...`)
    console.log(__dirname)
})