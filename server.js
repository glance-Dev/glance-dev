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
//Database connection
const { Client } =  require('pg')
const url=process.env.DB_URL
const client = new Client(url)

//Routes
app.post('/addCourse',courseHandler)


//Handlers
function courseHandler(req,res){
    
        console.log(req.body)
        const { course_Id , course_name}= req.body
        const  sql = `INSERT INTO course(course_Id , course_name)
        VALUES ($1,$2) RETURNING *;`
        const values = [course_Id , course_name] 
        client.query(sql, values).then((result)=>{
            console.log(result.rows)
            res.status(201).json(result.rows)
        }) .catch((error) => {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ error: 'An error occurred while adding the course.' });
        });
    }
    

 client.connect().then(()=>{
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
}
).catch()