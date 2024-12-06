const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/project-1');

const eventController = require('./app/controllers/eventController');

app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/events', eventController.index);
app.post('/events', eventController.create);

app.get('/events/delete/:id', eventController.delete);

app.listen(8080, () => {
    console.log('Serwer dziala.');
});