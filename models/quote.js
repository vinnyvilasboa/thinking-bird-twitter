const mongoose = require('mongoose')
const quoteSchema = new require('mongoose').Schema({
    quote: String,
    author: String
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote