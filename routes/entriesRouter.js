////////////////////////
// Setup - Import deps
////////////////////////
const express = require('express')
const router = express.Router()
const CreateCtrl = require('../controllers/EntryCtrl/Create')
const IndexCtrl = require('../controllers/EntryCtrl/Index')
const UpdateCtrl = require('../controllers/EntryCtrl/Update')
const DeleteCtrl = require('../controllers/EntryCtrl/Delete')
////////////////////
// Routes
///////////////////
router.get("/", IndexCtrl)
router.post("/", CreateCtrl.create)
router.put("/:id", UpdateCtrl)
router.delete('/:id', DeleteCtrl)
///////////////////////
// Exports
///////////////////////

module.exports = router