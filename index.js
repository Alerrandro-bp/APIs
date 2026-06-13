const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Olá mundo!')
});


// criar usuarios
let usuarios = [];
app.post('/users', function(req, res){
    const { nome, idade } = req.body;

    const newUsers = {
        id: usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1, 
        nome,
        idade, 
    };

    usuarios.push(newUsers);

    res.send(newUsers);
});

//listar os usuarios
app.get('/users', function(req, res){
    res.send(usuarios);
});

//https://localhost:3000
app.listen(3000, function(){
    console.log('servidor rodando !');
});