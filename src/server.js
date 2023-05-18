const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

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
      // Disable the knownHelpersOnly check
    runtimeOptions: {
    knownHelpersOnly: false,
    allowProtoPropertiesByDefault: true
  }
}))
app.set('view engine', '.hbs');


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
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