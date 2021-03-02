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
        },
        {
            name: 'East Regiment Beer Co.',
            img: 'https://images.squarespace-cdn.com/content/v1/55e5bcf9e4b0bf232d9437a8/1558643596780-0BYZ6O30V95A5OPTZQBN/ke17ZwdGBToddI8pDm48kLkTs04JHiQ9UFMEKRf6ZbFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyJD_vGfG6U3W7BkMrboK9zdQmJ34d4ACXuDrtVgjP0zpVckA6UBNdd_42SZa_txXw/ERBC-LOGO.png',
            location: 'Salem, MA',
            favorites: 'Steve\'s Quality Saison (Saison), Say Hello to Lumbergh! (N.E. IPA), S.H.A.T. Galaxy(N.E. IPA)',
            rating: '3.68'
        },
        {
            name: 'Essex County Brewing Co.',
            img: 'https://pbs.twimg.com/profile_images/988032965274845184/FNSxK_PS.jpg',
            location: 'Peabody, MA',
            favorites: 'Judah (DIPA), Perpetual Greetings (DIPA), Zwei Opas (Kolsch)',
            rating: '3.89'
        },
        {
            name: 'Gentile Brewing Co.',
            img: 'https://i2.wp.com/gentilebrewing.com/wp-content/uploads/2015/11/Gentile-Brewing.jpg?fit=1920%2C1081&ssl=1',
            location: 'Beverly, MA',
            favorites: 'Stout (Am. Stout), Divergent (Am. IPA), Dunkel (Munich Dunkel)',
            rating: '3.62'
        },
        {
            name: 'Granite Coast Brewing Co.',
            img: 'https://pbs.twimg.com/profile_images/1026918995776159749/0ABSZ6Ds_400x400.jpg',
            location: 'Peabody, MA',
            favorites: 'Fable Series: Cry Wolf IPA (N.E. IPA), Robust Porter (Am. Porter), Ci-Wheat (Am. Pale Wheat)',
            rating: '3.73'
        },
        {
            name: 'Great Marsh Brewing Co.',
            img: 'https://static1.squarespace.com/static/5dbf69ba2a3a26661e322f9c/t/5ed695e2b417e27c46a9d04f/1593651969692/?format=1500w',
            location: 'Essex, MA',
            favorites: 'NE IPA V10 (N.E. IPA), Classic Dublin Stout (Irish Dry Stout), English Brown Ale (Brown Ale)',
            rating: '3.61'
        },
        {
            name: 'Ipswich Ale Brewery',
            img: 'https://untappd.akamaized.net/site/brewery_logos_hd/brewery-9341_029d0_hd.jpeg',
            location: 'Ipswich, MA',
            favorites: '1620 (N.E. IPA), Zumatra Stout (Coffee Stout), Route 1A (DIPA)',
            rating: '3.59'
        },
        {
            name: 'Lord Hobo Brewing Co.',
            img: 'https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/894885971.lhbco.square.crown.on.black.png',
            location: 'Woburn, MA',
            favorites: 'Boomsauce (DIPA), Steal This Can (Am. IPA), Nitro Meat & Potatoes',
            rating: '3.84'
        },
        {
            name: 'Marblehead Brewing Co.',
            img: 'https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/95789274_1036579200077135_7043878126446706688_n.jpg?_nc_cat=102&ccb=2&_nc_sid=8024bb&_nc_eui2=AeGZbv-gMeASqxh2wmBhgk_A4RtDd_vFUt3hG0N3-8VS3dLoaPVrLNifE51oXfyc6-4&_nc_ohc=qYiSD1WXORsAX8U0ZK1&_nc_ht=scontent.fybz2-2.fna&oh=1af338f2d36e322aede36f2b61361a55&oe=60431414',
            location: 'Marblehead, MA',
            favorites: 'Ale No. 2 (Am. Pale Ale)',
            rating: '3.99'
        },
        {
            name: 'Notch Brewing',
            img: 'https://massbrewbros.com/wp-content/uploads/2019/05/rednotchhorizontal.jpg',
            location: 'Salem, MA',
            favorites: 'Dog And Pony Show (N.E. Pale Ale), Left of the Dial (India Session Ale), Tmavy (Dark Lager)',
            rating: '3.71'
        },
        {
            name: 'Old Planters Brewing Co.',
            img: 'https://pbs.twimg.com/profile_images/622062474238431232/Q6tm-1i4_400x400.png',
            location: 'Beverly, MA',
            favorites: 'Rhino Tears (N.E. IPA), O.P.P. (Pilsner), Fat Tuna (N.E. IPA)',
            rating: '3.78'
        },
        {
            name: 'Rockport Brewing Co.',
            img: 'https://massbrewbros.com/wp-content/uploads/2020/06/Rockport-Brewing.jpg',
            location: 'Rockport, MA',
            favorites: 'Twin Lights (DIPA), McAteer\'s (Irish Dry Stout), Hatchet (India Session Ale)',
            rating: '3.90'
        },
        {
            name: 'True North Ale Co.',
            img: 'https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2020/12/21153827/xG52aK4G_400x400.jpg',
            location: 'Ipswich, MA',
            favorites: 'Northern Haze (N.E. IPA), Cerveza (Lager), Stammtisch (German Pilsner)',
            rating: '3.81'
        },
        {
            name: 'Wandering Soul Beer Co.',
            img: 'https://cdn.beeradvocate.com/im/places/54309.jpg',
            location: 'Beverly, MA (Currently Contract Brewing)',
            favorites: 'Things We Don\'t Say (Double N.E. IPA), Bend, Don\'t Break (N.E. Pale Ale), The Brightest Star (N.E. IPA)',
            rating: '3.93'
        },
    ], (err, data) => {
        res.redirect('/beer_explorer');
    })
});


// ROUTES

// INDEX
router.get('/', (req, res) => {
    console.log(req.session);

    Beer.find({}, (error, allBeer) => {
        res.render('beer_explorer/index.ejs', {
            beer: allBeer
        });
    });
});

// NEW
router.get('/new', (req, res) => {
    res.render('beer_explorer/new.ejs');
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
        res.render('beer_explorer/show.ejs', {
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
        res.render('beer_explorer/edit.ejs', { 
            beer: foundBeer,
            method: 'PUT'
        });
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