const mongoose = require('mongoose');
const config = require('./config/config.js');


// const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
// const MONGODB_URI = 'mongodb://${NOTES_APP_MONGODB_HOST)/${NOTES_APP_MONGODB_DATABASE}';


// const NOTES_APP_MONGODB_HOST = proccess.env.NOTES_APP_HOST;
// const NOTES_APP_MONGODB_DATABASE = proccess.env.NOTES_APP_HOST;

// mongoose.connect(MONGODB_URI, {
//     useInifiedTopology: true,
//     useNewUrlParser: true
// })
//     .then(db => console.log('Database is connected'))
//     .catch(err => console.log(err))
    
    
console.log('Connecting to database...');
mongoose.connect(config.dbUrl(), {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log("connected to db");
    }).catch(err => console.log("Not connected to db"));
    
module.exports = {mongoose}