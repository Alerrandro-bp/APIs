const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("Olá Mundo !");
});

//----------------------
app.use(express.json());
let ArreyLivros = [];
//---------------------

//Método post
app.post("/livro", (req, res) => {
    const { id, nome, autor } = req.body;

    const novoLivro = {
        id,
        nome,
        autor
    };

    ArreyLivros.push(novoLivro);

    res.json(novoLivro);
});


app.get("/livro/:id", (req, res) => {
    const id = parseInt(req.params.id);
    
    const encontrarLivro = ArreyLivros.find(livro => livro.id === id);

    res.json(encontrarLivro);
});

//Pegar todos os livros !
app.get("/livro", (req, res) => {
    res.json(ArreyLivros);
});

app.listen(5000, () => {
    console.log("Servidor rodando");
});