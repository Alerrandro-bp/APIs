const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Olá mundo!')
});

app.get('/nome', (req, res) =>{
    res.send('Alerrandro');
});

app.get('/sobreNome', (req, res) => {
    res.send('Buss Pickler');
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});