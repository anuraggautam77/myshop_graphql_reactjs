//module.exports = require('./config/webpack.dev');

var path = require('path');
var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src');

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR
}

function buildConfig(env) {
  if (env.NODE_ENV === 'dev' || env.NODE_ENV === 'prod') {

    return require('./config/' + env.NODE_ENV + '.js');
  } else {
    console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.")
  }
}
module.exports = buildConfig;






