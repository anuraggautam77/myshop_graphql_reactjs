const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 9999;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50MB' }));

// make directory Static

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, './dist/index.html'));
	res.end();
});
app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.listen(port, () => {
	console.log(`Front end application serve at http://localhost:${port}`);
});

module.exports = app;
