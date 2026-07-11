const express = require('express');
const app = express();
/*
const unsuario1 = {
    "id": 1,
        "nome": "João",
        "idade": 10,
};

const unsuario2 = {
     "id": 2,
        "nome": "Maria",
        "idade": 20
}

const usuario3 = {
    "id": 3,
        "nome": "Pedro",
        "idade": 30
}

const allUsuarios = [unsuario1, unsuario2, usuario3]

app.get('/', (req, res) =>{
    res.json(allUsuarios);
});

//http://localhost:3000/usuario?id=1
app.get('/usuario', (req, res) =>{
    res.json(req.query);
});

//http://localhost:3000/usuario/1
app.get('/usuario/:id', (req, res) =>{
    res.json(req.params);
});
*/

app.get('/', function(request, response){
    const tempo = new Date();
    response.json(tempo);
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});