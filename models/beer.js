const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: String,
    location: { type: String, required: true },
    favorites: String,
    rating: String
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;