const express = require('express');
const router = express.Router();
const Beer = require('../models/beer.js');


// SEED
router.get('/seed', (req, res) => {
    Beer.create([
        {
            name: 'Channel Marker Brewing Co.',
            img: 'https://beverly.wickedlocal.com/storyimage/WL/20180508/NEWS/180507134/AR/0/AR-180507134.jpg',
            location: 'Beverly, MA',
            favorites: 'A Matter of Moons (DIPA), Siren (Sour), Whitecap (N.E. IPA)',
            rating: '4.11'
        },
        {
            name: 'Backbeat Brewing Co.',
            img: 'https://s3.amazonaws.com/toasttab/restaurants/restaurant-35884000000000000/banner_1585324492.jpg',
            location: 'Beverly, MA',
            favorites: 'Mister Magic (DIPA), Jive (N.E. IPA), ANY Hard Seltzer/Tonic!',
            rating: '4.04'
        },
        {
            name: 'Bent Water Brewing Co.',
            img: 'https://i1.wp.com/absolutebeer.com/wp-content/uploads/2019/12/AB-Breweries-Bent-Water-Brewing-Company-Logo-1.jpg?fit=1200%2C1200&ssl=1',
            location: 'Lynn, MA',
            favorites: 'Sluice Juice (N.E. IPA), Double Thunder Funk (DIPA), Jolene (Porter)',
            rating: '3.72'
        }
    ], (err, data) => {
        res.redirect('/beer_explorer');
    })
});


// ROUTES

// INDEX
router.get('/', (req, res) => {
    console.log(req.session);

    Beer.find({}, (error, allBeer) => {
        res.render('index.ejs', {
            beer: allBeer
        });
    });
});

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// CREATE
router.get('/', (req, res) => {
    Beer.create(req.body, (error, createdBeer) => {
        res.redirect('/beer_explorer');
    });
});

// SHOW
router.get('/:id', (req, res) => {
    Beer.findById(req.params.id, (error, foundBeer) => {
        res.render('show.ejs', {
            beer: foundBeer
        });
    });
});


// DELETE
router.delete('/:id', (req, res) => {
    Beer.findByIdAndRemove(req.params.id, (error, deletedBeer) => {
        console.log('Deleting brewery: ' + req.params.id);
        console.log(deletedBeer);

        res.redirect('/beer_explorer');
    });
});


// EDIT
router.get('/:id/edit', (req, res) => {
    Beer.findById(req.params.id, (error, foundBeer) => {
        res.render('edit.ejs', { beer: foundBeer })
    });
});


// UPDATE
router.get('/:id', (req, res) => {
    Beer.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedBeer) => {
        res.redirect('/beer_explorer');
    });
});


// EXPORT
module.exports = router;