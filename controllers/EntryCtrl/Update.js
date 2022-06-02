////////////////////////
// Setup - Import deps
////////////////////////
const Entry = require('../../models/Entry.js')
///////////////////////
// Exports
///////////////////////
module.exports = {update}

async function update(req, res) {
    try {
        await Entry.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/bookmarkd`);
    } catch(err) {
        res.send(err);
    }
}