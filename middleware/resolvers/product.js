const { PubSub } = require('apollo-server');

const { ProductController } = require('../controllers/index');

module.exports = () => ({
    Query: {
        products: (parent, args, { }) => {
            return ProductController.getProductList();
        },

        orderhistory: (parent, args, { }) => {
            return ProductController.getAllOrderHistory();
        },

    },
    Mutation: {

    },
    Subscription: {

    }
});
