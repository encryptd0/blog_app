const express = require('express');
// now we split our app into a router that does the routing
const router = express.Router();
const post = require('../models/post');

//Routes
router.get('', async (req, res) => {
    const locals = {
        title: "Node JS Blog",
        description: "Simple blog using Node JS, EJS and Mongo DB :)"
    }

    try {

        let perPage = 7;
        let page = req.query.page || 1;

        const data = await post.aggregate([{ $sort: {createdAt: -1 } } ])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec()

        const count = await post.countDocuments({});
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);


        res.render('index', { 
            locals,
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null,
            currentRoute: '/',
        });


    } catch (error) {
        console.log(`Error: ${error}`)
    }
});



router.get('/about', (req, res) => {
    res.render('about');
});


router.get('/contact', (req, res) => {
    res.render('contact');
});

//now we export our router module so the app should work
module.exports = router