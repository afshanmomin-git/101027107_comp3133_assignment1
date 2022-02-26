const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const http = require('http').createServer(app)
const TypeDefs = require('./schema.js')
const Resolvers = require('./resolvers.js')

const port = process.env.PORT || 4041
const db ='mongodb+srv://afshanmomin123:afshanmomin123@cluster0.z8lln.mongodb.net/101027107_comp3133_assig1?retryWrites=true&w=majority'
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
})

app.use('*',cors())

server.start()
.then(res => {
    server.applyMiddleware({app})
    
    app.listen(port, () => {
        console.log(`Server at http://localhost:${port}${server.graphqlPath}`)
    })
})






