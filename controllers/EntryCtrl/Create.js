////////////////////////
// Setup - Import deps
////////////////////////
const Entry = require('../../models/Entry')
///////////////////////
// Exports
///////////////////////
module.exports = {create}

async function create(req, res) {
    try {
        await Entry.create(req.body)
    } catch (err) {
        res.send(err)
    }
}