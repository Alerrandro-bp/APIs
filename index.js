const { createYoga, createSchema } = require('graphql-yoga');
const { createServer } = require('node:http');

const usuarios = [
    {
        id: 1,
        nome: "Alerrandro",
        idade: 22
    },
    {
        id: 2,
        nome: "Maria",
        idade: 23
    }
];

const typeDefs = `
    type Usuario {
        id: Int!
        nome: String!
        idade: Int!
    }

    type Query {
        usuarios: [Usuario!]!
    }
`;

const resolvers = {
    Query: {
        usuarios: () => usuarios
    }
};

const yoga = createYoga({
    schema: createSchema({
        typeDefs,
        resolvers
    })
});

const server = createServer(yoga);

server.listen(4000, () => {
    console.log("Servidor rodando");
});