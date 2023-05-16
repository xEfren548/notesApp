console.log(process.env.NOTES_APP_MONGODB_USER);

let dbConfig = {
    user: process.env.NOTES_APP_MONGODB_USER,
    password: process.env.NOTES_APP_MONGODB_PASSWORD,
    dbName: process.env.NOTES_APP_MONGODB_DBNAME,
    dbUrl: function(){
        return `mongodb+srv://${this.user}:${this.password}@cluster0.5jyeskn.mongodb.net/${this.dbName}?retryWrites=true&w=majority`
    },
}

module.exports = dbConfig;