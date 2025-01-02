const mongoose = require('mongoose')
const {HOST, PORT, DBNAME} = require('./config/config.js')



let db = mongoose.connect(`mongodb://${HOST}:${PORT}/${DBNAME}`)

module.exports = db