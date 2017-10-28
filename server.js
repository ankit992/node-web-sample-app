const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

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

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'This is an error message'
    });
});
app.listen(3000);