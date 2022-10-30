const express = require('express');
const app = express();


const bodyParser = require('body-parser');
//const cors = require('cors');
// require('dotenv').config({ path: "./config.env" });
 const mongoose = require('mongoose');
 //app.use(cors);
 const port = process.env.PORT;

// const db = process.env.ATLAS_URI;
// mongoose.connect(db,{ useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
        console.log("MongoDB database connection established successfully");
})

 
 app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
     extended: true}));

app.use('/',require('./routes/routes.js'));


app.listen(5000, () => {
    console.log("Server is running on port 5000" );
})
