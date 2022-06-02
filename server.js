////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config()
require('./connection/db')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 4200
//////////////////////
// Declare Middleware
//////////////////////
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
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
app.listen(PORT, () => {
    console.log(`Listening on Port ----> ${PORT}`)
})