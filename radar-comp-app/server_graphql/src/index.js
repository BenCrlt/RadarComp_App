const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client')

const Query = require('../src/resolvers/Query');
const Mutation = require('../src/resolvers/Mutation');
const User = require('../src/resolvers/User');
const Evaluation = require('../src/resolvers/Evaluation');
const Item = require('../src/resolvers/Item');
const Skill = require('../src/resolvers/Skill');
const Noter = require('../src/resolvers/Noter');

const resolvers = {
    Query,
    Mutation,
    User,
    Evaluation,
    Item,
    Skill,
    Noter
}

const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
      path.join(__dirname, 'schema.graphql'),
      'utf8'
    ),
    resolvers,
    context: {
        prisma
    }
})
  
server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
);

