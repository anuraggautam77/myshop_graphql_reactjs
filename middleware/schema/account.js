const { gql } = require('apollo-server');

module.exports = gql`
	extend type Mutation {
		signupUser(
			fname: String!,
			token: String!,
			image: String!,
			provideID: String!,
			email: String!,
		): UserDetail
	}
 
	type UserDetail{
		fname:String!,
		email:String!,
		token:String!,
		image:String!
	}
`;


