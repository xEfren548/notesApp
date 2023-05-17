const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const morgan = require('morgan');

// Inicializaciones
const app = express();

//Settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',

}))
app.set('view engine', '.hbs');


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));

// Global variables



// Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))

// app.get('/', (req,res) =>{
//     res.render('index');
// })


// Static files
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app