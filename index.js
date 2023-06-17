const express = require('express');
const server = express();
const animes = require('./src/data/animes.json')

server.get('/', (req,res) => {
    return res.json(animes)
});


server.listen(3000, () => {
    console.log('Estau funcionado...')
})