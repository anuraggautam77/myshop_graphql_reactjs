const { gql } = require('apollo-server');

module.exports = gql`
	extend type Query {
		products: [Product!]
		orderhistory: [Order]		
	}
	
	type Order{
		orderId: ID!
		orderPlaced: String
		orderdelivered: String
		status: String
		productlist:[Product]!
		shippedto: String
	}


    type Product {
        ProductID:ID!
		SKU: String
		Name: String
		Price: Float
		RatingAvg:Float
		image: String
		RatingCount: Int
		DateCreated: String
    }



`;
