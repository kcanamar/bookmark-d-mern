////////////////////////
// Setup - Import deps
////////////////////////
const mongoose = require('mongoose')
const Schema = mongoose.Schema
///////////////////////
// Exports
///////////////////////
const entrySchema = new Schema(
    {
        title: String,
        url: String
    }
)
const Entry = mongoose.model("Entry", entrySchema)
module.exports = Entry