const express = require('express');
const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }    
`)

const app = express();

app.listen(3000, () => {
    console.log('Running GraphQL Server')
});