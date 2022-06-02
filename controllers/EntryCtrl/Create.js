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
        res.json( await Entry.create(req.body))
    } catch(error){
        res.status(400).json(error)
    }
}