require('dotenv').config();

// express layout is just extra 
// step 1: require the express module
const express = require('express');
const expressLayout = require('express-ejs-layouts');

//step 2: use express by creating an app variable 
const app = express();
const PORT = 5000 || process.env.PORT

// setup a static folder we can make changes in, this also allows us to split our logic
app.use(express.static('public'));

// this is extra but also an example of middleware
//middleware 
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// this is an example of using express directly as oppose of using routers (we'll use that later)
// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

app.use("/", require('./server/routes/main'));

// step 3: always listen on port x
app.listen(PORT, () => {
    console.log(`App active on port ${PORT}`);
})