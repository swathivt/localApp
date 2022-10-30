const express = require('express');
const router = express.Router();
const signup = require('../models/signup.js');
require('dotenv').config({ path: "./config.env" });
const axios = require('axios');

const apiKey = process.env.APIKEY;


router.get('/restaurants', async (req,res) => {
   // To reslove cors issue (XMLHttpRequest)
   res.header( {
      "Access-Control-Allow-Origin": "http://localhost:3000" ,
         "mode":"no-cors" }
   );
    console.log("Welcome...");

    var restaurantData = await placesNearByClientLib();
    res.json( {restaurants: restaurantData});
})

router.post('/signup',  (req,res) => {
   console.log("Server - Signup Post method");
    const signedUpUser = new signUp({


        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        password: req.body.password
     })
     signedUpUser.save()
     .then(data =>{
        res.json(data)
     })
     .catch(error =>{
        res.json(error)
     })
    
})



async function placesNearByClientLib() {
  var restaurantData;

  var config = {
    method: "get",
    url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=" + apiKey  ,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      restaurantData = response.data
    })
    .catch(function (error) {
      console.log(error);
    });

  return restaurantData;
}

module.exports = router