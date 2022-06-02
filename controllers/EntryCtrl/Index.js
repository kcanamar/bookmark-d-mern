////////////////////////
// Setup - Import deps
////////////////////////
const Entry = require("../../models/Entry");
///////////////////////
// Exports
///////////////////////
module.exports = {
  index,
};

async function index(req, res) {
  try {
    let entries = await Entry.find({});
    res.json(entries);
  } catch (err) {
    res.status(400).json(err);
  }
}
