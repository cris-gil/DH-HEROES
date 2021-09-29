let express = require('express');
let path = require('path'); 
// const port = process.env.PORT || 3000
let app = express()

app.use(express.static(path.join(__dirname, './DH-HEROES/public')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './DH-HEROES/views/index.html')); // Aquí se crea una ruta absoluta que requiere el archivo, se usa (__dirname, '/_____.html')
})
app.get('/babbage', function (req, res) {
    res.sendFile(path.join(__dirname, './DH-HEROES/views/babbage.html')); // Aquí se crea una ruta absoluta que requiere el archivo, se usa (__dirname, '/_____.html')
})

app.get('/berners-lee', function (req, res) {
    res.sendFile(path.join(__dirname, './DH-HEROES/views/berners-lee.html')); // Aquí se crea una ruta absoluta que requiere el archivo, se usa (__dirname, '/_____.html')
})

app.get('/clarke', function (req, res) {
    res.sendFile(path.join(__dirname, './DH-HEROES/views/clarke.html')); // Aquí se crea una ruta absoluta que requiere el archivo, se usa (__dirname, '/_____.html')
})

app.get('/hamilton', function (req, res) {
    res.sendFile(path.join(__dirname, './DH-HEROES/views/hamilton.html')); 
})

app.get('/hopper', function (req, res) {
    res.sendFile(path.join(__dirname, './DH-HEROES/views/hopper.html')); 
})

app.get('/lovelace', function (req, res) {
    res.sendFile(path.join(__dirname, './DH-HEROES/views/lovelace.html')); 
})

app.get('/turing', function (req, res) {
    res.sendFile(path.join(__dirname, './DH-HEROES/views/turing.html')); 
})

app.listen(3030, () => console.log('Servidor corriendo'));