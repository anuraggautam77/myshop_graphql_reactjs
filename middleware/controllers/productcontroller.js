const fs = require('fs');
const path = require('path');
const PRODUCT_JSON = __dirname + '/../stub/productlisting.json';
const ORDER_JSON = __dirname + '/../stub/orderhistory.json';

let productList = JSON.parse(fs.readFileSync(PRODUCT_JSON, 'utf-8'));


module.exports = ProductController = () => ({
    getProductList: () => {
        return productList;
    },

    getAllOrderHistory: () => {

        let orderList = JSON.parse(fs.readFileSync(ORDER_JSON, 'utf-8'));
        orderList.map((order) => {
            order.productlist.map((prod, index) => {
                let obj = productList.find(obj => obj.ProductID == prod);
                order.productlist.splice(index, 1, obj)
            })
        });
        return orderList;
    }


});