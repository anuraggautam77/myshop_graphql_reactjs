const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class Authentication {
    async verifyToken(token) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_CLIENT_ID
            });
            return ticket.payload;

        } catch (err) {
            return { error: err, status: 'error' };
        }
    }


}

module.exports = Authentication;