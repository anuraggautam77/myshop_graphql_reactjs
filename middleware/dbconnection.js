const neo4j = require('neo4j');

const dbConfig = { url: '35.202.226.223:4502/', username: 'neo4j', pass: 'neo4j@123', host: 'http:' };
//local
 // const dbConfig = { url: 'localhost:7474', username: 'neo4j', pass: 'admin', host: 'http:' };

//const dbConfig = { url: '10.150.93.47:11019/', username: 'neo4j', pass: 'admin', host: 'http:' };

ConnectionEstablish = function() {
	var dbConnection = null;
	dbConnection = new neo4j.GraphDatabase(`${dbConfig.host}//${dbConfig.username}:${dbConfig.pass}@${dbConfig.url}`);
	var getInstance = function() {
		return dbConnection;
	};

	return {
		getInstance: getInstance
	};
};

module.exports = ConnectionEstablish;
