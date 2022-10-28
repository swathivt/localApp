const express = require('express');
const router = express.Router();
const signup = require('../models/signup.js');


router.get('/', async (req,res) => {
   await console.log("Welcome...");
  // res.data("{'key' : 'valuerk'}");
  res.json({'key' : 'valuerk'});
})

router.post('/signup', (req,res) => {
   console.log("Server - Signup Post method");
    const signedUpUser = new signUp({

            // name: req.body.name,
            // email: req.body.email,
            // rollno: req.body.rollno
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

module.exports = router