const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/notesApp'

mongoose.connect(MONGODB_URI, {
    useInifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))