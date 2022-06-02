////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config()
require('./connection/db')
const express = require('express')
const app = express()
//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
app.get("/", (req, res) => {
    res.send("Working")
})

///////////////////////////
// Server Listener
///////////////////////////
app.listen(4000, () => {
    console.log("Listening on Port 4000")
})