const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client')

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Evaluation = require('./resolvers/Evaluation');
const Item = require('./resolvers/Item');
const Skill = require('./resolvers/Skill');
const Noter = require('./resolvers/Noter');

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

