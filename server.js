const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');



// APP CONFIGURATION
const app = express();
const port = process.env.port || 3000;



// MONGOOSE CONNECTION LOGIC
mongoose.connect('mongodb://localhost:27017/beer_explorer', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});



// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// LISTENER
app.listen(port, () => {
    console.log('Beer Explorer listening on port: ' + port);
});