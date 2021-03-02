const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// const session = require('express-session');
// const {logRequest} = require('./services/middleware.js');


// IMPORT & CONFIGURE DOTENV
require('dotenv').config();


// APP CONFIGURATION
const app = express();
const port = process.env.port || 3000;
const DBNAME = process.env.DBNAME;



const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/beer_explorer'


// CONTROLLER LOGIC
const beerController = require('./controllers/beer.js');

// MODELS LOGIC
const Beer = require('./models/beer.js');


// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/beer_explorer', beerController);
// app.use(
//     session(
//         {
//             secret: process.env.SECRET,
//             resave: false,
//             saveUninitialized: false,
//         }
//     )
// );
// app.use(logRequest);




// MONGOOSE CONNECTION LOGIC
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});



// LISTENER
app.listen(port, () => {
    console.log('Beer Explorer listening on port: ' + port);
});