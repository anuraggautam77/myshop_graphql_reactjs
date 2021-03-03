const { AccountController } = require('../controllers');

module.exports = () => ({
	Mutation: {
		signupUser: async (root, params) => {
			const user = await AccountController.userLogin(params);
			return {
				fname: user.fullname,
				email: user.email,
				token: params.token,
				image: params.image
			}

		},

	}
});
