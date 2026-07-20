const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("Oii");
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

//encontrar espesífico 
app.get("/livro/:id", (req, res) => {
    const id = parseInt(req.params.id);
    
    const encontrarLivro = ArreyLivros.find(livro => livro.id === id);

    if(!encontrarLivro){
      res.status(404).send("Livro não encontrado !");
     //res.status(404).json("Livro não encontrado !");  
    }

    res.json(encontrarLivro);
});

//Pegar todos os livros !
app.get("/livro", (req, res) => {
    res.json(ArreyLivros);
});

app.put("/livro/:id", (req, res) => {
    const  id  = req.params.id;
    const { nome, autor } = req.body

    const livro = ArreyLivros.find(livro => livro.id == id); 

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado!" });
    }

    if (nome){
        livro.nome = nome
    }
    if (autor) {
        livro.autor = autor;
    }

    res.json(livro);
});

app.delete("/livro/:id", (req, res) => {
    const id = req.params.id;

    const index = ArreyLivros.findIndex(livro => livro.id == id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Livro não encontrado!" });
    }

    const livroDeletado = ArreyLivros.splice(index, 1);

    res.json(livroDeletado[0]);
});

app.listen(3000, () => {
    console.log("Servidor rodando");
});
