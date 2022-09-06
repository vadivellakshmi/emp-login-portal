const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const port = process.env.PORT || 2000;
require ('dotenv').config();

app.use(express.json());
app.use(cors());

const dbConnect = process.env.DB_URI;
 mongoose.connect(dbConnect);

 const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('connected db successfully')
})

const userrouter = require('./route/user')
app.use('/api/user',userrouter);

const loginrouter = require('./route/login')
app.use('/api/login',loginrouter);


const rolerouter = require('./route/role')
app.use('/api/role',rolerouter);

const projectrouter = require('./route/project')
app.use('/api/project',projectrouter);

const jobtyperouter = require('./route/jobtype')
app.use('/api/jobtype',jobtyperouter);

const idproofrouter = require('./route/idproof')
app.use('/api/idproof',idproofrouter);

__dirname=path.resolve()
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, "/frontend/build")))
    app.get("*", (req,res) =>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}

app.listen(2000, ()  =>{

    console.log("server is running")
})