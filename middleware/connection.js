
const mongoose = require('mongoose');
const uri = `mongodb+srv://dbuser:${process.env.DB_PASS}@myshopcluster.bcafg.mongodb.net/myshopcluster?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


