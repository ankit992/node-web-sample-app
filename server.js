const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials' );
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (errorMessage) => {
        if(errorMessage){
            console.log('Unable to append to file');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/',(req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.send({
    //     name: 'Ankit',
    //     timeKills: [ 'movies', 'moviessssssssss' ]
    // });
    res.render('home',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website',        
    });
});

app.get('/about',(req, res) => {
    // res.send('About page');
    res.render('about',{
        pageTitle: 'About Page',
    });
});

app.get('/projects', (req, res) => {
    res.render('projects',{
        pageTitle: 'Projects Page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'This is an error message'
    });
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});