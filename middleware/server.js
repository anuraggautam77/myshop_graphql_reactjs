const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const http = require('http');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');
const resolvers = require('./resolvers')();

const port = process.env.PORT || 9081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50MB' }));

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: ({ req }) => ({
		header: {}
	})
});

server.applyMiddleware({
	app
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

/// HTTP server 

httpServer.listen(port, () => {
	console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
	console.log(`Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`);
});

module.exports = app;


