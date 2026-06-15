const express = require('express');
// now we split our app into a router that does the routing
const router = express.Router();

//Routes
router.get('', (req, res) => {
    const locals = {
        title: "Node JS Blog",
        description: "Simple blog using Node JS, EJS and Mongo DB :)"
    }
    res.render('index', {locals});
});

router.get('/about', (req, res) => {
    res.render('about');
});


router.get('/contact', (req, res) => {
    res.render('contact');
});

//now we export our router module so the app should work
module.exports = router