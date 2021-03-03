var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    provideID: String,
    email: String
});

module.exports = mongoose.model('user', UserSchema, 'Users'); 