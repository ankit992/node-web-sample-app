const express = require('express');

var app = express();

app.get('/',(req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Ankit',
        timeKills: [ 'movies', 'moviessssssssss' ]
    });
});

app.get('/about',(req, res) => {
    res.send('About page');
});

app.listen(3000);