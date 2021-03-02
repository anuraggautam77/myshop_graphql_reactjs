module.exports = () => {
	const productResolvers = require('../resolvers/product')();
	const accountResolvers = require('../resolvers/account')();
	return [ productResolvers, accountResolvers ];
};
