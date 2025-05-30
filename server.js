const express = require('express');
const path = require('path')
const { createYoga } = require('graphql-yoga');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const schema = makeExecutableSchema({
    typeDefs: typesArray
})

const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model'),
}

// const resolversArray = loadFilesSync('**/*', {
//     extensions: ['resolvers.js'],
// })

const app = express();

app.use('/graphql', createYoga({
    schema: schema,
    graphiql: true,
}));

app.listen(3000, () => {
    console.log('Running GraphQL Server on http://localhost:3000');
});