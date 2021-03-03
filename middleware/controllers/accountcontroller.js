const Authentication = require('../auth');
const User = require('../models/userschema');


module.exports = AccountController = () => ({
	userLogin: async (objdata) => {
		const instance = new Authentication();
		const AuthData = await instance.verifyToken(objdata.token);
		if (!AuthData.status && AuthData.status !== 'error') {

			try {
				const findData = await User.find({ email: AuthData.email }) //, function (err, docs) {

				if (findData.length > 0) {
					return (findData[ 0 ])
				} else {
					const Users = new User({ email: AuthData.email, fullname: AuthData.name, phone: '', provideID: 'google' });
					return await Users.save();
				}
			} catch (error) {
				return { error, status: 'error' }
			}
		}
	},

});