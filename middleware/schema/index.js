const { gql } = require('apollo-server');
const productSchema = require('./product');
const accountSchema = require('./account');

const linkSchema = gql`
	type Query {
		_: Boolean
	}

	type Mutation {
		_: Boolean
	}

	type Subscription {
		_: Boolean
	}
`;

module.exports = [ linkSchema, productSchema, accountSchema ];
