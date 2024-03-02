//calling the packages
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const axios = require('axios');
const cors = require('cors');
app.use(cors())
const port = process.env.PORT

//Routes
app.get('/',HomePageHandler)


//Handlers
function HomePageHandler(req,res){
    res.send("hello from home page")
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});