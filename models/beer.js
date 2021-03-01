const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    favorites: String
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;