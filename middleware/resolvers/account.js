const { AccountController } = require('../controllers');

module.exports = () => ({
	Mutation: {
		signupUser: (root, params) => {
			return { fname, email, token, image } = params;
		},

	}
});
