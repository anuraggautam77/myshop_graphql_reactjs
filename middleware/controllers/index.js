

const ProductController = require('./productcontroller');

const AccountController = require('./accountcontroller');
module.exports = {
	ProductController: ProductController(),
	AccountController: AccountController()
};
