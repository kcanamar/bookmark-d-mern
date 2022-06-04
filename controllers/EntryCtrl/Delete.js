////////////////////////
// Setup - Import deps
////////////////////////
const Entry = require("../../models/Entry");
///////////////////////
// Exports
///////////////////////
module.exports = {
  delete: deleteEntry,
};

async function deleteEntry(req, res) {
  try {
    await Entry.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(404).json(err);
  }
}
