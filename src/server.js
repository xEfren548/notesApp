const express = require('express');
const { Aggregate } = require('mongoose');
const path = require('path');

// Inicializaciones
const app = express();

//Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))


//Middlewares
app.use(express.urlencoded({ extended: false }));


// Global variables



// Routes
app.get('/', (req,res) =>{
    res.send('Hello world!');
})


// Static files
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app