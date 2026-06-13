const usuario = {
    "nome": "Alerrandro",
    "idade": 22,
};

console.log(usuario);
console.log(usuario.nome);

const usuarioJson = JSON.stringify(usuario);

console.log(usuarioJson);
console.log(usuarioJson.nome);

const parcelJson = JSON.parse(usuarioJson); //parse() para converter dados perante o JSON

console.log(parcelJson.nome);
